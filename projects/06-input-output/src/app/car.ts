/**
 * Defines the shape of an object.
 * It specifies what properties an object of type 'Car' must have.
 * It specifies the type of each property.
 */
export interface Car {
  make: string;
  model: string;
  miles: number;
  price: number;
  year: number;
  transmission: 'Automatic' | 'Manual';
}
