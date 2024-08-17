/*
 * @Description:
 * @FilePath: /twikoo/src/client/utils/avatar.js
 * @LastEditors: Rieko
 * @PersonalStation:
 * @Date: 2024-08-14 18:42:22
 * @LastEditTime: 2024-08-18 00:38:08
 * @Author: Rieko
 */
function normalizeMail(mail) {
  return String(mail).trim().toLowerCase()
}

function isQQ(mail) {
  return (
    /^[1-9][0-9]{4,10}$/.test(mail) || /^[1-9][0-9]{4,10}@qq.com$/i.test(mail)
  )
}

function getQQAvatar(qq) {
  const qqNum = qq.replace(/@qq.com/gi, '')
  return `https://thirdqq.qlogo.cn/g?b=sdk&nk=${qqNum}&s=140`
}

// 获取指定 cookie 名称的值
function getCookie(name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
  return null
}
export { normalizeMail, isQQ, getQQAvatar, getCookie }
