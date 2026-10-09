const root = document.querySelector('#root')
const addSelectedToCartButton = document.querySelector('#addCart')
const clearCartButton = document.querySelector('#clearCart')
let productDiv = document.querySelector('.productDiv')
let cartDiv = document.querySelector('.cartDiv')
let buttonsDiv = document.querySelector('.buttonsDiv')
let cart = []
let selected = []
let clear = false
let all = true

const productList = [
  
    {
    name: "Nike Shoes",
    price: 69.99,
    description: "Nike Sneakers. Size and color changeable.",
    image: "shoes.png",
    category: "Clothing"
  },

    {
    name: "Louisville Slugger Bat",
    price: 49.99,
    description: "Louisville Slugger Genuine MIX Unfinished Natural Clear Baseball Bat - 34",
    image: "bat.png",
    category: "Sports"
  },

    {
    name: "Nintendo Switch 2",
    price: 499.99,
    description: "Nintendo Switch 2 - The next evolution of Nintendo Switch",
    image: "switch2.png",
    category: "Electronics"
  }, 
    {
    name: "Nike Men's Park T Shirt",
    price: 23.99,
    description: "Dri-FIT technology helps keep you dry and comfortable",
    image: "nike.png",
    category: "Clothing"
  }, 
    {
    name: "Wilson NFL MVP Football",
    price: 15.95,
    description: "Wilson NFL MVP Football - Official Size, Brown",
    image: "football.png",
    category: "Sports"
  }
]

let PRODUCTS = []
PRODUCTS = productList


render()

function render(){

    productDiv.innerHTML = ""
    addSelectedToCartButton.addEventListener("click", s => {

    productDiv.innerHTML = ""
    selected.forEach(product => {addToCart(product)})
    PRODUCTS.forEach(product => {renderProduct(product, true)}); 
    selected.length = 0

});


    clearCartButton.addEventListener("click", clearCart)

    PRODUCTS.forEach(product => {renderProduct(product)}); 
    renderCart()
}

function renderProduct(p, clear=false){

    let product = document.createElement("div")
    product.className = "product"

    let productImg = document.createElement("img")
    productImg.src = p.image
    product.append(productImg)

    let productName = document.createElement("h1")
    productName.innerHTML = p.name;
    product.append(productName)
    
    let productPrice = document.createElement("h2")
    productPrice.innerHTML = ("$" + p.price);
    product.append(productPrice)

    let productDescription = document.createElement("p")
    productDescription.innerHTML = p.description
    product.append(productDescription)

    let addCartButton = document.createElement("button")
    addCartButton.innerHTML = "Add to Cart"
    addCartButton.addEventListener("click", e => addToCart(p))
    product.append(addCartButton)

    let addCartCheckbox = document.createElement("input")
    addCartCheckbox.type = "checkbox"
    addCartCheckbox.addEventListener("click", e => {
        selected.push(p)
        if(addCartCheckbox.checked){
            product.id = "checked"
        } else {
            product.id = ""
        }
    })

    if(clear){
        addCartCheckbox.checked = false
    }



    product.append(addCartCheckbox)

    productDiv.append(product)
    
}

function renderCart(){
    console.log(cart.length)
    if (cart.length == 0){
        cartDiv.id = "invisible"
    } else {
        cartDiv.id = "notInvisible"
    }

    cartDiv.innerHTML = ""

    let cartName = document.createElement("h1")
    cartName.innerHTML = "Cart"
    cartDiv.append(cartName)

    let cartPrice = document.createElement("h2")
    let prices = cart.map(x => x.price)
    let items = 0
    let totalPrice = 0
    prices.forEach(e => {
        totalPrice += e
        items += 1
    })

    cartPrice.innerHTML = ("$" + totalPrice.toFixed(2) + " (" + items + " items)")
    cartDiv.append(cartPrice)

    cart.forEach(p => {

        let cartProduct = document.createElement("div")
        cartProduct.className = "cartProduct"

        let cartImg = document.createElement("img")
        cartImg.src = p.image
        cartProduct.append(cartImg)

        
        let cartPrice = document.createElement("h2")
        cartPrice.innerHTML = "$" + p.price;
        cartProduct.append(cartPrice)

        cartDiv.append(cartProduct)

    })
}

function addToCart(item){
    console.log(item.name)
    cart.push(item)
    renderCart()
}

function clearCart(){
    cart.length = 0
    render()
}

function filterProducts(button){
    f = button.textContent
    if(f=="All"){
        PRODUCTS = productList
    } else {
        PRODUCTS = productList.filter(x => x.category==f)
        console.log(PRODUCTS)
    }

    render()
}


//Root div, products div inside root and cart div inside root also
//Cart should redraw whenever "add selected to cart" is selected or "add to cart" is selected
