import startCase from 'lodash.startcase'
import * as permissions from './permissions'
import { combinePerms } from './combine'

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
  { name, version, description }, // package.json
  manifest = {}, // manifest.json
  ...permissions // will be combined with manifest.permissions
) => {
  // Make manifest optional
  if (Array.isArray(manifest) && !permissions.length) {
    permissions = manifest
    manifest = {}
  }

  return {
    manifest_version: 2,
    name: startCase(name),
    version,
    description,
    ...manifest,
    permissions: combinePerms(
      permissions,
      manifest.permissions || [],
    ),
  }
}

export { deriveEntries } from './entries.js'
