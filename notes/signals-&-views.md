## Deferrable Views

Lazy Loading helps keep initial bundle sizes smaller.

With Deferrables we can tell which parts of the application not to ship until something meaningful happens. And all these happens in the template.

```js
<button #trigger>Load Recommend Movies</button>
@defer (on interaction(trigger)) {
 <recommended-movies />
} @loading {
 <p>Loading </p>
} @error {
 <p>Oops, sorry </p>
} @placeholder {
 <img src="placeholder-image.png" />
}
```
