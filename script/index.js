import nav from "../components/nav.js";

document.getElementById("nav").innerHTML=nav()






let show = (cart) => {
  cart.map((ele, index) => {
    
    let divimg = document.createElement("div");
    let img = document.createElement("img");
    img.src = ele.image;
    divimg.append(img);
    divimg.setAttribute("class", "cart-img");

    let namediv = document.createElement("div");
    let name = document.createElement("h1");
    name.innerHTML = ele.title;

    name.setAttribute("class", "title");
    namediv.append(name);
    namediv.setAttribute("class", "title-main");


    let minse = document.createElement("button");
    minse.innerHTML = "-";
    let pricediv = document.createElement("div");
    let price = document.createElement("h1");
    price.innerHTML =  `${ele.price * 10}$`;
    price.setAttribute("class", "price");
    pricediv.append(price);
    pricediv.setAttribute("class", "price-heading");

    
    let plusminse = document.createElement("div");
    let noq = document.createElement("button");
    noq.innerHTML = ele.qty;
    let plus = document.createElement("button");
    plus.innerHTML = "+";

    imgdiv.append(image);
    texts.append(title, price1);
    plusminse.append(minse, noq, plus);
    maindiv.append(imgdiv, texts, plusminse);
    document.getElementById("cartpage").append(maindiv);

    price1.setAttribute("class", "price1");
    maindiv.setAttribute("class", "maindiv");
    imgdiv.setAttribute("class", "imgdiv");
    texts.setAttribute("class", "texts");
    plusminse.setAttribute("class", "plusminse");

    minse.addEventListener("click", () => {
      console.log(ele);
      let qty = cart[index].qty;
      if (qty == 1) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));

        console.log(cart);
        window.location.reload();
      } else {
        cart[index].qty -= 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload();
      }
    });
    plus.addEventListener("click", () => {
      console.log("test");
      cart[index].qty += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.reload();
    });
  });
};
show(cart);

let show2 = () => {
  let maindiv2 = document.createElement("div");
  let lable = document.createElement("label");
  lable.innerHTML = "PROMO CODE:";
  let lable2 = document.createElement("label");
  lable2.innerHTML = "TOTAL PRICE:";
  let promocode = document.createElement("input");
  promocode.placeholder = "enter your promo code";
  promocode.setAttribute("class", "promocode");
  let disprice = document.createElement("p")
  
  let apply = document.createElement("submit");
  apply.innerHTML = "Apply";
  apply.setAttribute("class", "apply");
  maindiv2.append(lable, promocode, apply);
  document.getElementById("other").append(maindiv2);
  document.getElementById("price").append(lable2, totalprice);

  maindiv2.setAttribute("class", "maindiv2");
  // totalprice.setAttribute("class","totalprice")
  lable.setAttribute("class", "lable");
  promocode.addEventListener("keypress", (e) => {
    // e.key()
    console.log(e.key);
    if (e.key == "Enter") {
      console.log(promocode.value);
      if (promocode.value == "nensi20") {
        totalprice -= (totalprice / 100) * 20;
        console.log(totalprice);
        disprice.innerHTML=`Final price :${totalprice}`
        maindiv2.append(disprice)
        disprice.setAttribute("class","disprice")
      }
    }
  });

  // let price=""

  // for(let i=1;i<totalprice.length;i++){
  // price+=totalprice[i]
  // }
  // document.getElementById("price").append(price);

  
};
show2();