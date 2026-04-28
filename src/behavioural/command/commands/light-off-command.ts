import { Command } from '../command'
import { Light } from '../light'

export class LightOffCommand implements Command {
  constructor(private readonly light: Light) {}

  execute(): void {
    this.light.turnOff()
  }

  undo(): void {
    this.light.turnOn()
  }
}
