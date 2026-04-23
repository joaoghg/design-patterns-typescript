export class SoundSystem {
  turnOn(): void {
    console.log('Som: ligado')
  }

  setVolume(volume: number): void {
    console.log(`Som: volume em ${volume}`)
  }
}
