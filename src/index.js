import startCase from 'lodash.startcase'
import * as permissions from './permissions'

/* ============================================ */
/*              DERIVE PERMISSIONS              */
/* ============================================ */

export const derivePermissions = code =>
  Object.entries(permissions)
    .filter(([, fn]) => fn(code))
    .map(([key]) => key)

/* ============================================ */
/*                DERIVE MANIFEST               */
/* ============================================ */

export const deriveManifest = (
  { name, version, description, author },
  manifest = {},
  permissions = [],
) => {
  return {
    manifest_version: 2,
    name: startCase(name),
    version,
    description,
    author,
    ...manifest,
    permissions: combineArrays(
      manifest.permissions,
      permissions,
    ),
  }
}

export const combineArrays = (...arrays) => {
  const flat = arrays.flat(5).filter(a => a)
  const set = new Set(flat)
  const values = [...set]

  return values.sort()
}
