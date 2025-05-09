/*

Custom script

This file will not be overwritten by the updater

*/
(function() {
  // Create the meta tag
  var metaTag = document.createElement('meta');
  metaTag.name = 'robots';
  metaTag.content = 'noindex, nofollow';

  // Append it to the <head> of the document
  document.head.appendChild(metaTag);
})();

// JavaScript code
function search_animal() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("animals");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "block";
    }
  }
}
