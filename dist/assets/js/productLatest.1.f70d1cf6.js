(() => {
  class t extends HTMLElement {
    constructor() {
      super(), this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
      return ["latest-product", "total-products"];
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback(t, s, n) {
      s !== n && this.render();
    }
    render() {
      const t = this.getAttribute("latest-product") || "",
        s = this.getAttribute("total-products") || "";
      this.shadowRoot.innerHTML = `\n        <style>\n            @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');\n\n            /* Add any additional component-specific styles here */\n            .container {\n            margin-top: 20px;\n            }\n        </style>\n        <div class="container mt-3">\n            <div class="card">\n            <div class="card-body">\n                <h5 class="card-title">Latest Product Information</h5>\n                <p class="card-text"><strong>Latest Product Name:</strong> ${t}</p>\n                <p class="card-text"><strong>Total Number of Products:</strong> ${s}</p>\n            </div>\n            </div>\n        </div>\n    `;
    }
  }
  customElements.define("latest-product-info", t);
})();
