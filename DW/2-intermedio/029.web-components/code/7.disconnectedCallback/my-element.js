class MyCustomElement extends HTMLElement {
  constructor() {
    super();

    console.log("Hi...");
  }

  connectedCallback() {
    console.log("Connected");
  }

  disconnectedCallback() {
    console.log("Bye...");
  }
}

customElements.define("my-custom-element", MyCustomElement);

document.querySelector("my-custom-element").remove();
