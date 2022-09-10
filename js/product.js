// console.log('im handelrt')

const inputValue = id =>{
    const inputElement = document.getElementById(id);
    const getInputValue = inputElement.value ;
    inputElement.value = '';
    return getInputValue;
}


const addProduct = () =>{
    const productName = inputValue('product-name')
    // console.log(productName)
    const productQuantity = inputValue('product-quantity')
    // console.log(typeof productQuantity)
    // console.log(typeof productName,typeof productQuantity)

    // console.log(isNaN(productName))
    const number = Number(productQuantity)
    if(!isNaN(productName) || !Number.isInteger(number)){
        alert('vul input diso')
        // console.warn('vul input diso')
        return;
    }

    setProductInLocalStorage(productName,productQuantity)
    
    display()
    // console.table(getLocalStorageData())
}

const getLocalStorageData = () =>{
    const products = localStorage.getItem('all-product');
    const parseProducts = JSON.parse(products)
    return parseProducts;
}

const setProductInLocalStorage = (name, quantity)=>{
    // console.log(name,quantity)

    // const products = {   // products a all products eksthe pass kora hoise
    //     name : name,
    //     quantity : quantity
    // }
    // localStorage.setItem('all-product',JSON.stringify(products))


    let getProducts = getLocalStorageData()

    if(!getProducts){
        getProducts = {}
    }
    
    if(getProducts[name]){
        
        getProducts[name] = parseInt(getProducts[name]) + parseInt(quantity)
    }


    else{
        getProducts[name] = quantity;
    }
    // console.log(getProducts)

    // getProducts[name] = quantity
    // console.log(getProducts)

    localStorage.setItem('all-product',JSON.stringify(getProducts))
}


const display = () =>{
    const products = getLocalStorageData();
    // console.table(products)

    const displayContainer = document.getElementById('all-products-display')

    displayContainer.textContent = '';


    for(const product in products){
        // console.log(product,products[product])

        const name = product
        const quantity = products[product];

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="shadow-sm p-3 mb-2 bg-body rounded">
        <span class="fs-4">${name}</span>
        Quantity:<small class="fw-bold">
            ${quantity > 0 ? quantity : 'stock out' }
        </small>
    </div>
        `;

        displayContainer.appendChild(div)
    }
}

display()
// addProduct()