import { AbstractHandler } from '../handler.js';
import { Request } from '../request.js';

export class AuthHandler extends AbstractHandler<Request> {
  handle(request: Request): string | null {
    if (!request.user) {
      return 'AuthHandler: No user provided. Request rejected.';
    }

    if (!request.user.roles.includes('admin')) {
      return `AuthHandler: User ${request.user.id} lacks admin role. Request rejected.`;
    }

    console.log('AuthHandler: User authenticated.');
    return super.handle(request);
  }
}