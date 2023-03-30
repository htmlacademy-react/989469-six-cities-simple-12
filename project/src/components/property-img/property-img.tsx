import {OfferImages} from '../../mocks/offers';

type ImagesProps = {
  images: OfferImages;
}

function PropertyImg({images}: ImagesProps) {
  const {id, img} = images;

  return (
    <div className='property__image-wrapper' key={id}>
      <img className='property__image' src={img} alt='Photo studio'/>
    </div>
  );
}

export default PropertyImg;
