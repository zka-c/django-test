import { createClient, parseConnectionString } from '@vercel/edge-config'

const edgeConfig = createClient(process.env.EDGE_CONFIG)

interface FeatureFlags {
  storeClosed: boolean
}

// We use prefixes to avoid mixing up the flags with other Edge Config values
const prefixKey = (key: string) => `featureFlagsAppleStore_${key}`

export async function get(key: keyof FeatureFlags) {
  const prefixedKey = prefixKey(key)
  const featureFlag = await edgeConfig.get<FeatureFlags>(prefixedKey)
  return featureFlag
}

export async function set(key: keyof FeatureFlags, value: boolean) {
  const connectionString = parseConnectionString(process.env.EDGE_CONFIG!)

  if (!connectionString) throw new Error('Could not parse connection string')

  const edgeConfigId = connectionString.id
  const prefixedKey = prefixKey(key)

  const response = await fetch(
    `https://api.vercel.com/v1/edge-config/${edgeConfigId}/items?teamId=${process.env.TEAM_ID_VERCEL}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${process.env.AUTH_BEARER_TOKEN}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          {
            operation: 'upsert',
            key: prefixedKey,
            value,
          },
        ],
      }),
    }
  )

  return response.status === 200
}
