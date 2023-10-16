// document refers to whole html file
DOMSelectors = {
  // store related code for elements here
  form: document.querySelector("#form"),
  firstName: document.querySelector("firstName"),
  h2s: document.querySelector("h2"),
  // in quotes, use html notation
};
console.log(DOMSelectors.firstName);

// waits for form to submit, could be click, page load, input
DOMSelectors.form.addEventListener("submit"),
  function (event) {
    event.preventDefault(); //stps page refresh
    DOMSelectors.h2s.forEach(
      (header) => (header.textContent = DOMSelectors.firstName.value)
    );
  };

//querySelectorAll(x) creates nodelist of all elements with x selector, querySelector(x) returns first element with x selector

// funct baseobject(1,2,3){this.1,this.2,this.3}
// const object = new baseobject("ooga","booga","dooga")
// object.create = no constructor function
