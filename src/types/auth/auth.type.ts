import type { AccountType } from "../account/account.type";

export type AuthStoreType = {
  loading: boolean;
  user: AccountType | null; 
  setRegister: (data: Partial<AccountType>) => Promise<boolean>;
  setLogin: (data: Partial<AccountType>) => Promise<boolean>;
  logout: () => Promise<boolean>;
};
