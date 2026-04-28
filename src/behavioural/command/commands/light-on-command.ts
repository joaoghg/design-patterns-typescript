import { Command } from '../command'
import { Light } from '../light'

export class LightOnCommand implements Command {
  constructor(private readonly light: Light) {}

  execute(): void {
    this.light.turnOn()
  }

  undo(): void {
    this.light.turnOff()
  }
}
