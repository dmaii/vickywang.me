document.addEventListener("DOMContentLoaded", function (event) {
  //do work

  window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
        } else {
          document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
        }
      });
    });
  
    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
    
  });
// For more information, see greensock.com/docs/v3/Plugins/ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// You can use a ScrollTrigger in a tween or timeline
gsap.to(".divider", {
  rotate: 90,
  scrollTrigger: {
    trigger: ".divider",
    start: "top 240px", //trigger, viewport
    end: "bottom bottom",
    scrub: 1,
    markers: false,
    toggleActions: "restart pause reverse reset"
  }
});

gsap.to(".divider1", {
  rotate: 90,
  scrollTrigger: {
    trigger: ".divider1",
    start: "top 240px", //trigger, viewport
    end: "bottom bottom",
    scrub: 1,
    markers: false,
    toggleActions: "restart pause reverse reset"
  }
});
gsap.to(".t-intro", {
  y: 110,
  scrollTrigger: {
    trigger: ".t-intro",
    start: "top 100px", //trigger, viewport
    end: "+=560",
    scrub: 1,
    markers: false,
    pin: true,
    toggleActions: "restart pause reverse reset"
  }
});



// immediateRender: false, second scroll smooth

//ScrollTrigger


});
