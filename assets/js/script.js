const productList = document.querySelector('.products-grid-container');

function render(products){
  productList.innerHTML = '';
  for (const product of products) {
    productList.innerHTML += `
      <div class="products-grid-item">
        <div class="product-image">
          <img src="${product.thumbnail}">
        </div>
        <div class="ratings">
          <div class="stars-container">
            <span class="stars">★★★★★</span>
            <span data-rating="${product.rating}" class="stars-filled">★★★★★</span>
          </div>
          <p class="rating-text">${product.rating}</p>
        </div>
        <div class="product-info">
          <p class="product-category">${product.category}</p>
          <p class="product-title">${product.title}</p>
        </div>
        <div class="product-price-info">
          <p class="product-full-price">$${(((product.price) * 100) / (100 - product.discountPercentage)).toFixed(2)}</p>
          <p class="product-price">$${product.price}</p>
        </div>
        <p class="product-description">${product.description}</p>
        <div class="product-tags">#${(product.tags).join(' #')}</div>
        <p class="product-stock">Remaining stock: ${product.stock}</p>
      </div>    
    `
  }

  const starsFilleds = document.querySelectorAll('.stars-filled');
  for (const starsFilled of starsFilleds) {
    const percentage = (starsFilled.dataset.rating / 5) * 100;
    starsFilled.style.width = `${percentage}%`;
  }
}

function searchProduct(){
  const inputValue = searchInput.value.toLowerCase()
  const searchedProducts = products.filter(product => product.title.toLowerCase().includes(inputValue) || product.category.toLowerCase().includes(inputValue) || product.tags.some(tag => tag.toLowerCase().includes(inputValue)));
  render(searchedProducts);

  const emptyProductArea = document.querySelector('.empty-product-area-container');
  if(searchedProducts.length === 0){
    productList.innerHTML = '';
    emptyProductArea.innerHTML = `
     <div class="empty-search-area">
        <p class="sorry-icon">:(</p>
        <p>We couldn't find any products that match your criteria. Please try different filters or search terms.</p>
      </div>
    `
  } else{
    emptyProductArea.innerHTML = '';
  }
}

searchInput.addEventListener('input', searchProduct);

render(products);
