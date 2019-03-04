import startCase from 'lodash.startcase'
import * as permissions from './permissions'

export const checkPermissions = code =>
  Object.entries(permissions)
    .filter(([, fn]) => fn(code))
    .map(([key]) => key)

/* ============================================ */
/*              DERIVE PERMISSIONS              */
/* ============================================ */

export const derivePermissions = (code, oldPerms = []) => {
  const set = new Set(oldPerms)

  const permissions = checkPermissions(code)

  permissions.forEach(p => set.add(p))

  return [...set]
}

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
    permissions,
  }
}
