class LatestProductInfo extends HTMLElement {
  constructor() {
    super();

    // Create a shadow DOM
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["latest-product", "total-products"];
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
    const latestProduct = this.getAttribute("latest-product") || "";
    const totalProducts = this.getAttribute("total-products") || "";

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
                <h5 class="card-title">Latest Product Information</h5>
                <p class="card-text"><strong>Latest Product Name:</strong> ${latestProduct}</p>
                <p class="card-text"><strong>Total Number of Products:</strong> ${totalProducts}</p>
            </div>
            </div>
        </div>
    `;
  }
}

customElements.define("latest-product-info", LatestProductInfo);
