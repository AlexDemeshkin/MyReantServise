import { JSX } from "react";
import MainPage from "../../pages/main-page/main-page";
import LoginPage from "../../pages/login-page/login-page";
import FavoritesPage from "../../pages/favorites-page/favorites-page";
import ErrorPage from "../../pages/error-page/error-page";
import OfferPage from "../../pages/offer-page/offer-page";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute} from "../../const";
import { PrivateRoute } from "../private-route/private-route";
import { AutorizationStatus } from "../../const";
import { FullOffer, OffersList } from "../../types/offer";
import { Review } from "../../types/review";

type AppMainPageProps={
    rentalOffersCount: number;
    offersList : OffersList[]
    offers: FullOffer[];
    reviewsList : Review[];
    reviewsOffersCount: number
}



function App({ offers,offersList,reviewsList,reviewsOffersCount}: AppMainPageProps): JSX.Element{
  return(
    <BrowserRouter>
      <Routes>  
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage/>} />
        <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage  offers={offers} reviewsList={reviewsList} offersList={ offersList } reviewsOffersCount={reviewsOffersCount}/>} />
        <Route path={AppRoute.Favorites} 
          element={
            <PrivateRoute
              autorizationStatus={AutorizationStatus.Auth}>
                <FavoritesPage offersList={ offersList }/>
            </PrivateRoute>
            } 
          />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;