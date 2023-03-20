var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").classList.remove("navbar-hidden");
  } else {
    document.querySelector(".navbar").classList.add("navbar-hidden");
  }
  prevScrollpos = currentScrollPos;
};

// Scroll to Service
function scrollService() {
  const service = document.getElementById("service");
  service.scrollIntoView();
}

// Scroll to Blog
function scrollBlog() {
  const blog = document.getElementById("blog");
  blog.scrollIntoView();
}

// Scroll to About
function scrollAbout() {
  const about = document.getElementById("about");
  about.scrollIntoView();
}
