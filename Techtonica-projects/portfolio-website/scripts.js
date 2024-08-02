// the modal

    // get the modal
    let modal = document.getElementById("myModal");
              // console.log(modal);
    // get the button that opens the modal
    var btn = document.getElementById("myBtn");
              // console.log(btn);
    // get the span element that closes the modal
    var span = document.getElementsByClassName("close")[0];
              // console.log(span);
    // when button loads, open the modal
    window.onload = function() {
      modal.style.display = "block";
    }
    // when use clicks on span (x), close the modal
    span.onclick = function() {
      modal.style.display = none;
    }
    // when user clicks outside of modal, close modal
    window.onclick = function(event) {
      if(event.target == modal){
        modal.style.display = "none";
      }
    }

// scroll to top button

      // get the button
      let toTopBtn = document.getElementById("toTopBtn");
      // when user scrolls down 20px from the top of document, display button
      window.onscroll = function () {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          toTopBtn.style.display = "block";
        } else {
          toTopBtn.style.display = "none";
        }
      }

      // when user clicks on button, scroll to the top of document
      function topFunction() {
        document.body.scrollTop = 0; // for safari browsers
        document.documentElement.scrollTop = 0; // for chrome, firefox, IE and opera
      }