
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


let playerCards = document.querySelectorAll('.mediaCard');
let clickableCovers = document.querySelectorAll('.albumCover');

let players = document.querySelectorAll('audio');

let closebuttons = document.querySelectorAll('.btn-close');




// function to hide all divs
function hideAll() {
  playerCards.forEach(function(el) {
    el.style.display = 'none';
  });
}

// run that function right away
hideAll();

// when any animal is clicked, make the suitable div appear
clickableCovers.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();

    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'fancyImg':
        document.querySelector('#fancyCard')
        	.style.display = 'block';
        break;
      case 'threetwooneImg':
        document.querySelector('#threetwooneCard')
          .style.display = 'block';
        break;
      case 'badImg':
        document.querySelector('#badCard')
          .style.display = 'block';
        break;
      case 'loveMeImg':
        document.querySelector('#loveMeCard')
          .style.display = 'block';
        break;
    } // end of switch
    // switch does not need default for this

    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });

  } // end of function for clicking

}); // end of forEach()

function closeButton1() {
  var x = document.getElementById("threetwooneCard");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });
  }
}

function closeButton2() {
  var x = document.getElementById("fancyCard");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });
  }
}

function closeButton3() {
  var x = document.getElementById("badCard");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });
  }
}

function closeButton4() {
  var x = document.getElementById("loveMeCard");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });
  }
}
