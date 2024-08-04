# Angular

Angular is a web Framework used to build scalable web apps with confidence.

Decorators allow to take a class and add some behavior to it.
Decorator takes properties:

- `selector` - A custom HTML tag name. We have to reference that HTML element.
- `standalone: true` - To separate from modules, that existed before. This means, there is no more need for modules. Modules are in the past.
- `template: '<h1>Hello World!</h1>'` - A HTML Template code. If the code is too big, we can separate it in the `.html` file.
- `styles` - CSS styles. If the code is small, we can write it inline, like HTML. Otherwise, we can create `.css` (or `.scss`) file(note: In this case the property name will be `styleUrl` - `styleUrl: 'app.component.css'`). Styles are scoped, so they don't leak out of the component. We can still use Global Stylesheet (e.g. `styles.css`).

After the Decorator, we should create a Component class. It can be empty.  
The Component can exist without the decorator. But decorators add some extra capabilities.

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  template: "<h1>Hello World!</h1>",
  styles: "h1 { color: red }",
})
class AppComponent {}
```

## Dynamic values - String Interpolation

To add dynamic values in HTML code, we use `{{}}` and class Component's property name. This is called String Interpolations. The valid values are Expressions.

```html
<section>
  <p>Welcome back, {{ userName }}</p>
</section>
```

```js
import { Component } from '@angular/core';

@Component ({...})
export class WelcomeComponent {
  userName = 'codingChamp'; // For Primitive types, TS can automatically set types
}
```

## Component Composition

To bring other Components use imports.  
We need to add `imports` array to the `@Component`.  
And then we can reference that Component.

```js
import { UserInfoComponent } from "./user-info.component";

@Component({
  selector: "app-dashboard",
  template: `
    <section>
      <p>Welcome back</p>
      <app-user-info />
    </section>
  `,
  imports: [UserInfoComponent],
})
export class DashboardComponent {}
```

`ng generate component userinfo --project 03-component-composition` explanation:

- `ng` - Angular CLI command-line tool.
- `generate` - Creates new files or code based on Angular CLI schematics.
- `component` - Specifies that we want to create a new Angular Component.
- `userinfo` - The name of the new Component.
- `--project` - A flag to specify which project within a multi-project workspace the component should be generated for.
- `03-component-composition` - The name of the project in which the new component should be created.

Files that will be created:

- `userinfo.component.ts` - The TypeScript file containing the component class and metadata.
- `userinfo.component.html` - The HTML template for the component.
- `userinfo.component.css or .scss` - The CSS/SCSS file for component-specific styles.
- `userinfo.component.spec.ts` - The testing file for the component.
