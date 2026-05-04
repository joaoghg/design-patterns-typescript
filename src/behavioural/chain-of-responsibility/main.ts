import { AuthHandler } from './handlers/auth-handler.js';
import { ValidationHandler } from './handlers/validation-handler.js';
import { LoggingHandler } from './handlers/logging-handler.js';
import { Request } from './request.js';

const authHandler = new AuthHandler();
const validationHandler = new ValidationHandler();
const loggingHandler = new LoggingHandler();

validationHandler.setNext(authHandler).setNext(loggingHandler);

const validRequest: Request = {
  body: { data: 'test' },
  headers: { 'content-type': 'application/json' },
  user: { id: 'user-123', roles: ['admin'] },
};

const invalidUserRequest: Request = {
  body: { data: 'test' },
  headers: { 'content-type': 'application/json' },
  user: { id: 'user-456', roles: ['guest'] },
};

const noBodyRequest: Request = {
  body: null,
  headers: { 'content-type': 'application/json' },
  user: { id: 'user-123', roles: ['admin'] },
};

console.log('--- Valid request ---');
const result1 = validationHandler.handle(validRequest);
console.log(`Result: ${result1}\n`);

console.log('--- Invalid user (no admin role) ---');
const result2 = validationHandler.handle(invalidUserRequest);
console.log(`Result: ${result2}\n`);

console.log('--- No body provided ---');
const result3 = validationHandler.handle(noBodyRequest);
console.log(`Result: ${result3}`);