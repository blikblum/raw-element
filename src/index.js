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
   * Performs element initialization. By default this calls `createRenderRoot`
   * to create the element `renderRoot` node and captures any pre-set values for
   * registered properties.
   */
  initialize() {
    super.initialize();
    this.renderRoot = this.createRenderRoot();
  }

  /**
   * Returns the node into which the element should render and by default
   * creates and returns an open shadowRoot. Implement to customize where the
   * element's DOM is rendered. For example, to render into the element's
   * childNodes, return `this`.
   * @returns {Element|DocumentFragment} Returns a node into which to render.
   */
  createRenderRoot() {
    return this.attachShadow({ mode: "open" });
  }
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM
   * * @param _changedProperties Map of changed properties with old values
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
