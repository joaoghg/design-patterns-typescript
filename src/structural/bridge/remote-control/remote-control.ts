import { DeviceImplementation } from '../device/device-implementation'

export class RemoteControl {
  constructor(protected device: DeviceImplementation) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower())
    console.log(`Power ${this.device.getPower() ? 'ON' : 'OFF'}`)
  }
}
