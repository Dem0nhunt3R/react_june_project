import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";
import {ErrorPage, HomePage, LoginPage, MoviePage, MoviesPage, RegistrationPage} from "../pages";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movies/page/:pageNumber'} element={<MoviesPage/>}/>
                    <Route path={'movie/:details'} element={<MoviePage/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'registration'} element={<RegistrationPage/>}/>
                    <Route path={'*'} element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export {AppRouter};