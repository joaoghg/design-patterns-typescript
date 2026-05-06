import type { Observer } from '../observer-protocol';

export class PhoneDisplay implements Observer {
  constructor(private readonly label: string) {}

  update(temperatureCelsius: number): void {
    console.log(`[${this.label}] ${temperatureCelsius}°C`);
  }
}
