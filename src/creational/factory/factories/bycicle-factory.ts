import { Bycicle } from '../vehicle/bycicle'
import { Vehicle } from '../vehicle/vehicle'
import { VehicleFactory } from './vehicle-factory'

export class BycicleFactory extends VehicleFactory {
  getVehicle(name: string): Vehicle {
    return new Bycicle(name)
  }
}
