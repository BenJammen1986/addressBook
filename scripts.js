// back-end logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

//front-end logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
