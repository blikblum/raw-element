# Raw Element

> Raw Element is a base custom element class with reactive properties and a no-op render method

### Features

&nbsp; &nbsp; ✓ Based on UpdatingElement ([Lit](lit.dev) base class)<br>
&nbsp; &nbsp; ✓ No rendering engine. Override render method to update element<br>

### Installation

```
yarn add raw-element
```

### Usage

```js
import { RawElement } from "raw-element";

export class MyComponent extends RawElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  render() {
    this.renderRoot.innerHTML = `<div>${this.title}</div>`;
  }
}

customElements.define("my-component", MyComponent);
```

```html
<button type="button" onclick="toggleTitle()">Toggle title</button>
<my-component title="Hello!"></my-component>
<script>
  function toggleTitle() {
    document.querySelector("my-component").title = "New title";
  }
</script>
```

### Examples

- https://github.com/blikblum/wc-fontawesome
- https://github.com/blikblum/pdfmake-utils/blob/master/src/pdf-viewer.js

### License

Copyright © 2022 Luiz Américo. This source code is licensed under the MIT license found in
the [LICENSE.txt](https://github.com/blikblum/raw-element/blob/master/LICENSE.txt) file.
The documentation to the project is licensed under the [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
license.

---

Made with ♥ by Luiz Américo
