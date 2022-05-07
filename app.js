
// console.log(products)

let filteredProducts = [...products];
// console.log(filteredProducts)

const productContainer = document.querySelector('.products-container');

const displayProducts = () => {
    // if statement
    
    if(filteredProducts.length < 1){
      productContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
      return
    }


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

// Text Filter

const form = document.querySelector('.input-form')
const searchInput = document.querySelector('.search-input')

form.addEventListener('keyup', () => {
    const inputValue = searchInput.value;
    // console.log(inputValue)

    filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(inputValue);
    })
    displayProducts();
});
