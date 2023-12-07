class ProductList extends HTMLElement {
  constructor() {
    super();

    // Create a shadow DOM
    this.attachShadow({ mode: "open" });

    // Sample products data (replace with your actual data)
    this.products = [
      { name: "Product 1", type: "Type A", count: 10 },
      { name: "Product 2", type: "Type B", count: 5 },
      { name: "Product 3", type: "Type C", count: 8 },
    ];

    window.addEventListener("message", (event) => {
      if (event.data.type === "newProduct") {
        console.log("inside message");
        // Handle the new product message
        this.handleNewProduct(event.data.data);
      }
    });

    // Render the product table
    this.render();
  }

  render() {
    // Your component's HTML content
    this.shadowRoot.innerHTML = `
		<style>
			@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');

			/* Add any additional component-specific styles here */
			.container {
			margin-top: 20px;
			}
		</style>
        <div class="container mt-3">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Product Type</th>
                <th scope="col">Product Count</th>
              </tr>
            </thead>
            <tbody>
            ${this.products
              .map(
                (product, index) => `
              <tr class="product-row" data-index="${index}">
                <td>${product.name}</td>
                <td>${product.type}</td>
                <td>${product.count}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
          </table>
        </div>
      `;

    // Attach click event listeners to each row
    const productRows = this.shadowRoot.querySelectorAll(".product-row");
    productRows.forEach((row, index) => {
      row.addEventListener("click", () => {
        // Get the clicked product data
        const clickedProduct = this.products[index];

        // Trigger postMessage with the clicked product data
        window.parent.postMessage(
          { type: "productClicked", data: clickedProduct },
          "*"
        );
      });
    });
  }

  handleNewProduct(newProduct) {
    // Add the new product to the products array
    this.products.push(newProduct);
    window.parent.postMessage(
      {
        type: "productLatest",
        data: { name: newProduct.name, total: this.products.length },
      },
      "*"
    );
    // Render the updated product table
    this.render();
  }
}

customElements.define("product-list", ProductList);
