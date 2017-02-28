// back-end logic
function Contact(first, last, address) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = []; //create array because there may be multiple addresses entered.
}

function Address(addressType, street, city, state) {
  this.addressType = addressType;
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Address.prototype.fullAddress = function() {
  return "<strong>" + this.addressType + ":</strong> " + this.street + ", " + this.city + ", " + this.state;
}

function resetFields() {
  $("input#new-address-type").val("");
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-state").val("");
}
//front-end logic
// user interface logic
$(document).ready(function() {

  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-address-type">Address Type (example: Home)</label>' +
                                   '<input type="text" class="form-control new-address-type">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    //following code NEEDS to be located after creating a new contact.
      $(".new-address").each(function() {
        var inputtedType = $(this).find("input.new-address-type").val();
        var inputtedStreet = $(this).find("input.new-street").val();
        var inputtedCity = $(this).find("input.new-city").val();
        var inputtedState = $(this).find("input.new-state").val();
        var newAddress = new Address(inputtedType, inputtedStreet, inputtedCity, inputtedState)
        newContact.addresses.push(newAddress)
      });
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
  $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.fullName());
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $("ul#addresses").text("");
    newContact.addresses.forEach(function(address) {
      $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
    });
  });
  resetFields();
  });
});
