import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    { id: uuid(), brand: 'Honda', model: 'Civic' },
    { id: uuid(), brand: 'Jeep', model: 'Cheroke' },
  ];

  findAll() {
    return this.cars;
  }

  getById(id: string) {
    const car = this.cars.find((c) => c.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id '${id}' not found `);
    }

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
      //   brand: createCarDto.brand,
      //   model: createCarDto.model,
    };

    this.cars.push(car);

    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.getById(id);

    this.cars = this.cars.map((c) => {
      if (c.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
    });

    return carDB;
  }

  delete(id: string) {
    const carDB = this.getById(id);

    this.cars = this.cars.filter((c) => carDB.id !== id);
  }
}
