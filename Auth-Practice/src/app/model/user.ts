export class User {
  constructor(
    public email: string,
    public id: string,
    public _token: string
  ) {}

  get token() {
    return this._token;
  }
}
