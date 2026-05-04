import { AbstractHandler } from '../handler.js';
import { Request } from '../request.js';

export class ValidationHandler extends AbstractHandler<Request> {
  handle(request: Request): string | null {
    if (!request.body) {
      return 'ValidationHandler: No body provided. Request rejected.';
    }

    if (typeof request.body !== 'object') {
      return 'ValidationHandler: Body must be an object. Request rejected.';
    }

    console.log('ValidationHandler: Request validated.');
    return super.handle(request);
  }
}