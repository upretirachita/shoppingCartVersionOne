const shop = document.getElementById('shop');
//console.log(shop)

let shopItemData = [{
    id:"001a",
    name:"Robot",
    price:"30",
    desc:"Lorem ipsum dolor sit amet consec Lorem ipsum dolor sit amet consec",
    img:"./images/toy1.jpg"
    },
    {
    id:"002z",
    name:"Robot2",
    price:"35",
    desc:"Lorem ipsum dolor sit amet consec Lorem ipsum dolor sit amet consec",
    img:"./images/toy4.jpeg"
    },
    {
    id:"003",
    name:"Robo",
    price:"20",
    desc:"Lorem ipsum dolor sit amet consec Lorem ipsum dolor sit amet consec",
    img:"./images/toy3.jpeg"
    },
    {
    id:"004",
    name:"Enjoy",
    price:"25",
    desc:"Lorem ipsum dolor sit amet consec Lorem ipsum dolor sit amet consec",
    img:"./images/toy4.jpeg"
    }]
let generateShop = () => {
    return (shop.innerHTML = shopItemData.map((x) =>{
            //Destructuring
            let {id,name,price,desc,img} = x;
            return  `<div id=product-id-${id} class="item">
            <img width="200"src="${img}" alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>${price}€</h2>
                    <div class="buttons">
                        <i onclick="incrementProduct(${id})" class="bi bi-plus-lg"></i>
                        <div id=${id} class="quantity">0</div>
                        <i onclick="decrementProduct()"class="bi bi-dash-lg"></i>
                    </div>
                </div>
            </div>
        </div>`
    }).join(""));   
}

generateShop()

const incrementProduct = (id) => {
    console.log(id);
  };

let decrementProduct = () => {
    console.log("dec")
}
let updateProduct = () =>{}