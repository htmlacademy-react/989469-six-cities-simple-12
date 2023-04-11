import ReviewItem from '../review-item/review-item';
import {reviewList} from '../../mocks/offers';


function ReviewList(): JSX.Element {
  return (
    <ul className='reviews__list'>
      {reviewList.map((item) => <ReviewItem key={item.id} reviewData={item}/>)}
    </ul>
  );
}

export default ReviewList;
