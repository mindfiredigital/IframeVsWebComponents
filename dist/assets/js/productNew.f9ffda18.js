(() => {
  class t extends HTMLElement {
    constructor() {
      super(),
        this.attachShadow({ mode: "open" }),
        (this.shadowRoot.innerHTML =
          '\n    <style>\n      @import url(\'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\');\n\n      /* Add any additional component-specific styles here */\n      .container {\n        margin-top: 20px;\n      }\n    </style>\n    <div class="container mt-3">\n      <form>\n        <div class="form-group">\n          <label for="productName">Product Name:</label>\n          <input type="text" id="productName" class="form-control" placeholder="Enter product name" required>\n        </div>\n\n        <div class="form-group">\n          <label for="productType">Product Type:</label>\n          <input type="text" id="productType" class="form-control" placeholder="Enter product type" required>\n        </div>\n\n        <div class="form-group">\n          <label for="productCount">Product Count:</label>\n          <input type="number" id="productCount" class="form-control" placeholder="Enter product count" required>\n        </div>\n\n        <button type="submit" class="btn btn-primary" id="addProductBtn">Add Product</button>\n      </form>\n    </div>\n    '),
        this.shadowRoot
          .getElementById("addProductBtn")
          .addEventListener("click", () => {
            const t = this.shadowRoot.getElementById("productName").value,
              e = this.shadowRoot.getElementById("productType").value,
              o = this.shadowRoot.getElementById("productCount").value;
            if (t && e && o) {
              const n = { name: t, type: e, count: parseInt(o, 10) };
              window.parent.postMessage({ type: "newProduct", data: n }, "*"),
                console.log("after new Product");
            } else alert("Please fill in all fields.");
          });
    }
  }
  customElements.define("product-new", t);
})();
