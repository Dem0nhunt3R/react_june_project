import {BadImage} from "../loading";
import css from './MyImage.module.css'
import {createImgUrl} from "../../utils";

const MyImage = ({src, alt}) => {
    const {size, path} = src;
    return (
        <>
            {path ?
                <img src={createImgUrl(size, path)} alt={alt} className={css.img}/>
                : <BadImage/>
            }
        </>
    );
};

export {MyImage};