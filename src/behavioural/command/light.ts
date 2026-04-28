export class Light {
  private isOn = false

  constructor(private readonly room: string) {}

  turnOn(): void {
    if (this.isOn) {
      console.log(`[${this.room}] A luz ja esta ligada`)
      return
    }

    this.isOn = true
    console.log(`[${this.room}] Luz ligada`)
  }

  turnOff(): void {
    if (!this.isOn) {
      console.log(`[${this.room}] A luz ja esta desligada`)
      return
    }

    this.isOn = false
    console.log(`[${this.room}] Luz desligada`)
  }
}
