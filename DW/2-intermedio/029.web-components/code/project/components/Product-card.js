class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <main>
        <section><img src="" alt=""></section>
        <section>
          <div>
            <h2>Hi title</h2>
            <p></p>
            <h3></h3>
            <button></button>
          </div>
        </section>
        <section></section>
      </main>
    `;

    return template;
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

customElements.define("product-card", ProductCard);
