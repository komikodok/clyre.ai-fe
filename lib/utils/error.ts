export class ResponseError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

export class StreamError extends Error {
  name: string;
  errorId: string;

  constructor(message: string, name: string, errorId: string) {
    super(message);
    this.name = name;
    this.errorId = errorId;
  }
}
