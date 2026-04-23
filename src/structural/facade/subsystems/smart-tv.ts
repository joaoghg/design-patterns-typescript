export class SmartTv {
  turnOn(): void {
    console.log('Smart TV: ligada')
  }

  setInput(input: string): void {
    console.log(`Smart TV: entrada ajustada para ${input}`)
  }
}
