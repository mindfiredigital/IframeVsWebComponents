(() => {
  class t extends HTMLElement {
    constructor() {
      super(), this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
      return ["name", "type", "count"];
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback(t, n, e) {
      n !== e && this.render();
    }
    render() {
      const t = this.getAttribute("name") || "",
        n = this.getAttribute("type") || "",
        e = this.getAttribute("count") || "";
      this.shadowRoot.innerHTML = `\n        <style>\n            @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');\n\n            /* Add any additional component-specific styles here */\n            .container {\n            margin-top: 20px;\n            }\n        </style>\n        <div class="container mt-3">\n            <div class="card">\n            <div class="card-body">\n                <h5 class="card-title">Product Details</h5>\n                <p class="card-text"><strong>Name:</strong> ${t}</p>\n                <p class="card-text"><strong>Type:</strong> ${n}</p>\n                <p class="card-text"><strong>Count:</strong> ${e}</p>\n            </div>\n            </div>\n        </div>\n    `;
    }
  }
  customElements.define("product-detail", t);
})();
