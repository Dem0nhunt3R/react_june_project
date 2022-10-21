import css from './MyModal.module.css'
import {urls} from "../../constants";
import {createImgUrl} from "../../utils";

const MyModal = ({img: {path, title}, visible, setVisible}) => {
    const rootClasses = [css.myModal];

    if (visible) {
        rootClasses.push(css.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={css.myModalContent} onClick={(e) => e.stopPropagation()}>
                <img src={createImgUrl(urls.imgSize400, path)} alt={title}/>
            </div>
        </div>
    );
};

export {MyModal};