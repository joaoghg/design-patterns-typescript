import { AbstractHandler } from '../handler.js';
import { Request } from '../request.js';

export class LoggingHandler extends AbstractHandler<Request> {
  handle(request: Request): string | null {
    console.log(`LoggingHandler: Processing request for user ${request.user?.id ?? 'anonymous'}`);
    return super.handle(request);
  }
}