console.log("alert");

const sitName = document.getElementsByClassName("kbd");
let sitNumber = "";

for (let i = 0; i < sitName.length; i++) {
  sitName[i].addEventListener("click", function () {
    sitNumber = sitName[i].innerText;
    // sitName[i].classList.toggle("bg-green");
    sitConfimation(sitNumber);
  });
}

console.log(sitName);

function sitConfimation(sit) {
  sit.classList.toggle("bg-green");
  const tableRow = `<tr>
                        <td>${sit}</td>
                        <td>Economoy</td>
                        <td>550</td>
                    </tr>`;
  //   console.log(tableRow);
  const tBody = document.getElementById("sit-confirm");
  console.log(tBody);
  tBody.innerHTML += tableRow;
}
