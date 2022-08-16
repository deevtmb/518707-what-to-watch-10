const AUTH_TOKEN_NAME = 'wtw-token';

export type Token = string;

export const saveToken = (token: Token): void => localStorage.setItem(AUTH_TOKEN_NAME, token);
export const getToken = (): Token => localStorage.getItem(AUTH_TOKEN_NAME) ?? '';
export const dropToken = (): void => localStorage.removeItem(AUTH_TOKEN_NAME);
