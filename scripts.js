document.addEventListener("DOMContentLoaded", function (event) {
  //do work

  console.log(CryptoJS)

  const pass = document.getElementById("password");
  const submit = document.querySelectorAll(".passwordArr")[0];
  const msg = document.getElementById("message");
  const w = 'U2FsdGVkX1/3CO5oQNFwMfSB6BIELdjG42EKiHT3KexbMqqVhzvSa9OFdwQVQSc3Cxv03yWlYYI8zZq6VpmG2w==';

  submit.addEventListener("click", () => {
    let redirect;
    try {
      let decrypted = CryptoJS.AES.decrypt(w, pass.value);
      redirect = CryptoJS.enc.Utf8.stringify(decrypted);
    } catch (e) {
      console.log(e);
    }

    if (redirect && redirect.includes("pho")) {
      window.location.href = redirect;
    } else {
      // handle some error
    }
  });

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
  
  document.querySelectorAll(".nav-link").forEach((link) =>
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
    //Responsive hamburger menu

  AOS.init({

    delay: 180, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  });
  //aos + 2 links on html 

  function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.body.scrollHeight - document.body.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
    console.log('height', height);
    console.log('scrollHeight', document.documentElement.scrollHeight);
    console.log('clientHeight', document.documentElement.clientHeight);

  }
  
  window.onscroll = function () {
    progressBarScroll();
  };
  //progressBarScroll



  const showAnim = gsap.from('.header', {
    yPercent: -100,
    paused: true,
    duration: 0.2
  }).progress(1);

  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });
  //header + 2 links on html



  //Get the button
  var mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.addEventListener('scroll', function () {
    scrollFunction()
  })

  function scrollFunction() {
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  mybutton.addEventListener('click', topFunction)
  // back to top 

});
