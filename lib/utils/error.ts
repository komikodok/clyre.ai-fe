export class ResponseError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

export class StreamError extends Error {
  name: string;

  constructor(message: string, name: string) {
    super(message);
    this.name = name;
  }
}
