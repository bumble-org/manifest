/* ============================================ */
/*               CHECK PERMISSIONS              */
/* ============================================ */

export const cookies = s =>
  /chrome[\s\n]*\.[\s\n]*cookies/.test(s)

export const contextMenus = s =>
  /chrome[\s\n]*\.[\s\n]*contextMenus/.test(s)

export const notifications = s =>
  /chrome[\s\n]*\.[\s\n]*notifications/.test(s)

export const proxy = s => /chrome[\s\n]*\.[\s\n]*proxy/.test(s)

export const storage = s =>
  /chrome[\s\n]*\.[\s\n]*storage/.test(s)

export const tabs = s => /chrome[\s\n]*\.[\s\n]*tabs/.test(s)

export const alarms = s => /chrome[\s\n]*\.[\s\n]*alarms/.test(s)

export const webRequest = s =>
  /chrome[\s\n]*\.[\s\n]*webRequest/.test(s)

export const webRequestBlocking = s =>
  webRequest(s) && /'blocking'/.test(s)
