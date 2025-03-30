import React from 'react';
import ReactDOM from "react-dom/client"
import { Provider } from 'react-redux';
import App from './components/app/app.tsx'
import { offers } from './mocks/offers.ts';
import { offersList } from './mocks/offers-list.ts';
import { reviews } from './mocks/reviews.ts';
import {store} from './store'
import '../public/css/map.css'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        rentalOffersCount = { offersList.length }
        reviewsOffersCount = {reviews.length}
        offersList = { offersList }
        offers = { offers }
        reviewsList={reviews}
      />
    </Provider>
    
  </React.StrictMode>
)

