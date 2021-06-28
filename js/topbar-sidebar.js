// Minimal Toggle Class - Body Tag
document
  .querySelector("#sidebar__toggle")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("body").classList.toggle("active__minimal_sidebar");
  });




//tabs
//tabs support 
var tabs_el = document.querySelectorAll('.tabs');
 M.Tabs.init(tabs_el, {
	swipeable:false
});
//side nav support

document.addEventListener('DOMContentLoaded', function() {
    var side_nav = document.querySelectorAll('.sidenav');
     M.Sidenav.init(side_nav);
  });


document.addEventListener("DOMContentLoaded", function () {

//	global tabs support
//	global dropdown support 
// document.addEventListener('DOMContentLoaded', function() {
    var dropdown_trigger = document.querySelectorAll('.dropdown-trigger');
	var profile_dropdown = document.querySelectorAll('.user_profile_dropdown');

 M.Dropdown.init(dropdown_trigger, {
		    coverTrigger: false,
			inDuration: 300,
			outDuration: 225,
			belowOrigin: true,
			alignment: "left", 
	});
	M.Dropdown.init(profile_dropdown, {
		coverTrigger: false,
	});
  // });
  // sidebar slide nav
  const myBody = document.querySelector("body");
  var hasNavItems = document.querySelectorAll(".has-sidenav");
  hasNavItems.forEach(function (navItem) {
    navItem.addEventListener("click", function () {
      const li = navItem.closest("li");
      const li_a = navItem.closest("li a");
      li.classList.add("slide-nav-open");
      li_a.classList.add("active");

      myBody.addEventListener("click", function (e) {
        if (e.target !== li && !li.contains(e.target)) {
          li.classList.remove("slide-nav-open");
          li_a.classList.remove("active");
        }
      });
    });
  });

  // Search bar hide show js
  var container = document.querySelector("li.liItem");
  var inputEle = document.querySelector("#searchInput");

  const html = document.querySelector("body");

  inputEle.addEventListener("click", function (e) {
    container.classList.add("show-dropdown");
  });

  html.addEventListener("click", function (e) {
    if (e.target !== inputEle && !container.contains(e.target)) {
      container.classList.remove("show-dropdown");
    }
  });

  //call tabs hide show js
  var container2 = document.querySelector("li.call");
  var inputEle2 = document.querySelector("#callInput");

  const body = document.querySelector("html");

  inputEle2.addEventListener("click", function (e) {
    container2.classList.add("show-dialpad");
  });

  html.addEventListener("click", function (e) {
    if (e.target !== inputEle2 && !container2.contains(e.target)) {
      container2.classList.remove("show-dialpad");
    }
  });

  //add content hide show js
  var container3 = document.querySelector("li.add");
  var inputEle3 = document.querySelector("#addInput");

  // const body = document.querySelector("html");

  inputEle3.addEventListener("click", function (e) {
    container3.classList.add("show-add");
  });

  html.addEventListener("click", function (e) {
    if (e.target !== inputEle3 && !container3.contains(e.target)) {
      container3.classList.remove("show-add");
    }
  });

  //Notifications hide show js
  var container4 = document.querySelector("li.notification");
  var inputEle4 = document.querySelector("#add_notification");

  // const body = document.querySelector("html");

  inputEle4.addEventListener("click", function (e) {
    container4.classList.add("show-notification");
  });

  html.addEventListener("click", function (e) {
    if (e.target !== inputEle4 && !container4.contains(e.target)) {
      container4.classList.remove("show-notification");
    }
  });

  //help hide show js
  var container5 = document.querySelector("li.help");
  var inputEle5 = document.querySelector("#add_help");

  // const body = document.querySelector("html");

  inputEle5.addEventListener("click", function (e) {
    container5.classList.add("show-help");
  });

  html.addEventListener("click", function (e) {
    if (e.target !== inputEle5 && !container5.contains(e.target)) {
      container5.classList.remove("show-help");
    }
  });

  //profile hide show js
  var container6 = document.querySelector("li.profile");
  var inputEle6 = document.querySelector("#add_profile");

  // const body = document.querySelector("html");

  inputEle6.addEventListener("click", function (e) {
    container6.classList.add("show-profile");
  });

  html.addEventListener("click", function (e) {
    if (e.target !== inputEle6 && !container6.contains(e.target)) {
      container6.classList.remove("show-profile");
    }
  });
});
