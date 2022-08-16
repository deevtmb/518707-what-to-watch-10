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
  Player: '/player/',
  FilmPlayer: '/player/:id'
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

export const genres = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers'
] as const;
