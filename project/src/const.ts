export const APIRoute = {
  Films: '/films',
  Similar: '/similar',
  Promo: '/promo',
  Favorite: '/favorite',
  Comments: '/comments',
  Login: '/login',
  Logout: '/logout',
};

export const AppRoute = {
  Main: '/',
  Login: '/login',
  MyList: '/mylist',
  Films: '/films/',
  FilmInfo: '/films/:id',
  Review: '/review',
  AddReview: '/films/:id/review',
  Player: '/player/',
  FilmPlayer: '/player/:id',
  NotFound: '*',
} as const;

export const AuthorizationStatus = {
  Authorized: 'AUTHORIZED',
  NotAuthorized: 'NOT_AUTHORIZED',
  Unknown: 'UNKNOWN',
} as const;

export const NameSpace = {
  Films: 'FILMS_DATA',
  Comments: 'COMMENTS_DATA',
  User: 'USER',
} as const;

export const FilmInfoTab: {[key: string]: string} = {
  Overview: 'Overview',
  Details: 'Details',
  Reviews: 'Reviews',
} as const;
