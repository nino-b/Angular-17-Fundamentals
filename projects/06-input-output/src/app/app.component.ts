import { Component } from '@angular/core';
import { Car } from './car';
import { ListingComponent } from './listing/listing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListingComponent],
  template: `
    <h1>Saved Cars {{ savedCarList.length }}</h1>
    <section class="container">
      @for(carEntry of carList; track carEntry) {
      <!-- Binds 'carSaved' evemt emitted by 'ListingComponent' to the 'addCarToSaved' method in the parent Component.  -->
      <app-listing [car]="carEntry" (carSaved)="addCarToSaved($event)" />
      }
    </section>
    <article>
      @for(savedCarEntry of savedCarList; track savedCarEntry) {
      <p>{{ savedCarEntry.make }}{{ savedCarEntry.model }}</p>
      }
    </article>
  `,
  styles: [],
})
export class AppComponent {
  /**
   * Initializes an empty array to hold saved cars.
   */
  savedCarList: Car[] = [];
  /**
   * Initializes an array with a list of car objects.
   */
  carList: Car[] = [
    {
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];
  /**
   * Adds a car to the 'savedCarList' array when called.
   */
  addCarToSaved(car: Car) {
    this.savedCarList.push(car);
  }
}
