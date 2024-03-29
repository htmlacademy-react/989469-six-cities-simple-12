import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';

import PremiumCard from '../premium-card/premium-card';

import {AppRoutes} from '../../const';
import {OfferProps} from '../../mocks/offers';


function OfferCard({offer, onOfferItemHover}: OfferProps): JSX.Element {
  const {id, isPremium, previewImage, price, rating, title, type} = offer;
  const ratingWidth = `${rating * 100 / 5}%`;


  const handleMouseEnter = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onOfferItemHover(id);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onOfferItemHover(null);
  };

  return (
    <article
      className='cities__card place-card'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      {isPremium ? <PremiumCard/> : null}

      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link key={id} to={AppRoutes.offer.replace(/:id/, `${id}`)}>
          <img className='place-card__image' src={previewImage} width='260' height='200'
            alt='Place image'
          />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{width: ratingWidth}}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href='#'>{title}</a>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
