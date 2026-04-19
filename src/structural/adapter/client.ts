import { EmailValidatorAdapter } from './validation/email-validator-class-adapter'
import { emailValidatorFnAdapter } from './validation/email-validator-function-adapter'
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol
} from './validation/email-validator-protocol'

function validaEmailClass(emailValidator: EmailValidatorProtocol, email: string): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email válido (classe)')
    return
  }

  console.log('Email inválido (classe)')
}

validaEmailClass(new EmailValidatorAdapter(), 'joao@gmail.com')

function validaEmailFn(emailValidator: EmailValidatorFnProtocol, email: string): void {
  if (emailValidator(email)) {
    console.log('Email válido (função)')
    return
  }

  console.log('Email inválido (função)')
}

validaEmailFn(emailValidatorFnAdapter, 'joao@gmail.com')
