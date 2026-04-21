export interface DeviceImplementation {
  getName(): string
  setPower(state: boolean): void
  getPower(): boolean
  setVolume(volume: number): void
  getVolume(): number
}
