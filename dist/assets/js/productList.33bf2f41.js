(() => {
  class t extends HTMLElement {
    constructor() {
      super(),
        this.attachShadow({ mode: "open" }),
        (this.products = [
          { name: "Product 1", type: "Type A", count: 10 },
          { name: "Product 2", type: "Type B", count: 5 },
          { name: "Product 3", type: "Type C", count: 8 },
        ]),
        window.addEventListener("message", (t) => {
          "newProduct" === t.data.type &&
            (console.log("inside message"), this.handleNewProduct(t.data.data));
        }),
        this.render();
    }
    render() {
      (this.shadowRoot.innerHTML = `\n\t\t<style>\n\t\t\t@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');\n\n\t\t\t/* Add any additional component-specific styles here */\n\t\t\t.container {\n\t\t\tmargin-top: 20px;\n\t\t\t}\n\t\t</style>\n        <div class="container mt-3">\n          <table class="table">\n            <thead>\n              <tr>\n                <th scope="col">Product Name</th>\n                <th scope="col">Product Type</th>\n                <th scope="col">Product Count</th>\n              </tr>\n            </thead>\n            <tbody>\n            ${this.products
        .map(
          (t, e) =>
            `\n              <tr class="product-row" data-index="${e}">\n                <td>${t.name}</td>\n                <td>${t.type}</td>\n                <td>${t.count}</td>\n              </tr>\n            `,
        )
        .join(
          "",
        )}\n          </tbody>\n          </table>\n        </div>\n      `),
        this.shadowRoot.querySelectorAll(".product-row").forEach((t, e) => {
          t.addEventListener("click", () => {
            const t = this.products[e];
            window.parent.postMessage({ type: "productClicked", data: t }, "*");
          });
        });
    }
    handleNewProduct(t) {
      this.products.push(t),
        window.parent.postMessage(
          {
            type: "productLatest",
            data: { name: t.name, total: this.products.length },
          },
          "*",
        ),
        this.render();
    }
  }
  customElements.define("product-list", t);
})();
