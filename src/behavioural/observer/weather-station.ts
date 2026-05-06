import type { Observer } from './observer-protocol';

export class WeatherStation {
  private observers: Observer[] = [];
  private temperatureCelsius = 0;

  attach(observer: Observer): void {
    if (this.observers.includes(observer)) return;
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  setTemperature(celsius: number): void {
    this.temperatureCelsius = celsius;
    this.notify();
  }

  private notify(): void {
    for (const observer of this.observers) {
      observer.update(this.temperatureCelsius);
    }
  }
}
