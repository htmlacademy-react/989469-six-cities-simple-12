import {reviewRatings} from '../../mocks/reviews';
import RatingIcon from '../rating-icon/rating-icon';
import React, {useState} from 'react';

type FormData = {
  review: string;
  rating: number;
}

function ReviewForm() {
  const [formData, setFormData] = useState<FormData>({
    review: '',
    rating: 0
  })

  const handleFormChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (evt) => {
    const {name, value} = evt.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))

    // ??? state doesn't match
    // console.log(formData)
  }

  return (
    <form className='reviews__form form' action='project/src/components#' method='post'>
      <label className='reviews__label form__label' htmlFor='review'>Your review</label>
      <div className='reviews__rating-form form__rating'>
        {reviewRatings.map((item) => <RatingIcon key={item.id} rating={item} onChange={handleFormChange}/>)}
      </div>
      <textarea onChange={handleFormChange} value={formData.review} className='reviews__textarea form__textarea' id='review' name='review' placeholder='Tell how was your stay, what you like and what can be improved'></textarea>
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set <span className='reviews__star'>rating</span> and
          describe your stay with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button className='reviews__submit form__submit button' type='submit' disabled>Submit</button>
      </div>
    </form>
  )
}

export default ReviewForm;
