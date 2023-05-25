
var klase = document.getElementsByClassName("acc-info");

function change(index) {
  for (let i = 0; i < klase.length; i++) {
    klase[i].style.display = 'none';
  }

  klase[index].style.display='block';
}



