import OSS from "ali-oss";
import {IMAGE_HOSTING_NAMES, IMAGE_HOSTING_TYPE} from "@/utils/constant";
import {getOSSName} from "@/utils/helper";
import {getCookie} from "@/utils/cookie";
<<<<<<< HEAD

import { Message } from 'element-ui';
=======
import {Message} from "element-ui";


>>>>>>> b86a53c149edc4b1cacbea1387916112fddb8487
// 阿里云对象存储上传，处理部分
export const aliOSSUpload = ({
                                 file = {},
                                 onSuccess = () => {
                                 },
                                 onError = () => {
                                 },
                             }) => {
    const config_string = getCookie('bedConfig')
<<<<<<< HEAD
    if(config_string===undefined){
        Message.warning({message:"请配置图床"})
        return
    }
    let bedConfig = JSON.parse(config_string)
    const config = bedConfig.config
    const blob = toBlob(file.miniurl.split(',')[1],file.type);
    aliOSSPutObject({config, file, blob, onSuccess, onError});
=======
    if(config_string){
        let bedConfig = JSON.parse(config_string)
        const config = bedConfig.config
        const blob = toBlob(file.miniurl.split(',')[1],file.type);
        aliOSSPutObject({config, file, blob, onSuccess, onError});
    }else{
        Message.warning({message:"未配置图床"})
    }


>>>>>>> b86a53c149edc4b1cacbea1387916112fddb8487
};

// 阿里对象存储，上传部分
const aliOSSPutObject = ({config, file, blob, onSuccess, onError}) => {
    console.log(config)
    let client;
    try { client = new OSS(config);
    } catch (error) {
        return;
    }
    const OSSName = getOSSName(file.name);
    client.put(OSSName, blob).then((response) => {
            onSuccess(response, file);
        }).catch((error) => {
            onError(error, error.toString());
        });
};


// 自动检测上传配置，进行上传
export const uploadAdaptor = (...args) => {
    // const type = ; // SM.MS | 阿里云 | 七牛云 | Gitee | GitHub | 用户自定义图床
    if (IMAGE_HOSTING_TYPE === IMAGE_HOSTING_NAMES.aliyun){
        return aliOSSUpload(...args);
    }


    return true;
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
