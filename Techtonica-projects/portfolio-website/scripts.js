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
      // when user scrolls down 50px from the top of document, display button
      window.onscroll = function () {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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

  // adding more text to document
  // selecting about section
  let about = document.getElementById("about");
  // locating child p element to about section
  // console.log(about.children);  // noted at index 4
  let p = about.children[4];
  // add onto existing p tag
  p.textContent += " I’ve experienced firsthand the rapid changes in San Francisco due to the growth of the tech industry. As someone who has lived here my whole life, I’ve seen how these changes have brought both opportunities and challenges to our community. The influx of tech companies has promoted economic growth and innovation, but it has also led to gentrification, impacting long-time residents and increasing socio-economic disparities.";
