export const AppRoutes = {
  root: '/',
  login: '/login',
  room: '/offer/:id'
} as const;

export type MainProps = {
  offersNumber: number;
}

export const Props: MainProps = {
  offersNumber: 312,
} as const;
