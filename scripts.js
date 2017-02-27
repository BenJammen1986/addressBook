// back-end logic
function Contact(first, last, address) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = []; //create array because there may be multiple addresses entered.
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

 Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

//newContact.addresses.push();

//front-end logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
debugger;
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() +  "</span></li>");
    //this clears the input field so new data can be entered. This is solely to make the UI more user friendly.
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
  });
});
