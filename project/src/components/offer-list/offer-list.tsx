import OfferCard from '../offer-card/offer-card';

import {OfferListProps} from '../../mocks/offers';


function OfferList({offerList, onOfferItemHover, className}: OfferListProps): JSX.Element {
  return (
    <div className={className}>
      {offerList.map((item) => <OfferCard offer={item} key={item.id} onOfferItemHover={onOfferItemHover}/>)}
    </div>
  );
}

export default OfferList;
