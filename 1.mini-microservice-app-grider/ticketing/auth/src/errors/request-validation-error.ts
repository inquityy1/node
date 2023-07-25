import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {
    statusCode = 400;
    
    constructor(public errors: any[]) {
        super();

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        return this.errors.map(err => {
            return { message: err.msg, field: err.path/** path should be param */ }
        })
    }
}
