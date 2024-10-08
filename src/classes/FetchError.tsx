export default class FetchError extends Error {
  code: number;
  info: any;

  constructor(message: string, code: number, info: any) {
    super(message);
    this.code = code;
    this.info = info;
  }
}
