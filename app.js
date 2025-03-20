let itemlist = [];
let t = "";
let additem = () => {
  let item = document.getElementById("todo").value;
  itemlist.push(item);
  console.log(itemlist);
  updatelist();
};

let deleteitem = (index) => {
  itemlist.splice(index, 1);
  updatelist();
};
function updatelist() {
  t = "";
  itemlist.forEach((elem, index) => {
    t += `<tr>
    <td>${index + 1}</td>
    <td>${elem}</td>
    <td><button onclick="deleteitem(${index})">Delete</button></td>
    </tr>`;
  });
  document.getElementById("table").innerHTML = t;
}

document.getElementById("btn").addEventListener("click", additem);
document.getElementById("btn").addEventListener("keypress", (e) => {
  if (e.key === "enter") {
    additem;
  }
});
