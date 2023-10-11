// document refers to whole html file
DOMSelectors = {
  // store related code for elements here
  form: document.querySelector("#form"),
  firstName: document.querySelector(".first-name"),
  h2s: document.querySelector("h2"),
  // in quotes, use html notation
};
console.log(DOMSelectors.firstName);

// waits for form to submit, could be click, page load, input
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(); //stps page refresh
  DOMSelectors.h2s.forEach(
    // fix this
    (header) => (header.textContent = DOMSelectors.firstName.value)
  );
});
