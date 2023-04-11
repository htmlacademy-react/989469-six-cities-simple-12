import {useState} from 'react';

import Header from '../../components/header/header';
import ReviewForm from '../../components/review-form/review-form';
import PropertyImg from '../../components/property-img/property-img';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import OfferList from '../../components/offer-list/offer-list';

import {city, Offer, offerImages, offers} from '../../mocks/offers';


function Property(): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  const offerList = offers.slice(0, 3);

  const onOfferItemHover = (offerItemId: number | null) => {
    const currentOffer = offerList.find((item) => item.id === offerItemId);

    setSelectedOffer(currentOffer);
  };

  return (
    <div className='page'>
      <div style={{display: 'none'}}>
        <svg xmlns='http://www.w3.org/2000/svg'>
          <symbol id='icon-arrow-select' viewBox='0 0 7 4'>
            <path fillRule='evenodd' clipRule='evenodd' d='M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z'></path>
          </symbol>
          <symbol id='icon-bookmark' viewBox='0 0 17 18'>
            <path d='M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z'></path>
          </symbol>
          <symbol id='icon-star' viewBox='0 0 13 12'>
            <path fillRule='evenodd' clipRule='evenodd' d='M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z'></path>
          </symbol>
        </svg>
      </div>

      <Header/>

      <main className='page__main page__main--property'>
        <section className='property'>
          <div className='property__gallery-container container'>
            <div className='property__gallery'>
              {offerImages.map((item) => <PropertyImg key={item.id} images={item}/>)}
            </div>
          </div>
          <div className='property__container container'>
            <div className='property__wrapper'>
              <div className='property__mark'>
                <span>Premium</span>
              </div>
              <div className='property__name-wrapper'>
                <h1 className='property__name'>
                  Beautiful &amp; luxurious studio at great location
                </h1>
              </div>
              <div className='property__rating rating'>
                <div className='property__stars rating__stars'>
                  <span style={{width: '80%'}}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='property__rating-value rating__value'>4.8</span>
              </div>
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  Apartment
                </li>
                <li className='property__feature property__feature--bedrooms'>
                  3 Bedrooms
                </li>
                <li className='property__feature property__feature--adults'>
                  Max 4 adults
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>&euro;120</b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              <div className='property__inside'>
                <h2 className='property__inside-title'>What&apos;s inside</h2>
                <ul className='property__inside-list'>
                  <li className='property__inside-item'>
                    Wi-Fi
                  </li>
                  <li className='property__inside-item'>
                    Washing machine
                  </li>
                  <li className='property__inside-item'>
                    Towels
                  </li>
                  <li className='property__inside-item'>
                    Heating
                  </li>
                  <li className='property__inside-item'>
                    Coffee machine
                  </li>
                  <li className='property__inside-item'>
                    Baby seat
                  </li>
                  <li className='property__inside-item'>
                    Kitchen
                  </li>
                  <li className='property__inside-item'>
                    Dishwasher
                  </li>
                  <li className='property__inside-item'>
                    Cabel TV
                  </li>
                  <li className='property__inside-item'>
                    Fridge
                  </li>
                </ul>
              </div>
              <div className='property__host'>
                <h2 className='property__host-title'>Meet the host</h2>
                <div className='property__host-user user'>
                  <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                    <img className='property__avatar user__avatar' src='img/avatar-angelina.jpg' width='74' height='74' alt='Host avatar'/>
                  </div>
                  <span className='property__user-name'>
                    Angelina
                  </span>
                  <span className='property__user-status'>
                    Pro
                  </span>
                </div>
                <div className='property__description'>
                  <p className='property__text'>
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The
                    building is green and from 18th century.
                  </p>
                  <p className='property__text'>
                    An independent House, strategically located between Rembrand Square and National Opera, but where
                    the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className='property__reviews reviews'>
                <h2 className='reviews__title'>Reviews &middot; <span className='reviews__amount'>1</span></h2>
                <ReviewList/>
                <ReviewForm/>
              </section>
            </div>
          </div>
          <Map city={city} offers={offerList} selectedOffer={selectedOffer} className='property__map map'/>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <OfferList offerList={offerList} onOfferItemHover={onOfferItemHover} className='near-places__list places__list'/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Property;
