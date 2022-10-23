import {urls} from "../constants";

export const createImgUrl = (size,path) => {
    return `${urls.imgBaseUrl}${size}${path}`
};