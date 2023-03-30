import {OfferImages} from '../../mocks/offers';

function PropertyImg({id, img}: OfferImages) {

  return (
    <>
      <div className='property__image-wrapper' key={id}>
        <img className='property__image' src={img} alt='Photo studio'/>
      </div>
    </>
  )
}

export default PropertyImg
