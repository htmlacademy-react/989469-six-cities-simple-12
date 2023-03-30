export type OfferProps = {
  offer: Offer;
}

export type OfferListProps = {
  offerList: Offer[];
}

export type OfferImages = {
  id: number;
  img: string;
}

export const offerImages: OfferImages[] = [
  {
    'id': 1,
    'img': 'img/room.jpg',
  },
  {
    'id': 2,
    'img': 'img/apartment-01.jpg',
  },
  {
    'id': 3,
    'img': 'img/apartment-02.jpg',
  },
  {
    'id': 4,
    'img': 'img/apartment-03.jpg',
  },
  {
    'id': 5,
    'img': 'img/apartment-01.jpg',
  },
  {
    'id': 6,
    'img': 'img/apartment-01.jpg',
  }
];

export type Offer = {
  id: number;
  isPremium: boolean;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export const offers: Offer[] = [
  {
    'id': 1,
    'isPremium': false,
    'previewImage': 'img/apartment-01.jpg',
    'price': 120,
    'rating': 4.5,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'Apartment'
  },
  {
    'id': 2,
    'isPremium': false,
    'previewImage': 'img/room.jpg',
    'price': 80,
    'rating': 1.9,
    'title': 'Wood and stone place',
    'type': 'Private room'
  },
  {
    'id': 3,
    'isPremium': true,
    'previewImage': 'img/apartment-02.jpg',
    'price': 132,
    'rating': 3.2,
    'title': 'Canal View Prinsengracht',
    'type': 'Apartment'
  },
  {
    'id': 4,
    'isPremium': true,
    'previewImage': 'img/apartment-03.jpg',
    'price': 180,
    'rating': 4.6,
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'Apartment'
  },
];
