
// console.log(products)

let filteredProducts = [...products];
// console.log(filteredProducts)

const productContainer = document.querySelector('.products-container');

// companies.innerHTML = ['all',...new Set(products.map(({ company,id }) => {
  //   return `<button class="company-btn" data-id="${id}">${company}</button>`
  // }))].join('')
  
  
  
  const displayProducts = () => {
    // if statement
    
    if(filteredProducts.length < 1){
      productContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
      return
    }
    
    
    productContainer.innerHTML = filteredProducts.map(({ id,title,image,price }) => {
      
      return `<article class="product" data-id='${id}'>
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
  
  // Filter Buttons
  
  const companiesDOM = document.querySelector('.companies');

  const displayButtons = () => {
    const buttons = ['all',...new Set(products.map((product) => product.company)),]
    companiesDOM.innerHTML = buttons.map((company) => {
      return `<button class="company-btn" data-id="${company}">${company}</button>`
    }).join('')
  }
  
  displayButtons();

  companiesDOM.addEventListener('click', (e) => {
    // console.log(e.target);
    const el = e.target
    if(el.classList.contains('company-btn')){
      if(el.dataset.id === 'all'){
        filteredProducts = [...products];
      }else{
        filteredProducts = products.filter((product) => {
          return product.company === el.dataset.id
        })
      }
      searchInput.value = '';
      displayProducts();
    }
  })