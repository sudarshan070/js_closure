function nonsense(string) {
  var blab = function() {
    alert(string);
  };
  blab();
}
nonsense();

function nonsense(string) {
  var blab = function() {
    alert(string);
  };
  setTimeout(blab, 2000);
}

function nonsense(string) {
  var blab = function() {
    alert(string);
  };
  return blab;
}
var blabLater = nonsense("closer");
var blabAgainLater = nonsense("closer1");

// =========================================
var lastNameTrier = function(firstName) {
  //does stuff

  var innerFunction = function(lastName) {
    console.log(firstName + " " + lastName);
    //does stuff
  };
  return innerFunction;
  //maybe returns something here
};
var firstNameFarmer = lastNameTrier("Farmer"); //logs nothing
firstNameFarmer("Brown"); //logs 'Farmer Brown'
firstNameFarmer("Jane"); //logs 'Farmer Jane'
firstNameFarmer("Lynne"); //logs 'Farmer Lynne'

// -==============================================
function storyWriter() {
  var str = "";
  // create a Object
  var twoMethods = {
    addWords: function story() {},
    erase: function myStory() {}
  };
}
