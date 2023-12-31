class ProductNew extends HTMLElement {
  constructor() {
    super();

    // Create a shadow DOM
    this.attachShadow({ mode: "open" });
    const imagePath = "../img/obi-pixel8propix-xA1l7OCKL4Q-unsplash.jpg";

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
      <img
        src="${imagePath}"
        class="img-fluid"
        alt="High Quality Image"
      />
      <form>
        <div class="form-group">
          <label for="productName">Product Name:</label>
          <input type="text" id="productName" class="form-control" placeholder="Enter product name" required>
        </div>

        <div class="form-group">
          <label for="productType">Product Type:</label>
          <input type="text" id="productType" class="form-control" placeholder="Enter product type" required>
        </div>

        <div class="form-group">
          <label for="productCount">Product Count:</label>
          <input type="number" id="productCount" class="form-control" placeholder="Enter product count" required>
        </div>

        <button type="submit" class="btn btn-primary" id="addProductBtn">Add Product</button>
      </form>
    </div>
    `;

    this.shadowRoot
      .getElementById("addProductBtn")
      .addEventListener("click", () => {
        const productName = this.shadowRoot.getElementById("productName").value;
        const productType = this.shadowRoot.getElementById("productType").value;
        const productCount =
          this.shadowRoot.getElementById("productCount").value;

        // Validate input values
        if (productName && productType && productCount) {
          // Create a new product object
          const newProduct = {
            name: productName,
            type: productType,
            count: parseInt(productCount, 10),
          };

          // Post a message to notify other components about the new product
          window.parent.postMessage(
            { type: "newProduct", data: newProduct },
            "*",
          );
          console.log("after new Product");
        } else {
          alert("Please fill in all fields.");
        }
      });
  }
}

// Define the custom element 'math-operations'
customElements.define("product-new", ProductNew);
