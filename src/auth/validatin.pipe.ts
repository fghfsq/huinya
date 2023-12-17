import { ValidationError, ValidatorOptions } from "class-validator"


export interface ValidationPipe extends ValidatorOptions {
    transform?: boolean;
    disableErrorMessages?: boolean;
    exceptionFactory?: (errors: ValidationError[]) => any
  }