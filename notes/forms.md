# Forms

There are two ways to define forms and gather input from users in Angular.

1. Template Driven Forms:

   - The source of truth is the actual template.
   - Quick to setup and use.
   - Best for small one-time forms (e.g. login form).
   - Requires more configuration for testing.

2. Reactive Forms:
   - It is about the data model we define programatically. We bind that data model to the form.
   - Supports typing.
   - Reusable, can share models.
   - More robust testing configuration.

Examples:

1. Template Driven Form:

- `[(ngModel)]="username" ` represents two way data flow: property binding and input binding.
- `username` comes from the Component value (binding with `[]`).
- When it changes, it gets i[dated pack to the value.]

```js
<form name="loginForm">
  <label>
    Username:
    <input type="text" [(ngModel)]="username" />
  </label>

  <label for="password">
    Password:
    <input type="password" />
  </label>
  <button type="submit">Login</button>
</form>
```

```js
@Component({
  imports: [FormModule],
  templateUrl: 'app.component.html'
})
export class AddComponent{
  uerName = '',
  password = '',
}
```

2. Reactive Forms:

- Define the model.
- `formGroup` groups different forms. It is a group of form controls. Its value is a string.
- `[formGroup]="loginForm"` - `loginForm` is a data model that represents this form.
- `formControlName` - We don't bind property directly. The only time we want to bind is if we set the name Dymanically. But we know the name ` name: new FormControl('')`.
- ` (ngSubmit)="handleSubmit()"` we can use this instead of `preventDefault()`.

```js
<form name="loginForm" [formGroup]="loginForm"
 (ngSubmit)="handleSubmit()">
<label>Username:
<input type="text" formControlName="username"/>
</label>
<label for="password">Password:
<input type="password" formControlName="password"/>
 </label>
<button type="submit">Login</button>
</form>

```

```js
@Component({
 imports: [ReactiveFormsModule],
 templateUrl: 'app.component.html',
})
export class AppComponent {
loginForm = new FormGroup({
 name: new FormControl(''),
 email: new FormControl(''),
}
```

## Dependency Injection (DI)

Dependency Injection (DI) is a design pattern and mechanism for creating and delivering some parts of an app to another parts of an app that require them.

To make a code injectable, we need to use a decorator `@Injectable`.

```js
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'; // defines where is it accessible
})

export class CarService(...)
```

To make it available, we use `inject()` function.

```js
import { inject } from '@angular/core';

@Component({...})
export class AppComponent {
  carService = inject(CarService);
}
```

`ngOnInit` lifecycle hook. Safest way to make API calls if we have heavy work to do.
