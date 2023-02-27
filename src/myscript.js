const shop = document.getElementById('shop');
const cartAmount = document.getElementById('cart-amount');
//console.log(shop)



let basket = JSON.parse(localStorage.getItem("data")) || []//empty array if no data has been entered;
let generateShop = () => {
    return (shop.innerHTML = shopItemData.map((x) =>{
            //Destructuring
            let {id,name,price,desc,img} = x;
            let searchItem = basket.find((x) => x.id === id) || [];
            return  `<div id=product-id-${id} class="item">
            <img width="200"src="${img}" alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>${price}€</h2>
                    <div class="buttons">
                        <i onclick="incrementProduct(${id})" class="bi bi-plus-lg"></i>
                        <div id=${id} class="quantity">(${searchItem.item===undefined?0:searchItem.item})</div>
                        <i onclick="decrementProduct(${id})"class="bi bi-dash-lg"></i>
                    </div>
                </div>
            </div>
        </div>`
    }).join(""));   
}

generateShop()

const incrementProduct = (id) => {
    let selectedItem = id;
    //console.log(selectedItem.id);
    let searchItem = basket.find((x)=> x.id === selectedItem.id );
    if (searchItem === undefined){
        basket.push({
            id:selectedItem.id,
            item:1,
        });
       // console.log(basket);
    }
    else{
        searchItem.item += 1;
    }
    //console.log(basket);
    updateProduct(selectedItem.id)
    localStorage.setItem("data",JSON.stringify(basket));
  };

let decrementProduct = (id) => {
    let selectedItem = id;
    let searchItem = basket.find((x)=> x.id === selectedItem.id );
    if (searchItem === undefined) return ;
    else if (searchItem.item === 0) return ;
    else{
        searchItem.item -= 1;
    }
    //console.log(basket);
    updateProduct(selectedItem.id);
    basket = basket.filter((x)=>x.item !== 0);
    localStorage.setItem("data",JSON.stringify(basket));

}
let updateProduct = (id) =>{
    let searchItem = basket.find((x)=> x.id ===id);
    //console.log(searchItem.item);
    document.getElementById(id).innerHTML = searchItem.item;
    calculation()
}

let calculation = () => {
    let totCalculation = 0;
    //console.log("form calculation",basket);
    //console.log(basket.map((x)=>x.item).reduce((pre,next)=>  pre+next ,0));
    totCalculation = basket.map((x)=>x.item).reduce((pre,nxt)=>  pre+nxt ,0);
    cartAmount.innerHTML = totCalculation;
}

calculation ();