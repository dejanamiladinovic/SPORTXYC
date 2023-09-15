//AJAX
let proizvodi = [];
$.ajax({
  url: "data/products.json",
  method: "get",
  dataType: "json",
  success: function (data) {
    ispis(data);
    proizvodi = data;
  },
});

function ispis(data) {
  let html = "";
  data.forEach((element) => {
    html += `<div class="product-box">
          <img src="${element.image.src}" alt="${element.image.alt}" class="product-img" />
          <h2 class="product-title">${element.name}</h2>
          <span class="price">$${element.price}</span>
          <i class="bx bx-shopping-bag add-cart"></i>
        </div>`;
  });
  document.getElementById("productShow").innerHTML = html;
}

$.ajax({
  url: "data/category.json",
  method: "get",
  dataType: "json",
  success: function (data) {
    ispisKategorija(data);
  },
});

function ispisKategorija(data) {
  let html = "";
  data.forEach((element) => {
    html += `<li><input type="checkbox" id="${element.id}" name="kategorije" class="kategorije" value="${element.id}"/>${element.name}</li>`;
  });
  document.getElementById("categoryList").innerHTML = html;
  $(".kategorije").change(filterKategorije);
}
console.log(proizvodi);

function filterKategorije() {
  let izabraneKategorije = [];
  $.each($("input[name='kategorije']:checked"), function () {
    izabraneKategorije.push($(this).val());
  });
  console.log(izabraneKategorije);
  let filtProizvodi = proizvodi.filter(function (proizvod) {
    for (let id of izabraneKategorije) {
      if (proizvod.category == id) {
        return true;
      }
    }
  });
  if (filtProizvodi.length) {
    ispis(filtProizvodi);
  } else {
    ispis(proizvodi);
  }
}
$("#sortProizvoda").change(sortiranje);

function sortiranje() {
  console.log("usao");
  let sortirani = [];
  let vrednost = document.getElementById("sortProizvoda").value;
  if (vrednost == "asc") {
    sortirani = proizvodi.sort((a, b) => (a.price > b.price ? 1 : -1));
  } else {
    sortirani = proizvodi.sort((a, b) => (a.price < b.price ? 1 : -1));
  }
  ispis(sortirani);
}
