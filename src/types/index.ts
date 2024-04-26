export type ICompany = {
  bs: string;
  catchPhrase: string;
  name: string;
};

export type IUser = {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: Company;
  address: any;
};
