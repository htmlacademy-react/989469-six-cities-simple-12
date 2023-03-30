import OfferCard from '../offer-card/offer-card';

import {OfferListProps} from '../../mocks/offers';


function OfferList({offerList}: OfferListProps) {
  return (
    <>
      {offerList.map((item) => <OfferCard offer={item} key={item.id}/>)}
    </>
  )
}

export default OfferList
