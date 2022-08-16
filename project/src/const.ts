export const APIRoute = {
  Films: '/films',
  Similar: '/similar',
  Promo: '/promo',
  Favorite: '/favorite',
  Comments: '/comments',
  Login: '/login',
  Logout: '/logout',
};

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
