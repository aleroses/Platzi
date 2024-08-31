class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["title", "paragraph", "img"];
  }

  /* attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "title") {
      this.title = newVal;
    }

    if (attr === "paragraph") {
      this.paragraph = newVal;
    }

    if (attr === "img") {
      this.img = newVal;
    }
  } */

  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attr] = newVal;
    }
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2>${this.title}</h2>
        <div>
          <p>${this.paragraph}</p>
          <img src=${this.img} alt="">
        </div>
      </section>
      ${this.getStyles()}
    `;

    return template;
  }

  getStyles() {
    return `
      <style>
        h2 {
          color:red; 
        }
      </style>
    
    `;
  }

  render() {
    this.shadowRoot.appendChild(
      this.getTemplate().content.cloneNode(true)
    );
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("my-element", MyElement);
