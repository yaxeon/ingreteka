const records: IUser[] = [
  { id: "1", email: "ingreteka@mail.ru", password: "ingreteka" }
];

export interface IUser {
  id: string;
  email: string;
  password: string;
}

export interface IUserModel {
  findById(id: string, cb: any): void;
  findByEmail(email: string, cb: any): void;
}

export const UserModel: IUserModel = {
  findById(id, cb) {
    const user = records.find(record => record.id === id);

    if (user) {
      return cb(null, user);
    }
    return cb(null, null);
  },
  findByEmail(email, cb) {
    const user = records.find(record => record.email === email);

    if (user) {
      return cb(null, user);
    }
    return cb(null, null);
  }
};
