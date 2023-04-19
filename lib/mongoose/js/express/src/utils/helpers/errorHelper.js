class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.code = statusCode;
    this.message = message;
  }
}

export default ErrorHandler;
