import { isEmail } from 'validator'
import { EmailValidatorFnProtocol } from './email-validator-protocol'

export const emailValidatorFnAdapter: EmailValidatorFnProtocol = (email: string) => {
  return isEmail(email)
}
