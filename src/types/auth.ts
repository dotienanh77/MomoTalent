export interface IUser {
  name: string;
}
export interface AuthState {
  isFirstTime: boolean;
  user?: IUser;
  loading: boolean;
}
