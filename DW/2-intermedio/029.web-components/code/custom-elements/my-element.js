/* class MyElement extends HTMLElement {
  constructor() {
    super();

    this.p = document.createElement("p");
  }

  connectedCallback() {
    this.p.textContent = "Hi world";
    this.appendChild(this.p);
  }
}

customElements.define("my-element", MyElement); */

const template = document.createElement("div");
template.innerHTML = `
  <style>
    .text {
      color: red;
    }

    p {
      color: blue;
    }
  </style>
  <p class="text">Hi world</p>
  <p>Hi world......</p>
`;

class MyElement extends HTMLElement {
  constructor() {
    super();

    this.p = document.createElement("p");
  }

  connectedCallback() {
    this.p.textContent = "Hi world";
    this.appendChild(this.p);
    this.append(template);
  }
}

customElements.define("my-element", MyElement);


