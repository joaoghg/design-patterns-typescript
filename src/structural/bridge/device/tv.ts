import { DeviceImplementation } from './device-implementation'

export class Tv implements DeviceImplementation {
  private power = false
  private volume = 10
  private name = 'TV'

  setPower(state: boolean): void {
    this.power = state
  }

  getPower(): boolean {
    return this.power
  }

  setVolume(volume: number): void {
    if (volume < 0 || volume > 100) {
      return
    }

    this.volume = volume
  }

  getVolume(): number {
    return this.volume
  }

  getName(): string {
    return this.name
  }
}
