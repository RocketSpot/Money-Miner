// devtools.opened will become true if/when the console is opened
//TODO: Icons for all, names for all
//TODO: Stop research
//TODO: Fix research 3 and 4
//TODO: Finish save

//Variables
var name = localStorage.getItem('name');
var currency = localStorage.getItem('currency');
var industry = localStorage.getItem('industry');
var money = 0;
var moneyPerSecond = 5;
var satisfaction = 100;
var fans = 1;

var cpsperlevel = 1;

var level = 1;
var level1 = 1;
var level2 = 1;
var level3 = 1;
var level4 = 1;

var lvl1cps = 1;
var lvl2cps = 1;
var lvl3cps = 1;
var lvl4cps = 1;

var upgrade = 50;
var upgrade1 = 50;
var upgrade2 = 50;
var upgrade3 = 50;
var upgrade4 = 50;
var upgrade5 = 50;
var upgrade6 = 50;

var monthlybonus = 50;

// TO ARRAY!!!
var month1earnings = 0;
var month2earnings = 0;
var month3earnings = 0;
var month4earnings = 0;
var month5earnings = 0;
var month6earnings = 0;
var month7earnings = 0;
var month8earnings = 0;
var month9earnings = 0;
var month10earnings = 0;
var month11earnings = 0;
var month12earnings = 0;
var month13earnings = 0;
var month14earnings = 0;
var month15earnings = 0;
var month16earnings = 0;
var month17earnings = 0;
var month18earnings = 0;
var month19earnings = 0;
var month20earnings = 0;
var month21earnings = 0;
var month22earnings = 0;
var month23earnings = 0;
var month24earnings = 0;

