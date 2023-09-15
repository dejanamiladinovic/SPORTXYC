console.log("hsdfsg");

var nizStavki = ["ABOUT US", "SHOP", "CONTACT", "LOCATION"];
var nizStranica = ["index.html","shop.html","contact.html","#moj-footer", ];

var nasMeni;
nasMeni = "<ul>";
for(var i=0; i<nizStavki.length ;i++){
	nasMeni += "<li> <a href='"+ nizStranica[i] +"'>" + nizStavki[i] + "  </a></li>";
}
nasMeni += "</ul>";
document.getElementById("meni").innerHTML = nasMeni;

/* *******************kolekcije*****************************************************************
**************** */

var nizKolekcijaSlike = ["img/product8.jpg","img/product7.jpg","img/product2.jpg"];
var nizKolekcija = ["Sneakers","Equipment","Accessories"];

// var nasiProizvodi=null;
var nasiProizvodi;
nasiProizvodi ="<div>";

    for(i=0; i<nizKolekcija.length; i++){
       
        nasiProizvodi +=  "<article class ='proizvodi'><img src='"+ nizKolekcijaSlike[i] + "'><h3>" + nizKolekcija[i] + "</h3></article> " ;
        
    }
nasiProizvodi += "</div>"; 
document.getElementById("tri").innerHTML = nasiProizvodi;


/*
*************************************************************************************mreze********************************************************************************* */
// var nizMreze= ["INSTAGRAM", "TIKTOK", "FACEBOOK", "TWITTER"];
// var nizLinkovi = ["index.html","index.html","index.html","index.html" ];

// var naseMreze;
// naseMreze = "<ul>";
// for(var i=0; i<nizMreze.length ;i++){
// 	naseMreze += "<li> <a href='"+ nizLinkovi[i] +"'>" + nizMreze[i] + "  </a></li>";
// }
// naseMreze += "</ul>";
// document.getElementById("mreze").innerHTML = naseMreze;
/**************************************************************************************SHOP*************************************************************** */

/*************Slajder************/ 

$(document).ready(function(){
    slideShow();
});
function slideShow(){
    var current = $('#naslovna .show');
    var next = current.next().length ? current.next() : current.parent().children(':first');

    current.hide().removeClass('show');
    next.fadeIn().addClass('show');

    setTimeout(slideShow, 3000);
}