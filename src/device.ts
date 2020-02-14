/*
 * @Author: he2008
 * @Date: 2019-12-05 17:12:21
 * @LastEditTime: 2019-12-05 17:54:26
 * @LastEditors: he2008
 * @Description: 设备相关
 * @FilePath: /utils/src/device.js
 */
const userAgent = window.navigator.userAgent.toLowerCase();
/*
 * 判断是否为360浏览器
 */

function validate360(option:"type", value:string) {
  let mimeTypes = window.navigator.mimeTypes;
  for (let mt in mimeTypes) {
    console.log(mimeTypes[mt][option]);
    if (mimeTypes[mt][option] == value) {
      return true;
    }
  }
  return false;
}
export default {
  /**
   * 获取浏览器相关信息
   * @return {String}
   */
  getExplore() {
    let browserType = "";
    let browserVersion = "";
    let isIE =
      userAgent.match(/msie/) != null || userAgent.match(/trident/) != null;
    // 浏览器类型-IE
    if (userAgent.match(/msie/) != null || userAgent.match(/trident/) != null) {
      browserType = "IE";
      browserVersion = this.getIeVersion();
    }
    // 欧朋
    else if (window.opera || userAgent.indexOf("opr") > 0) {
      browserType = "欧朋";
      browserVersion = this.getOperaVersion(userAgent);
    }
    // UC
    else if (userAgent.indexOf("ubrowser") > 0) {
      browserType = "UC";
      browserVersion = userAgent.match(/ubrowser\/([\d.]+)/)[1];
    }
    // 百度
    else if (userAgent.indexOf("bidubrowser") > 0) {
      browserType = "百度";
      browserVersion = userAgent.match(/bidubrowser\/([\d.]+)/)[1];
    }
    // 搜狗
    else if (
      userAgent.indexOf("metasr") > 0 ||
      userAgent.indexOf("se 2.x") > 0
    ) {
      browserType = "搜狗";
    }
    // QQ
    else if (userAgent.indexOf("tencenttraveler") > 0) {
      browserType = "QQ";
      browserVersion = userAgent.match(/tencenttraveler\/([\d.]+)/)[1];
    }
    // QQ
    else if (userAgent.indexOf("qqbrowser") > 0) {
      browserType = "QQ";
      browserVersion = userAgent.match(/qqbrowser\/([\d.]+)/)[1];
    }
    // 遨游
    else if (userAgent.indexOf("maxthon") > 0) {
      browserType = "遨游";
      browserVersion = userAgent.match(/maxthon\/([\d.]+)/)[1];
    }
    // 火狐
    else if (userAgent.indexOf("firefox") > 0) {
      browserType = "火狐";
      browserVersion = userAgent.match(/firefox\/([\d.]+)/)[1];
    }
    // edge
    else if (userAgent.indexOf("edge") > 0) {
      browserType = "Edge";
      browserVersion = userAgent.match(/edge\/([\d.]+)/)[1];
    }
    // 谷歌/360
    else if (userAgent.indexOf("chrome") > 0) {
      if (validate360("type", "application/x360mmplugin")) {
        browserType = "360";
        // browserVersion =  userAgent.match(/chrome\/([\d.]+)/)[1]
      } else {
        browserType = "谷歌";
        browserVersion = userAgent.match(/chrome\/([\d.]+)/)[1];
      }
    }
    // 苹果
    else if (userAgent.indexOf("Safari") > -1) {
      browserType = "Safari";
      browserVersion = userAgent.match(/version\/([\d.]+)/)[1];
    }
    return browserType + " " + browserVersion;
  },
  /**
   * 获取系统信息
   * @return {String}
   */
  getOS() {
    var userAgent =
      ("navigator" in window &&
        "userAgent" in navigator &&
        navigator.userAgent.toLowerCase()) ||
      "";
    var vendor =
      ("navigator" in window &&
        "vendor" in navigator &&
        navigator.vendor.toLowerCase()) ||
      "";
    var appVersion =
      ("navigator" in window &&
        "appVersion" in navigator &&
        navigator.appVersion.toLowerCase()) ||
      "";

    if (
      /iphone/i.test(userAgent) ||
      /ipad/i.test(userAgent) ||
      /ipod/i.test(userAgent)
    )
      return "ios";
    if (/android/i.test(userAgent)) return "android";
    if (/win/i.test(appVersion) && /phone/i.test(userAgent))
      return "windowsPhone";
    if (/mac/i.test(appVersion)) return "MacOSX";
    if (/win/i.test(appVersion)) return "windows";
    if (/linux/i.test(appVersion)) return "linux";
  },
  /*
   * 获取oper浏览器版本
   */
  getOperaVersion(userAgent:string) {
    try {
      if (window.opera) {
        return userAgent.match(/opera.([\d.]+)/)[1];
      } else if (userAgent.indexOf("opr") > 0) {
        return userAgent.match(/opr\/([\d.]+)/)[1];
      }
    } catch (e) {
      return 0;
    }
  },
  /*
   * 获取IE浏览器版本
   */
  getIeVersion() {
    let IEMode = document.documentMode;
    let rMsie = /(msie\s|trident.*rv:)([\w.]+)/;
    let ma = window.navigator.userAgent.toLowerCase();
    let match = rMsie.exec(ma);
    try {
      return match[2];
    } catch (e) {
      return IEMode;
    }
  }
};
