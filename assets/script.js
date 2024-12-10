// console.log("alert");

const couponCode = "get20";

const sitName = document.getElementsByClassName("kbd");
const grandTotal = document.getElementById("grand-total");
let sitNumber = "";

for (let i = 0; i < sitName.length; i++) {
  sitName[i].addEventListener("click", function () {
    // sitName[i].classList.toggle("bg-green");
    sitConfimation(sitName[i]);
  });
}

const applyCoupon = document.getElementById("apply-coupon");
applyCoupon.addEventListener("click", function () {
  const total = document.getElementById("total").innerText;
  //   console.log(typeof total);
  const couponCodeValue = document.getElementById("coupon-input").value;
  if (couponCode == couponCodeValue) {
    const discount = (20 / 100) * parseFloat(total);
    const afterDiscount = total - discount;
    grandTotal.innerText = afterDiscount;
  }
});

function sitConfimation(sit) {
  const sitId = sit.innerHTML;
  const existingSitId = document.getElementById(sitId);
  if (!existingSitId) {
    const sitConfimation = document.getElementById("sit-confirm");
    console.log();
    if (sitConfimation.children.length < 4) {
      sit.classList.toggle("bg-green");
      const tr = document.createElement("tr");
      tr.innerHTML = `<td id="${sitId}">${sitId}</td>
                  <td>Economoy</td>
                  <td>550</td>`;
      const tBody = document.getElementById("sit-confirm");
      tBody.appendChild(tr);
      totalCalculation(sitConfimation.children.length);
    } else {
      alert("You can select maximum 4 sit!");
    }
  } else {
    existingSitId.parentNode.remove();
  }
}

function totalCalculation(s) {
  const total = document.getElementById("total");
  total.innerText = 550 * s;
  grandTotal.innerText = 550 * s;
}
