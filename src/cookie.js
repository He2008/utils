/**
 * @desc  根据key获取相关cookie
 * @param {String} key
 * @return {String||Null}
 */
export function getCookie(key) {
  let allCookie = document.cookie.replace(/\s/g, "").split(";");
  let temp;
  for (let i = 0; i < allCookie.length; i++) {
    temp = allCookie[i].split("=");
    if (temp[0] === encodeURIComponent(key)) {
      return decodeURIComponent(temp[1]);
    }
  }
  return null;
}

/**
 * 获取Cookie列表
 * @return {Object} cookie obj
 */
export function getCookies() {
  let allCookies = document.cookie.replace(/\s/g, "").split(";");
  let cookies = {};
  allCookies.forEach(str => {
    let temp = str.split("=");
    cookies[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
  });
  return cookies;
}

/**
 * 根据key设置cookie
 * @param {String} key
 * @param {String} value
 * @param {String|Number|Date} end 过期时间(可以传毫秒数)
 */
export function setCookie(key, value, end) {
  let endStr;
  switch (end.constructor) {
    case Number:
      endStr =
        end === Infinity
          ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT"
          : "; max-age=" + end;
      break;
    case String:
      sExpires = "; expires=" + vEnd;
      break;
    case Date:
      sExpires = "; expires=" + vEnd.toUTCString();
      break;
  }

  document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(
    value
  )}${endStr}`;
}
