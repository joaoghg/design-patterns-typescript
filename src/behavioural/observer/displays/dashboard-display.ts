import type { Observer } from '../observer-protocol';

export class DashboardDisplay implements Observer {
  constructor(private readonly label: string) {}

  update(temperatureCelsius: number): void {
    console.log(`[${this.label}] temperatura atual = ${temperatureCelsius}°C`);
  }
}
