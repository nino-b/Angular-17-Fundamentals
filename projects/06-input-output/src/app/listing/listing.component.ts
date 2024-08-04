/**
 * '@input'- Decorator used to bind a property of the Component to a property of the parent Component.
 * '@Output' - Decorator used to emit events from the component.
 */

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="listing">
      <div class="image-parent">
        <img class="product-image" src="https://placehold.co/100x100" />
      </div>
      <section class="details">
        <p class="title">{{ car.model }} {{ car.make }}</p>
        <hr />
        <p class="detail">
          <span>Year</span>
          <span>{{ car.year }}</span>
        </p>
        <div class="detail">
          <span>Transmission</span>
          <span>{{ car.transmission }}</span>
        </div>
        <p class="detail">
          <span>Mileage</span>
          <span>{{ car.miles }}</span>
        </p>
        <p class="detail">
          <span>Price</span>
          <span>{{ car.price }}</span>
        </p>
      </section>
    </article>
    <!-- Click on this button triggers the 'handleCarSaved' method, emitting the 'carSaved' event. -->
    <button (click)="handleCarSaved()">Save Car</button>
  `,
  styles: ``,
})
export class ListingComponent {
  @Input({
    required: true, // meaning that this is a required Component and must be provided
  })
  car!: Car;
  /**
   * Create an Event Emitter.
   * Specify the property type.
   */
  @Output() carSaved = new EventEmitter<Car>();
  /**
   * 'handleCarSaved' - A method that emits the 'carSaved' event with the current 'car' object when called.
   */
  handleCarSaved() {
    this.carSaved.emit(this.car);
  }
}
