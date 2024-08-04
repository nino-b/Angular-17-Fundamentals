# Routing

Wherever we want the thing we routed to display, we use `<router-outlet />`.

To use router specific programming in our template, we have to import the `RouterModule`.

```js
import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
```

- Example

```js
import { Routes } from "@angular/router";
import { GreetingsComponent } from "./greetings.component";

export const routes: Routes = [
  {
    path: "", // Default path
    component: GreetingsComponent, // Where do we want to go
  },
];
```

## routerLink

`<a routerLink="/details">Details</a>`  
`routerLink` attribute is used to create clickable links. It is a Directive.

- Directive has the same makeup as a component, but most times we don't have templates associated with it.
- It is used to add behavior to an HTML element or a Component.

`:id` is dynamic value.

```js
export const routes: Routes = [
  {
    path: "details/:id",
    component: GreetingsComponent,
  },
];
```

Input as a Setter:

'id' in 'set id' is the same as `:id`.
Get the value from the URL.  
Whatever the Id is set to, pass it in this setter function as a value, and store in the 'productId'.

To use this feature, we need to add to the 'providers' array a `withComponentInputBinding()` as the second argument of provideRouter:

```js
import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding())],
};
```

```js
@Component({...})
export class DetailsComponent {
  productId = -1; // Dest for router info

  /**
   * Set the Id as an input.
   * Assign value (type of number) to the productId.
   *
   *
   * 'id' in 'set id' is the same as `:id`.
   * They must match.
   */
  @Input()
  set id(value:number) {this.productId = value;}
}
```

In Angular, routes can't start with `/`, so we can't define `/details/:id`. The correct form is `details/:id`.

`[routerLink]="['details', $index]"` takes two arguments:

1. Where do we want to go.
2. What parameters do we want to use (`$index` a value that is available in the scope of `@for`. Like indices in array).
