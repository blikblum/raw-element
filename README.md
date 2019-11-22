# Raw Element

> Raw Element is a base web component without a builtin render


### Features

&nbsp; &nbsp; ✓ Based on UpdatingElement ([LitElement](https://lit-element.polymer-project.org) base class)<br>


### Installation

```
yarn add raw-element
```

### Usage

```js
import { RawElement } from 'raw-element'

export class MyComponent extends RawElement {
  static get properties() {
    return {
      title: { type: String },      
    }
  }

  render() {    
    this.innerHTML = `<div>${this.title}</div>`
  }
}

customElements.define('my-component', MyComponent)
```

### Examples

 - https://github.com/blikblum/wc-fontawesome
 - https://github.com/blikblum/pdfmake-utils/blob/master/src/pdf-viewer.js


### License

Copyright © 2019 Luiz Américo. This source code is licensed under the MIT license found in
the [LICENSE.txt](https://github.com/blikblum/raw-element/blob/master/LICENSE.txt) file.
The documentation to the project is licensed under the [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
license.

---
Made with ♥ by Luiz Américo
