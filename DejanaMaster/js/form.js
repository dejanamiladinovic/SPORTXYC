$("#signup").click(function () {
  $(".message").css("transform", "translateX(100%)");
  if ($(".message").hasClass("login")) {
    $(".message").removeClass("login");
  }
  $(".message").addClass("signup");
});

$("#login").click(function () {
  $(".message").css("transform", "translateX(0)");
  if ($(".message").hasClass("login")) {
    $(".message").removeClass("signup");
  }
  $(".message").addClass("login");
});

document.getElementById("btnPrijava").addEventListener("click", provera);

function provera() {
  let ime, prezime, email, password;
  let brojGresaka = 0;

  ime = document.querySelector("#tbIme");
  prezime = document.querySelector("#tbPrezime");
  email = document.querySelector("#email");
  password = document.querySelector("#password");

  let reImePrezime =
    /^[A-ZŠĆČŽĐ]{1}[a-zšćčžđ]{2,11}(\s[A-ZŠĆČŽĐ]{1}[a-zšćčžđ]{2,11})?$/;
  let reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let rePassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!reImePrezime.test(ime.value)) {
    brojGresaka++;
    alert("Ime mora imati najmanje 3 karaktera a najviše 12.");
  }
  
  if (!reImePrezime.test(prezime.value)) {
    brojGresaka++;
    alert("Prezime mora imati najmanje 3 karaktera a najviše 12.");
  }
  if (!reEmail.test(email.value)) {
    brojGresaka++;
    alert(
      "Email mora imati jedan ili više alfanumeričkih karaktera, crte ili tačke i znak @ "
    );
  }
  if (!rePassword.test(password.value)) {
    brojGresaka++;
    alert(
      "Lozinka mora imati barem jedno malo slovo,barem jedno veliko slovo, barem jednu cifru, barem jedan od specijalnih znakova @, $, !, %, *, ? ili & i mora imati najmanje 8 znakova"
    );
  }

  if (brojGresaka == 0) {
    document.getElementById("tekst").innerHTML =
      "<p>Uspešno ste popunili formu</p>";
  }
  
}
