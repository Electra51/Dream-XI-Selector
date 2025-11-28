const cartArray = [];

function display(cartProduct) {
  console.log(cartProduct);

  const tablebody = document.getElementById("cart-product");

  const cartArrayLength = cartArray.length;
  if (cartArrayLength > 5) {
    alert("you can not added more than 5 player");
    disable();
  } else {
    document.getElementById("total-added-player").innerText = cartArray.length;
    tablebody.innerHTML = ``;

    for (let i = 0; i < cartProduct.length; i++) {
      const name = cartArray[i].playerName;

      const tr = document.createElement("tr");
      tr.innerHTML = `<th>${i + 1}</th>
    <td>${name}</td>`;
      tablebody.appendChild(tr);
    }
  }
}

function disable(element) {
  if ((element.disabled = true)) {
    element.style.background = "rgb(155, 173, 201)";
  }
}

function addToCart(element) {
  const playerName = element.parentNode.children[0].innerText;

  const playerobj = {
    playerName: playerName,
  };

  cartArray.push(playerobj);
  display(cartArray);
}
