class ProductDetail extends HTMLElement {
  constructor() {
    super();

    // Create a shadow DOM
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["name", "type", "count"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const name = this.getAttribute("name") || "";
    const type = this.getAttribute("type") || "";
    const count = this.getAttribute("count") || "";

    this.shadowRoot.innerHTML = `
        <style>
            @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');

            /* Add any additional component-specific styles here */
            .container {
            margin-top: 20px;
            }
        </style>
        <div class="container mt-3">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Product Details</h5>
                <p class="card-text"><strong>Name:</strong> ${name}</p>
                <p class="card-text"><strong>Type:</strong> ${type}</p>
                <p class="card-text"><strong>Count:</strong> ${count}</p>
            </div>
            </div>
        </div>
    `;
  }
}

customElements.define("product-detail", ProductDetail);
