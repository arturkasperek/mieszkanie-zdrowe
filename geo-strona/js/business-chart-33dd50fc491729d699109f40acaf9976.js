"use strict";!function(){var e=new IntersectionObserver(function(t,e){t.forEach(function(t){0<t.intersectionRatio&&(e.unobserve(t.target),new Inpl.Business.Chart(t.target,"1"===t.target.getAttribute("load-modules")))})},{threshold:.5});document.querySelectorAll("[data-business-chart]").forEach(function(t){e.observe(t)})}();