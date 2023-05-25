var klase = document.getElementsByClassName("list");
var button = document.getElementsByClassName("number");

function choose(index) {
  for (let i = 0; i < klase.length; i++) {
    klase[i].style.display = 'none';
  }
  klase[index].style.display='flex';
  buttonn(index);
}

function buttonn (index)
{
    for (let i = 0; i < button.length; i++) {
        button[i].style.background = "transparent";
      }

    button[index].style.background = "rgb(236, 194, 114)";
    button[index].style.padding = "0px 10px";
    button[index].style.borderRadius = "10px 10px 0px 0px";
    
}

