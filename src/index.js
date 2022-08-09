/**
 * Raw Element (https://github.com/blikblum/raw-element)
 *
 * Copyright © 2018 Luiz Américo. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { UpdatingElement } from "lit";
export * from "lit/decorators.js";

export class RawElement extends UpdatingElement {
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM
   * * @param changedProperties Map of changed properties with old values
   */
  update(changedProperties) {
    super.update(changedProperties);
    this.render();
  }
  /**
   * Invoked on each update to perform rendering tasks.
   */
  render() {}
}
