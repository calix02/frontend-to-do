import type { AccountType } from "../account/account.type";

export type AuthStoreType = {
  loading: boolean;
  user: AccountType | null; 
  token?: string; // add this line
  hydrated: boolean;

  setRegister: (data: Partial<AccountType>) => Promise<boolean>;
  setLogin: (data: Partial<AccountType>) => Promise<boolean>;
  logout: (data: Partial<AccountType>) => Promise<boolean>;
};
