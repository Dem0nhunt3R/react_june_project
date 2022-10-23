import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import {ErrorPage, LoginPage, MoviePage, MoviesPage, RegistrationPage} from "../pages";
import {MainLayout} from "../layouts/mainLayout/MainLayout";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movies/page/:pageNumber'} element={<MoviesPage/>}/>
                    <Route path={'movies/:genre'} element={<MoviesPage/>}/>
                    <Route path={'movies/:genre/page/:pageNumber'} element={<MoviesPage/>}/>
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