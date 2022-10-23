import {useSelector} from "react-redux";

import {getDate, getStringFromArray} from "../../../utils";
import css from './MovieDetailsInfo.module.css'

const MovieDetailsInfo = ({info}) => {
    const {checked} = useSelector(state => state.themeReducer);
    const {tagline, date, genres, runtime, countries, companies, adult} = info;

    return (
        <div className={['w-100', css.pl].join(' ')}>
            {tagline &&
                <div className={'d-flex w-100'}>
                    <p className={[css.ik, (checked ? css.w : css.b)].join(' ')}>Tagline:</p>
                    <p className={[css.iv, (checked ? css.w : css.b)].join(' ')}>{tagline}</p>
                </div>
            }
            <div className={'d-flex w-100'}>
                <p className={[css.ik, (checked ? css.w : css.b)].join(' ')}>Release date:</p>
                <p className={[css.iv, (checked ? css.w : css.b)].join(' ')}>{getDate(date)}</p>
            </div>
            <div className={'d-flex w-100'}>
                <p className={[css.ik, (checked ? css.w : css.b)].join(' ')}>Genres:</p>
                <p className={[css.iv, (checked ? css.w : css.b)].join(' ')}>{getStringFromArray(genres)}</p>
            </div>
            <div className={'d-flex w-100'}>
                <p className={[css.ik, (checked ? css.w : css.b)].join(' ')}>Runtime:</p>
                <p className={[css.iv, (checked ? css.w : css.b)].join(' ')}>{runtime} minutes.</p>
            </div>
            <div className={'d-flex w-100'}>
                <p className={[css.ik, (checked ? css.w : css.b)].join(' ')}>Countries:</p>
                <p className={[css.iv, (checked ? css.w : css.b)].join(' ')}>{getStringFromArray(countries)}</p>
            </div>
            <div className={'d-flex w-100'}>
                <p className={[css.ik, (checked ? css.w : css.b)].join(' ')}>Companies:</p>
                <p className={[css.iv, (checked ? css.w : css.b)].join(' ')}>{getStringFromArray(companies)}</p>
            </div>
            {adult && <div className={'d-flex w-100'}>
                <p className={[css.ik, (checked ? css.w : css.b)].join(' ')}></p>
                <p className={[css.iv, (checked ? css.w : css.b)].join(' ')}>18+</p>
            </div>}
        </div>
    );
};

export {MovieDetailsInfo};