var currentmonth = 1;
//Declare
var dividedmoney;
var researchmoney;
var researchlevel1;
var researchlevel2;
var researchlevel3;
var prefix;
var divide;
//MODAL
// Get the modal
var modal = document.getElementById('myModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Init currencies
if (currency == "usd"){
  var prefix = "&dollar;";
  var divide = 1;
}
else if (currency == "gbp"){
  var prefix = "&pound;"
  var divide = 1;
}
else if (currency == "btc"){
 // var prefix = "&#8383;"
   //var divide = 4000;
   var prefix = "&dollar;";
  var divide = 1;
}
else{
  currency = "usd";
  var prefix = "&dollar;";
  var divide = 1;
}

//Init industry names
if (industry == "tech"){
  var industryname = "Tech";
}
else if (industry == "tpt"){
  var industryname = "Transport";
}
else if (industry == "fd"){
  var industryname = "Food";
}
else{
  var industry = "tech";
  var industryname = "Tech";
}

function changeCurrency(){
  var x = document.getElementById("currencyfield").value;
  if(x == "btc"){
    if(currency == "btc"){
    }
    else{
      currency = "btc";
      prefix = "&#8383;"
      divide = 4000;
      dividedmoney = dividedmoney/4000;
    } 
  }
  else if(x == "usd"){
    if(currency == "btc"){
      prefix = "&dollar;";
      dividedmoney = dividedmoney * 4000;
      divide = 1;
      currency = "usd";
    }
    else{
      prefix = "&dollar;";
    }
  }
else{
  if(currency == "btc"){
    prefix = "&pound;";
    dividedmoney = dividedmoney * 4000;
    divide = 1;
    currency = "gbp";
  }
  else{
    prefix = "&pound;";
  }
}
}

function changeName(val){
  name = val;
 document.getElementById("name").innerHTML = name;
}

function changeNavbar(){
  var color = document.getElementById("navbarcolor").value;
  if(color == "drk"){
    document.getElementById('navbar').className = "navbar navbar-expand-lg navbar-dark bg-dark";
  }
  else if(color == "lgt"){
    document.getElementById('navbar').className = "navbar navbar-expand-lg navbar-light bg-light";
  }
  else{
    document.getElementById('navbar').className = "navbar navbar-expand-lg navbar-dark bg-primary";
  }
}

function changeBG(){
  var color = document.getElementById("bgcolor").value;
  if(color == "drk"){
    document.body.style.backgroundColor = "black";
    document.getElementById("body").style.color = "#ffffff";
  }
  else if(color == "lgt"){
    document.body.style.backgroundColor = "white";
    document.getElementById("body").style.color = "#000000";
  }
}

//Update money
window.setInterval(function(){
  money = moneyPerSecond + money;
  //localStorage.setItem('money', money);
}, 1000);

//Update fans
window.setInterval(function(){
  fans = fans + Math.floor(Math.random() * 10 + 1);
}, 5000);

//VERY RARELY update satisfaction
window.setInterval(function(){
  randint = Math.floor(Math.random() * 10 + 1);
  if(satisfaction < 100){
    if (randint == 1){
      satisfaction = satisfaction + 1;
    }
  }
}, 20000);

window.setInterval(function(){
  randint = Math.floor(Math.random() * 30 + 1);
  if (randint == 1){
    createmodal("Oh no!", "Someone found a problem with one of your products, so you had to recall it. You lost 10 satisfaction and " + prefix + 100/divide + "!");
    satisfaction = satisfaction - 10;
    money = money - 100;
  }
  else if (randint == 2){
    createmodal("Good review!","One of your products recieved a good review from a famous YouTuber. You gained 1000 fans and " + prefix + 100/divide + "!");
    fans = fans + 1000;
    dividedmoney = dividedmoney + 100/divide;
  }
  else if (randint == 3){
    if (industry == "tech"){
      createmodal("Product malfunction!","The battery in one of your products exploded and injured a customer. You were fined " + prefix + dividedmoney/4 + "!");
      dividedmoney = dividedmoney - dividedmoney/4;
    }
    else if(industry == "tpt"){
      createmodal("Billing error!","You accidentally undercharged customers for car rental services. You lost " + prefix + dividedmoney/8 + "!");
      dividedmoney = dividedmoney - dividedmoney/8;
    }
    else{
      createmodal("Food poisoning!", "Over 100 people who dined at your Restaurant got food poisoning and you were fined " + prefix + dividedmoney/8 + "!");
      dividedmoney = dividedmoney - dividedmoney/8;
    }
  }
  else if (randint == 4){
    if (industry == "tech"){
      createmodal("Product malfunction!","The battery in one of your products exploded and injured a customer. You were fined " + prefix + dividedmoney/4 + "!");
      dividedmoney = dividedmoney - dividedmoney/4;
    }
    else if(industry == "tpt"){
      createmodal("Billing error!","You accidentally undercharged customers for car rental services. You lost " + prefix + dividedmoney/8 + "!");
      dividedmoney = dividedmoney - dividedmoney/8;
    }
    else{
      createmodal("Food unsafe!", "Your food contains ingredients that are unsafe. You have been forced to change them. This cost you " + prefix + dividedmoney/4 + "!");
      dividedmoney = dividedmoney - dividedmoney/4;
    }
  }
}, 20000)

//Init special content
window.onload = function() {
  document.getElementById("loading").remove();
  var products = document.getElementById("products");
  var settings = document.getElementById("settings");
  var graphs = document.getElementById("graphs");
  settings.style.display = "none";
  graphs.style.display = "none";
  products.style.display = "inline";
  //START GAME!

    /*if (localStorage.getItem("money") === null){
      return;
    }
    else{
      money = localStorage.getItem("money");
    }*/

  requestAnimationFrame(mainLoop);
  var upgradecost = upgrade / divide;
  document.getElementById("name").innerHTML = name;
  document.getElementById("namefield").value = name;

var mySelect = document.getElementById('currencyfield');

for(var i, j = 0; i = mySelect.options[j]; j++) {
  if(i.value == currency) {
    mySelect.selectedIndex = j;
    break;
  }
}
if (industry == "tech"){
  document.getElementById("phoneicon").style.display = "inline";
  document.getElementById("keyicon").style.display = "none";
  document.getElementById("utensil").style.display = "none";

  document.getElementById("tableticon").style.display = "inline";
  document.getElementById("caricon").style.display = "none";
  document.getElementById("cateringicon").style.display = "none";

  document.getElementById("computericon").style.display = "inline";
  document.getElementById("trainicon").style.display = "none";
  document.getElementById("blogicon").style.display = "none";

  document.getElementById("speakericon").style.display = "inline";
  document.getElementById("electricicon").style.display = "none";
  document.getElementById("delivericon").style.display = "none";

  document.getElementById("product1").innerHTML = "Smartphones";
  document.getElementById("product2").innerHTML = "Tablet";
  document.getElementById("product3").innerHTML = "Computers";
  document.getElementById("product4").innerHTML = "Smart Speakers";

  document.getElementById("model").innerHTML = "Release new model (" + prefix + upgradecost + ")";
  //Research TODO: Currencies:
  document.getElementById("research1").innerHTML = "Tablets ($1,000)";
  document.getElementById("research2").innerHTML = "Computers ($1,500)";
  document.getElementById("research3").innerHTML = "Smart speakers ($2,000)";
  document.getElementById("myImg").src = "techlogo.png"; 
}
if (industry == "tpt"){
  document.getElementById("phoneicon").style.display = "none";
  document.getElementById("keyicon").style.display = "inline";
  document.getElementById("utensil").style.display = "none";

  document.getElementById("tableticon").style.display = "none";
  document.getElementById("caricon").style.display = "inline";
  document.getElementById("cateringicon").style.display = "none";

  document.getElementById("computericon").style.display = "none";
  document.getElementById("trainicon").style.display = "inline";
  document.getElementById("blogicon").style.display = "none";

  document.getElementById("speakericon").style.display = "none";
  document.getElementById("electricicon").style.display = "inline";
  document.getElementById("delivericon").style.display = "none";

  document.getElementById("product1").innerHTML = "Car rental";
  document.getElementById("product2").innerHTML = "Car manufacturing";
  document.getElementById("product3").innerHTML = "Train company";
  document.getElementById("product4").innerHTML = "Electric vehicles";

  document.getElementById("model").innerHTML = "Buy new car fleet ("  + prefix + upgradecost + ")";
  //Research TODO: Currencies
  document.getElementById("research1").innerHTML = "Car manufacturing ("+ prefix + 1000/divide +")";
  document.getElementById("research2").innerHTML = "Train company ("+ prefix + 1500/divide +")";
  document.getElementById("research3").innerHTML = "Electric vehicles ("+ prefix + 2000/divide +")";
  document.getElementById("myImg").src = "carlogo.png"; 
}
if (industry == "fd"){
  document.getElementById("phoneicon").style.display = "none";
  document.getElementById("keyicon").style.display = "none";
  document.getElementById("utensil").style.display = "inline";

  document.getElementById("tableticon").style.display = "none";
  document.getElementById("caricon").style.display = "none";
  document.getElementById("cateringicon").style.display = "inline";

  document.getElementById("computericon").style.display = "none";
  document.getElementById("trainicon").style.display = "none";
  document.getElementById("blogicon").style.display = "inline";

  document.getElementById("speakericon").style.display = "none";
  document.getElementById("electricicon").style.display = "none";
  document.getElementById("delivericon").style.display = "inline";

  document.getElementById("product1").innerHTML = "Restaurant";
  document.getElementById("product2").innerHTML = "Catering";
  document.getElementById("product3").innerHTML = "Recipe blog";
  document.getElementById("product4").innerHTML = "Food delivery";

document.getElementById("model").innerHTML = "Hire New Chef ("  + prefix + upgradecost +  ")";
  //Research TODO: Currencies:
  document.getElementById("research1").innerHTML = "Catering (" + prefix + 1000/divide + ")";
  document.getElementById("research2").innerHTML = "Recipe blog ("+ prefix + 1500/divide +")";
  document.getElementById("research3").innerHTML = "Food delivery (" + prefix + 2000/divide + ")";
  document.getElementById("myImg").src = "foodlogo.png"; 
}
  //CONTAINERS
  document.getElementById("container1").style.visibility = "visible";
  document.getElementById("container2").style.visibility = "hidden";
  document.getElementById("container3").style.visibility = "hidden";
  document.getElementById("container4").style.visibility = "hidden";
}

function researchfunc(){
  research = $('#research').val();
  if (research == 1){
    if(dividedmoney > 1000/divide){
      if(researchlevel1 == 1){

      }
      else{
      money = dividedmoney - 1000/divide;
      document.getElementById("container2").style.visibility = "visible";
      researchlevel1 = 1;
      function myFunction() {
      var x = document.getElementById("research").options[1].disabled = true;
      }
}
    }
    else{
      moneymodal();
    }
  }

  else if (research == 2){
    if(dividedmoney > 1500/divide){
      money = dividedmoney - 1500/divide;
      document.getElementById("container3").style.visibility = "visible";
      researchlevel2 = 1;
      var x = document.getElementById("research").options[2].disabled = true;
    }
    else{
      moneymodal();
    }
  }

  else if (research == 3){
    if(dividedmoney > 1500/divide){
    money = dividedmoney - 1500/divide;
    document.getElementById("container4").style.visibility = "visible";
      researchlevel3 = 1;
      var x = document.getElementById("research").options[3].disabled = true;
  }
    else{
      moneymodal();
    }
  }
  
  else{
    researchmodal();
  }
}

function createmodal(text, text2){
  document.getElementById('myModal').style.display='block'
  document.getElementById("header").innerHTML = text
  document.getElementById("modal-body").innerHTML = text2 
}


function moneymodal(){
  document.getElementById('myModal').style.display='block'
  document.getElementById("header").innerHTML = "Not enough money!"
  document.getElementById("modal-body").innerHTML = "You need more money to buy this!"
}

function researchmodal(){
  document.getElementById('myModal').style.display='block'
  document.getElementById("header").innerHTML = "Select something to research!"
  document.getElementById("modal-body").innerHTML = "You need to choose something to research!"
}

function closeModal(){
  document.getElementById('myModal').style.display='none'
}

function products(){
  var products = document.getElementById("products");
  var settings = document.getElementById("settings");
  var graphs = document.getElementById("graphs");
  settings.style.display = "none";
  graphs.style.display = "none";
  products.style.display = "inline";
  document.getElementById('productsNav').className = "nav-item active";
  document.getElementById('settingsNav').className = "nav-item";
  document.getElementById('graphsNav').className = "nav-item";
}

function settings(){
  var products = document.getElementById("products");
  var settings = document.getElementById("settings");
  var graphs = document.getElementById("graphs");
  settings.style.display = "inline";
  graphs.style.display = "none";
  products.style.display = "none";
  document.getElementById('productsNav').className = "nav-item";
  document.getElementById('settingsNav').className = "nav-item active";
  document.getElementById('graphsNav').className = "nav-item";
}

function graphs(){
  var products = document.getElementById("products");
  var settings = document.getElementById("settings");
  var graphs = document.getElementById("graphs");
  settings.style.display = "none";
  graphs.style.display = "inline";
  products.style.display = "none";
   drawChart();
      document.getElementById("month").innerHTML = "Current month: " + currentmonth;
  document.getElementById('productsNav').className = "nav-item";
  document.getElementById('settingsNav').className = "nav-item";
  document.getElementById('graphsNav').className = "nav-item active";
}

//Monthly bonus
window.setInterval(function(){
  monthlybonus = satisfaction*2 + fans/2 - 50;
  createmodal("Monthly Bonus!", "You got " + prefix + monthlybonus/divide + " in month " + currentmonth + ".");
  money = money + monthlybonus/divide;
  if (currentmonth == 1){
    currentmonth = currentmonth + 1;
  }
  else if (currentmonth == 2){
    currentmonth = currentmonth + 1;
  }
  else if (currentmonth == 3){
    currentmonth = currentmonth + 1;
  }
  else if (currentmonth == 4){
    currentmonth = currentmonth + 1;
  }
}, 120000);

function raiseprice(){
    moneyPerSecond = moneyPerSecond + 4/divide;
    satislose = Math.floor(Math.random() * 10 + 1);
    if (satisfaction > satislose){
        satisfaction = satisfaction - satislose;
    }
    else{
      createmodal("Customers too unhappy", "You can't raise your prices any higher because your customers are already very unhappy.");
      return;
    }
    fanlose = Math.floor(Math.random() * 10 + 1);
    if (fanlose > fans){
      fans = fans - fanlose;
    }
    else{
      fans = 1;
    }

    if (fans < 1){
      fans = 1;
    }
    createmodal("Price raised", "Price has been raised. You lost " + fanlose + " fans and " + satislose + " satisfaction. You gained an extra " + prefix + 4/divide + "/s");
}

//FIXED
function newmodel(){
  if (dividedmoney > upgrade/divide - 1){
    money = dividedmoney - upgrade/divide;
    moneyleft = dividedmoney - upgrade/divide;
    createmodal("Upgraded!", "It cost you " + prefix + upgrade/divide + " so you have " + prefix + moneyleft + " left!");
    level = level + 1;
    moneyPerSecond = moneyPerSecond + cpsperlevel;
    upgrade = upgrade + 25;
  }
  else{
    moneymodal();
  }
}
function newmodel1(){
    if (dividedmoney > upgrade1/divide - 1){
    money = dividedmoney - upgrade1/divide;
    moneyleft = dividedmoney - upgrade1/divide;
    createmodal("Upgraded!", "It cost you " + prefix + upgrade1/divide + " so you have " + prefix + moneyleft + " left!");
    level1 = level1 + 1;
    moneyPerSecond = moneyPerSecond + cpsperlevel;
    upgrade1 = upgrade1 + 25;
  }
  else{
    moneymodal()
  }
}
function newmodel2(){
    if (dividedmoney > upgrade2/divide - 1){
    money = dividedmoney - upgrade2/divide;
    moneyleft = dividedmoney - upgrade2/divide;
    createmodal("Upgraded!", "It cost you " + prefix + upgrade2/divide + " so you have " + prefix + moneyleft + " left!");
    level2 = level2 + 1;
    moneyPerSecond = moneyPerSecond + cpsperlevel;
    upgrade2 = upgrade2 + 25;
  }
  else{
    moneymodal()
  }
}
function newmodel3(){
    if (dividedmoney > upgrade3/divide - 1){
    money = dividedmoney - upgrade3/divide;
    moneyleft = dividedmoney - upgrade3/divide;
    createmodal("Upgraded!", "It cost you " + prefix + upgrade3/divide + " so you have " + prefix + moneyleft + " left!");
    level3 = level3 + 1;
    moneyPerSecond = moneyPerSecond + cpsperlevel;
    upgrade3 = upgrade3 + 25;
  }
  else{
    moneymodal()
  }
}



function mainLoop(){
    update();
    requestAnimationFrame(mainLoop);
}

//Update Values
function update(){
  if (dividedmoney > 1000000000000/divide){
    createmodal("You win!", "You have reached " + prefix + dividedmoney + "! If you want, you can carry on playing by clicking the close button on this popup.")
  }
  if(dividedmoney < 0){
    money = 0;
    dividedmoney = 0;
  }
  lvl1cps = level * cpsperlevel;
  lvl2cps = level1 * cpsperlevel;
  lvl3cps = level2 * cpsperlevel;
  lvl4cps = level3 * cpsperlevel;
  document.getElementById("fans").innerHTML = '<i class="fas fa-user"></i>' + "  " + fans;
  document.getElementById("satisfaction").innerHTML = '<i class="fas fa-smile"></i>' + "  " + satisfaction;
  document.getElementById("lvl").innerHTML = "Level " + level + " / " + prefix + lvl1cps / divide + "/s";
  document.getElementById("lvl2").innerHTML = "Level " + level1 + " / " + prefix + lvl2cps / divide + "/s";
  document.getElementById("lvl3").innerHTML = "Level " + level2 + " / " + prefix + lvl3cps / divide + "/s";
  document.getElementById("lvl4").innerHTML = "Level " + level3 + " / " + prefix + lvl4cps / divide + "/s";
  document.getElementById("cps").innerHTML = prefix + moneyPerSecond/divide + "/s";
  if (industry == "tech"){
    document.getElementById("model").innerHTML = "Release new model (" + prefix + upgrade / divide + ")";
  document.getElementById("model2").innerHTML = "Release new model (" + prefix + upgrade1 / divide + ")";
  document.getElementById("model3").innerHTML = "Release new model (" + prefix + upgrade2 / divide + ")";
  document.getElementById("model4").innerHTML = "Release new model (" + prefix + upgrade3 / divide + ")";
  }
  else if(industry == "tpt"){
    document.getElementById("model").innerHTML = "Buy new car fleet (" + prefix + upgrade / divide + ")";
  document.getElementById("model2").innerHTML = "Release new model (" + prefix + upgrade1 / divide + ")";
  document.getElementById("model3").innerHTML = "Buy new train (" + prefix + upgrade2 / divide + ")";
  document.getElementById("model4").innerHTML = "Upgrade batteries (" + prefix + upgrade3 / divide + ")";
  }
  else{
    document.getElementById("model").innerHTML = "Hire new chef (" + prefix + upgrade / divide + ")";
  document.getElementById("model2").innerHTML = "New menu (" + prefix + upgrade1 / divide + ")";
  document.getElementById("model3").innerHTML = "Post new recipe (" + prefix + upgrade2 / divide + ")";
  document.getElementById("model4").innerHTML = "Offer new cuisine (" + prefix + upgrade3 / divide + ")";
  }
  document.getElementById("rise").innerHTML = "Raise price (+" + prefix + 4/divide + "/s, -satisfaction)";
  if (money == 0){
    dividedmoney = 0;
  }
  else{
    dividedmoney = money / divide;
    if(currentmonth == 1){
      month1earnings = dividedmoney;
    }
    else if(currentmonth == 2){
      month2earnings = dividedmoney - month1earnings;
    }
    else if(currentmonth == 3){
      month3earnings = dividedmoney - month2earnings - month1earnings;
    }
    else if(currentmonth == 4){
      month4earnings = dividedmoney - month1earnings - month2earnings -month3earnings;
    }
    else if(currentmonth == 5){
      month1earnings = dividedmoney - month1earnings - month2earnings -month3earnings - month4earnings;
    }
    else if(currentmonth == 6){
      month2earnings = dividedmoney - month1earnings - month2earnings -month3earnings - month4earnings - month5earnings;
    }
    else if(currentmonth == 7){
      month3earnings = dividedmoney - month1earnings - month2earnings -month3earnings - month4earnings - month5earnings - month6earnings;
    }
    else if(currentmonth == 8){
      month4earnings = dividedmoney - month1earnings - month2earnings -month3earnings - month4earnings - month5earnings - month6earnings - month7earnings;
    }
    else if(currentmonth == 9){
      month1earnings = dividedmoney - month1earnings - month2earnings -month3earnings - month4earnings - month5earnings - month6earnings - month7earnings - month8earnings;
    }
    else if(currentmonth == 10){
      month2earnings = dividedmoney - month1earnings - month2earnings -month3earnings - month4earnings - month5earnings - month6earnings - month7earnings - month8earnings - month9earnings;
    }
    else if(currentmonth == 11){
      month3earnings = dividedmoney - month1earnings - month2earnings -month3earnings - month4earnings - month5earnings - month6earnings - month7earnings - month8earnings - month9earnings - month10earnings;
    }
    else if(currentmonth == 12){
      month4earnings = dividedmoney - month1earnings - month2earnings -month3earnings - month4earnings - month5earnings - month6earnings - month7earnings - month8earnings - month9earnings - month10earnings - month11earnings;
    }
  }
    if(currency == "btc"){
      var finalmoney = prefix + dividedmoney.toString();
    }
    else{
        var finalmoney = prefix + dividedmoney.toFixed(2).toString();
    }
    var element = document.getElementById("money");
    if(typeof(element) != 'undefined' && element != null){
        document.getElementById("money").innerHTML = finalmoney;
    } else{
        
    }
    
}