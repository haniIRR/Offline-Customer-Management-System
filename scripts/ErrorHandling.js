export class validationError extends Error {
  constructor(message, originalError = null) {
    super(message);
    this.name = "ValidationError";
    this.originalError = originalError;
  }
}
