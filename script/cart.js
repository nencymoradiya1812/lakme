import nav from "../components/nav.js";
document.getElementById("nav").innerHTML = nav();

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalprice = 0;
cart.map((ele) => {
  totalprice += ele.price * ele.qty * 10;
});

let cartui = (cart) => {
  cart.map((ele, index) => {
    let imgdiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = ele.image;
    imgdiv.append(img);
    imgdiv.setAttribute("class", "imgdiv");

    let tdiv = document.createElement("div");
    let title = document.createElement("h3");
    title.innerHTML = ele.title;
    tdiv.setAttribute("class", "tdiv");
    tdiv.append(title);

    let prizediv = document.createElement("div");
    let prize = document.createElement("p");
    prize.innerHTML = `${ele.price * 10}$`;
    prizediv.append(prize)
    prize.setAttribute("class", "prize");
prizediv.setAttribute("class","prizediv");

    let qtydiv = document.createElement("div");
    let minus = document.createElement("button");
    minus.innerHTML = "-";

    minus.addEventListener("click", () => {
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
    let num = document.createElement("p");
    num.innerHTML = ele.qty;
    let plus = document.createElement("button");
    plus.innerHTML = "+";

    plus.addEventListener("click", () => {
      console.log("test");
      cart[index].qty += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.reload();
    });
    qtydiv.append(minus, num, plus);
    qtydiv.setAttribute("class", "qtydiv");

    let parent = document.createElement("div");
    parent.append(imgdiv, tdiv, qtydiv,prizediv);
    document.getElementById("cartpage").append(parent);
    parent.setAttribute("class", "parent");
  });
};
cartui(cart);

let ui = () => {
  let parent2 = document.createElement("div");
  let lable = document.createElement("p");
  lable.innerHTML = "Promo Code:";
  let lable2 = document.createElement("label");
  lable2.innerHTML = "Totle Price:";
  let promocode = document.createElement("input");
  promocode.placeholder = "enter your promo code";
  promocode.setAttribute("class", "promocode");
  let dprice = document.createElement("p");

  let apply = document.createElement("submit");
  apply.innerHTML = "enter";
  apply.setAttribute("class", "enter");
  parent2.append(lable, promocode, apply);
  document.getElementById("page").append(parent2);
  document.getElementById("price").append(lable2, totalprice);

  parent2.setAttribute("class", "parent2");

  lable.setAttribute("class", "lable");

  promocode.addEventListener("keypress", (e) => {
    console.log(e.key);
    if (e.key == "Enter") {
      console.log(promocode.value);
      if (promocode.value == "code20") {
        totalprice -= (totalprice / 100) * 20;
        console.log(totalprice);
        dprice.innerHTML = `Final price :${totalprice}`;
        parent2.append(dprice);
        dprice.setAttribute("class", "dprice");
      }
    }
  });

};
ui();
