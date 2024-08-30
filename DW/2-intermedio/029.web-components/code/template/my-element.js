class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2>Hi world!!!</h2>
        <div>
          <p>I'm new text in JS...</p>
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
    this.appendChild(
      this.getTemplate().content.cloneNode(true)
    );
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("my-element", MyElement);

/* true es para que clone todos los elementos anidados */
