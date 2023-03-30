import {reviewRating} from '../../mocks/reviews';
import React from 'react';

type Props = {
  rating: reviewRating;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function RatingIcon({rating, onChange}: Props) {
  const {title, id, value} = rating;

  return (
    <>
      <input className='form__rating-input visually-hidden' name='rating' value={value} id={id} type='radio' onChange={onChange}/>
      <label htmlFor={id} className='reviews__rating-label form__rating-label' title={title}>
        <svg className='form__star-image' width='37' height='33'>
          <use xlinkHref='#icon-star'></use>
        </svg>
      </label>
    </>
  )
}

export default RatingIcon;
