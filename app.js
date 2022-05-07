
// console.log(products)

let filteredProducts = [...products];
// console.log(filteredProducts)

const productContainer = document.querySelector('.products-container');

const displayProducts = () => {
    // if statement

    productContainer.innerHTML = filteredProducts.map(({ id,title,image,price }) => {

        return `<article class="product data-id='${id}'">
        <img src=${image} class="product-img img" alt="">
        <footer>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">${price}</span>
        </footer>
      </article>`
      
    }).join('')
}

displayProducts();