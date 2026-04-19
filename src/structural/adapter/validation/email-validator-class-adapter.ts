import { EmailValidatorProtocol } from './email-validator-protocol'
import { isEmail } from 'validator'

export class EmailValidatorAdapter implements EmailValidatorProtocol {
  isEmail(email: string): boolean {
    return isEmail(email)
  }
}
