// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span

/* 

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");


  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights

*/

window.addEventListener("DOMContentLoaded", function() {
    const date = document.getElementById("date")
    date.textContent = new Date().getFullYear();
})

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height
    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }else {
        linksContainer.style.height = 0;
    }
})

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function() {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
    

  if(scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav')
  }else {
    navbar.classList.remove('fixed-nav')
  }

  if(scrollHeight > 500) {
    topLink.classList.add('show-link')
  }else {
    topLink.classList.remove("show-link")
  }
  
});

// const scrollLinks = document.querySelectorAll(".scroll-link");

// scrollLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();

//     const id = e.currentTarget.getAttribute("href").slice(1);
//     const element = document.getElementById(id);
//     const navHeight = navbar.getBoundingClientRect().height;
//     const containerHeight = linksContainer.getBoundingClientRect().height;
//     const fixedNav = navbar.classList.contains("fixed-nav");
//     let position = element.offsetTop - navHeightheight;

//    if(!fixedNav) {
//     position = position - navHeight;
//    }
   
//    if(navHeight > 82) {
//     position = position + containerHeight;
//    }

//    window.scrollTo ( {
//     left: 0,
//     top: position,
//    })
//     linksContainer.style.height = 0
//   })
// })

const about = document.querySelector('.about');
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll('.content')

about.addEventListener("click", function(e) {
  const id = e.target.dataset.id;

  if(id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active")
    });

    e.target.classList.add("active");

    articles.forEach(function (article) {
       article.classList.remove("active")
    })

    const tabContent = document.getElementById(id);
    tabContent.classList.add('active')
  }
})


 

// const questions = document.querySelectorAll(".question");

// questions.forEach(function (question) {
//   const btn = question.querySelector(".question-btn");
//   console.log(btn);

//   btn.addEventListener("click", function () {
//      console.log(question);

//      question.classList.toggle("show-text");

//     // questions.forEach(function (item) {
//     //   if (item !== question) {
//     //     item.classList.remove("show-text");
//     //     // console.log(item)
//     //   }
//     // });
 
//   });
// });


const questions = document.querySelectorAll('.question')

questions.forEach(function(question) {
  const btn = question.querySelector('.question-btn')

  btn.addEventListener('click', function() {
      question.classList.toggle('show-text')
 

      ///remove when another toggles open
  questions.forEach(function(item) {
    if(item !== question) {
      item.classList.remove('show-text')
    }
  })
  })
})




const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  // working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  // working with buttons

  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";