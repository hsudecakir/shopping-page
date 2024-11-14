const productList = document.querySelector('.products-grid-container');


function render(){
  for (const product of products) {
    productList.innerHTML += `
      <div class="products-grid-item">
        <div class="product-image">
          <img src="${product.thumbnail}">
        </div>
        <div class="product-info">
          <p class="product-title">${product.title}</p>
          <p class="product-category">${product.category}</p>
          <p class="product-description">${product.description}</p>
        </div>
        <div class="product-price-info">
          <p class="product-price">${product.price}</p>
          <p class="product-stock">${product.stock}</p>
        </div>
        <div class="product-tags">
          
        </div>
      </div>    
    `
  }
  const productTagsTxts = document.querySelectorAll('.product-tags');

  for (const productTagsTxt of productTagsTxts) {
    for (const product of products) {
      for (const tag of product.tags) {
        productTagsTxt.innerHTML += `
            <p class="product-tag">${tag}</p>
        `
      }
      return;
    }
  }
}

render();