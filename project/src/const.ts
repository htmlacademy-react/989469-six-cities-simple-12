export const AppRoutes = {
  root: '/',
  login: '/login',
  offer: '/offer/:id',
  notFound: '*',
} as const;

export const MapPins = {
  defaultPin: './img/pin.svg',
  activePin: './img/pin-active.svg',
} as const;
