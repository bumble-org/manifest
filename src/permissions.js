/* ============================================ */
/*               CHECK PERMISSIONS              */
/* ============================================ */

export const cookies = s => /chrome\.cookies/.test(s)

export const contextMenus = s => /chrome\.contextMenus/.test(s)

export const notifications = s => /chrome\.notifications/.test(s)

export const proxy = s => /chrome\.proxy/.test(s)

export const storage = s => /chrome\.storage/.test(s)

export const tabs = s => /chrome\.tabs/.test(s)

export const webRequest = s => /chrome\.webRequest/.test(s)

export const webRequestBlocking = s =>
  webRequest(s) && /'blocking'/.test(s)
