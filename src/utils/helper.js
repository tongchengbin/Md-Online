export const dateFormat = (date, fmt) => {
    var o = {
        "M+": date.getMonth() + 1, // 月份
        "d+": date.getDate(), // 日
        "h+": date.getHours(), // 小时
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return fmt;
};

export const getOSSName = (originName, namespace = "") => {
    const names = originName.split(".");
    let key = "";
    if (names.length > 1) {
        const suffix = names.pop();
        key = `${names.join(".")}_${dateFormat(new Date(), "yyyyMMddhhmmss")}.${suffix}`;
    } else {
        key = originName + "_" + dateFormat(new Date(), "yyyyMMddhhmmss");
    }
    return `${namespace}${key}`;
};


export const download = (content, filename) => {
    const eleLink = document.createElement("a");
    eleLink.download = filename;
    eleLink.style.display = "none";
    // 字符内容转变成blob地址
    const blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
};



// base64转blob
export const dataURLtoBlob = (dataUrl) => {

    let arr = dataUrl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
};

// base64转blob
export const toBlob = (base64, fileType) => {
    const bytes = window.atob(base64);
    let n = bytes.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bytes.charCodeAt(n);
    }
    return new Blob([u8arr], {type: fileType});
};

export const base64ToBlob = (dataurl) =>{
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}
