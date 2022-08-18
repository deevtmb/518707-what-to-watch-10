import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { UserData } from '../../types/user-data';

export const getAuthorizationStatus = (state: State): string => state[NameSpace.User].authorizationStatus;

export const getUserData = (state: State): UserData | null => state[NameSpace.User].user;
