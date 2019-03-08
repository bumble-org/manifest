# @bumble/manifest

Derive the manifest of a Chrome extension from a `package.json` and the extension's script files.

# Install

```sh
$ npm install @bumble/manifest
```

# Usage

```javascript
import fs from 'fs'
import {
  derivePermissions,
  deriveManifest
} from '@bumble/manifest'
import pkg from './package.json'
import mani from './extension/manifest.json'

// Permissions are optional
const backgroundPage = './extension/background.js'
const code = fs.readFileSync(backgroundPage)
const permissions = derivePermissions(code)

const manifest = deriveManifest(pkg, mani, permissions)
```

No manifest? Just omit it.

```javascript
const manifest = deriveManifest(pkg, permittions)
```

This manifest won't have any entry points (no background page, no content scripts).

# API

## derivePermissions(code)

### code

Type: `string`

Contents of the JavaScript file from which to derive permissions.

## deriveManifest(pkg, [manifest], [permissions])

### pkg

Type: `Object`

The contents of `package.json`. Name, version, description, and author will be used.

### manifest

Type: `Object`

Any data included here will overwrite data derived from `package.json`.

This argument is optional, but if omitted, the derived manifest will not have any entry points (no background page, no content scripts). See [How Much Manifest Do I Need?](README.md#how-much-manifest-do-i-need) for more info.

### permissions

Type: `Array<string>`

Permissions in addition to `manifest.permissions`. The final `manifest.permissions` array will be flattened and deduped.

# How Much Manifest Do I Need?

Just your entry points! Something like this will work:

```json
{
  "background": {
    "scripts": ["background.js"],
    "persistent": false
  }
}
```

Or this:

```json
{
  "content_scripts": [
    {
      "matches": ["http://*.nytimes.com/*"],
      "css": ["myStyles.css"],
      "js": ["contentScript.js"]
    }
  ]
}
```

# License

MIT © [jacksteamdev](https://github.com/jacksteamdev)
