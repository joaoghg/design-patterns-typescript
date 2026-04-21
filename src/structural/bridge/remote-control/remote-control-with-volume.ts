import { RemoteControl } from './remote-control'

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const currentVolume = this.device.getVolume()
    this.device.setVolume(currentVolume + 1)
    console.log(`Volume increased to ${this.device.getVolume()}`)
  }

  volumeDown(): void {
    const currentVolume = this.device.getVolume()
    this.device.setVolume(currentVolume - 1)
    console.log(`Volume decreased to ${this.device.getVolume()}`)
  }
}
