import {urls} from "../constants";

const createImgUrl = (size,path) => {
    return `${urls.imgBaseUrl}${size}${path}`
};

export {
    createImgUrl
}