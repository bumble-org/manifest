export const combinePerms = (...permissions) => {
  const { perms, xperms } = permissions.flat(Infinity).reduce(
    ({ perms, xperms }, perm) => {
      if (perm.startsWith('!')) {
        return { perms, xperms: xperms.concat(perm.slice(1)) }
      }

      return { perms: perms.concat(perm), xperms }
    },
    { perms: [], xperms: [] },
  )

  return perms.filter(p => !xperms.includes(p))
}
