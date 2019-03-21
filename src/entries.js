import dedupe from 'dedupe'
import { flattenObject } from './flat'
import { siftByPredObj } from './sift'

export const deriveEntries = (
  {
    manifest_version,
    name,
    version,
    description,
    author,
    short_name,
    permissions,
    content_security_policy,
    ...manifest
  },
  options,
) => {
  const values = flattenObject(manifest)
  const unique = dedupe(values)

  return siftByPredObj(options, unique)
}
