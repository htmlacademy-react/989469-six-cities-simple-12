import {ReviewProps} from '../types/types';

export type OfferProps = {
  offer: Offer;
  onOfferItemHover: (offerItemId: number | null) => void;
}

export type OfferListProps = {
  offerList: Offer[];
  onOfferItemHover: (offerItemId: number | null) => void;
  className: string;
}

export type MapPinsProps = {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | undefined;
  className: string;
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
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
}

export const offers: Offer[] = [
  {
    'id': 1,
    'isPremium': false,
    'previewImage': 'img/apartment-01.jpg',
    'price': 120,
    'rating': 4.5,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'Apartment',
    'city': {
      'location': {
        'latitude': 52.3909553943508,
        'longitude': 4.85309666406198,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
  },
  {
    'id': 2,
    'isPremium': false,
    'previewImage': 'img/room.jpg',
    'price': 80,
    'rating': 1.9,
    'title': 'Wood and stone place',
    'type': 'Private room',
    'city': {
      'location': {
        'latitude': 52.3609553943508,
        'longitude': 4.85309666406198,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
  },
  {
    'id': 3,
    'isPremium': true,
    'previewImage': 'img/apartment-02.jpg',
    'price': 132,
    'rating': 3.2,
    'title': 'Canal View Prinsengracht',
    'type': 'Apartment',
    'city': {
      'location': {
        'latitude': 52.3909553943508,
        'longitude': 4.929309666406198,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
  },
  {
    'id': 4,
    'isPremium': true,
    'previewImage': 'img/apartment-03.jpg',
    'price': 180,
    'rating': 4.6,
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'Apartment',
    'city': {
      'location': {
        'latitude': 52.3809553943508,
        'longitude': 4.939309666406198,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
  },
];

export type City = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export const city: City = {
  'latitude': 52.370216,
  'longitude': 4.895168,
  'zoom': 10
};

export const reviewList: ReviewProps[] = [
  {
    id: 1,
    image: 'img/avatar-max.jpg',
    userName: 'Max',
    rating: '80%',
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    dateTime: '2019-04-24',
    date: 'April 2019',
  },
];
