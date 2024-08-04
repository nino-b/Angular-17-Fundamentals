## Control Flow

We control the flow with `@if` syntax.

```js
// prettier-ignore
 @if (account.membershipStatus === 'gold') {
  <span class="badge gold">Gold</span>
  }
  @else if (account.membershipStatus === 'platinum') {
  <span class="badge platinum">Platinum</span>
  }
  @else {
  <span class="badge silver">Silver</span>
  }
```

```js
// prettier-ignore
  @switch (account.membershipStatus) {
    @case ('gold') {<span class="badge gold">Gold</span>} @case ('platinum') {<span class="badge platinum">Platinum</span>}
    @default {<span class="badge silver">Silver</span>} }
```

## Types

- `account` - Property name.
- `AccountInfo` - Type.

```js
class AppComponent {
  account: AccountInfo = {
    name: "Melisa Evan",
    membershipStatus: "gold",
    validThru: "12/2022",
    CVV: "123",
  };
}
```

## Loops

- `item.id` helps us to be efficient with rendering.

```js
// prettier-ignore
<article>
  @for(item of collection; track item.id) {
    <p>{{item.price}}</p>
  } @empty {
    <p>Your cart is empty</p>
  }
</article>
```

```js
// prettier-ignore
  @for (car of carList; track car) {}
  export class AppComponent {
    carList = [
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
      }
    ]
  }
```

## Property Binding

Property Binding in Angular enables us to set values for properties of elements in our templates.

- Property Binding - We need to wrap the property in `[]`.  
  Then we can reference that property in a class and set the value.  
  `[]` makes the right hand side to be an expression and not a string.

```js
// prettier-ignore
@Component({
  template: ` 
    <button type="button" [disabled]="isDisabled">Submit</button> 
  `,
})
export class AppComponent {
  isDisabled = false;
}
```

- Event Binding - We need to wrap an event in `()`.  
  Note: The callback function has `()`.

Event handling in Angular enables us to respond events in the templates.

```js
// prettier-ignore
@Component({
  template: `
    <button type="button" (click)="handleClick()">
  `
})
export class AppComponent {
  handleClick() {...}
}
```

- Getting Data from outside the Component.

```js
// prettier-ignore
@Component({
  selector: 'app-cmp',
  template: `<app-user-card  [userData]="user" />`,
  imports: [UserCardComponent].
})
export class AppComponent {
  user: User = { name: 'Ashley', bio: 'Cool developer' };
}
```

```js
// prettier-ignore
@Component({
  selector: 'app-user-card',
  template: `
    <section>
      <p>{{userData.name}}</p><p>{{userData.bio}}</p>
    </section>
  `
})
export class AppComponent {
  @Input() userData: User = {...} // Default user data
}
```

#### Custom Events

We can Send information from a child component to a parent via Custom Events.

- `@Output() addItemEvent = new EventEmitter<string>();` - create new event emitter.
- `  addItem() {this.addItemEvent.emit('Hello');}` - Create event handler.
- `$event` - Bind to the event name.

```js
// prettier-ignore
@Component({
  template: `
    <button class="btn" (click)="addItem($event)">Add Item</button>
  `
})
export class ProductListComponent {
  @Output() addItemEvent = new EventEmitter<string>();
  addItem() {this.addItemEvent.emit('Hello');}
}
```

## Input & Output

- `@Input()` - A way to send data in.
- `@Output()` - A Way to get data out. We can only output through events.

`@Input() car!: Car;` - `car!` means Non Null Assertion Operator. Meaning that, at this point it doesn't have a value, but it will have in the future.

Required Component:

```js
export class ListingComponent {
  @Input({
    required: true // meaning that this is a required Component and must be provided
  }) car!: Car;
}
```
