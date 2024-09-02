class MyElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h1>
          <slot name="title"></slot>
        </h1>
        <p>
          <slot name="paragraph"></slot>
        </p>
        <slot></slot>
      </section>

      ${this.getStyles()}
    `;

    return template;
  }

  getStyles() {
    return `
      <style>
        :host {
          display: inline-block;
          width: 100%;
          min-width: 300px;
          max-width: 450px;
          font-size: 20px;
          background: grey;
        }

        :host(.blue) {
          background: blue;
        }

        :host([attr]) {
          background: yellow;
        }

        :host([attr]) h1, :host([attr]) p {
          color: aqua; 
        }
        /* :host([attr]) p {
          color: aqua;  
        } */

        :host-context(article.card){
          display: block;
          max-width: 100%;
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
