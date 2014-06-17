var resized;
var menu = document.getElementById("menu");

function refreshMenu() { 
  //   
  var width = window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

  if((width < 992) && !resized) {     
    while(menu.firstChild)
      menu.removeChild(menu.firstChild);

  mobileResize();
  resized = true;
}
if((width >= 992) && resized) {
    while(menu.firstChild)
      menu.removeChild(menu.firstChild);

  desktopResize();
  resized = false;
}
};

function firstLoad() {
  var innerWidth = window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

  if(innerWidth < 992) {
    resized = false;
  }
  else {
    resized = true;
  }

  refreshMenu();
};

function mobileResize() {
  //Chicken and Waffles generation
  hrCW = document.createElement("hr");
  hrCW.className = "featurette divider"; 

  rowfeaturettedivCW = document.createElement("div");
  rowfeaturettedivCW.className = "row featurette";
  col7divCW = document.createElement("div");
  col7divCW.className = "col-md-7";
  col5divCW = document.createElement("div");
  col5divCW.className = "col-md-5 nopadding";
  h2CW = document.createElement("h2");
  h2CW.className = "featurette-heading";
  h2CW.innerHTML = "Chicken & Waffles";
  pCW = document.createElement("p");
  pCW.className = "lead";
  pCW.innerHTML = "Crispy buttermilk battered fried chicken with waffles & syrup.";
  imgCW = document.createElement("img");
  imgCW.className = "featurette-image img-circle";
  imgCW.style.width = "200px";
  imgCW.style.height = "200px";
  imgCW.src = "images/chicken_waffles_square.jpg";
  imgCW.alt = "Chicken & Waffles";

  h2CW.appendChild(pCW);
  col7divCW.appendChild(h2CW);
  col5divCW.appendChild(imgCW);
  rowfeaturettedivCW.appendChild(col7divCW);
  rowfeaturettedivCW.appendChild(col5divCW);

  //BLT generation
  hrBLT = document.createElement("hr");
  hrBLT.className = "featurette divider"; 

  rowfeaturettedivBLT = document.createElement("div");
  rowfeaturettedivBLT.className = "row featurette";
  col7divBLT = document.createElement("div");
  col7divBLT.className = "col-md-7";
  col5divBLT = document.createElement("div");
  col5divBLT.className = "col-md-5 nopadding";
  h2BLT = document.createElement("h2");
  h2BLT.className = "featurette-heading";
  h2BLT.innerHTML = "Bacon, Lettuce, & Tomato";
  pBLT = document.createElement("p");
  pBLT.className = "lead";
  pBLT.innerHTML = "A waffle twist on the classic BLT sandwich. Served with mayo.";
  imgBLT = document.createElement("img");
  imgBLT.className = "featurette-image img-circle";
  imgBLT.style.width = "200px";
  imgBLT.style.height = "200px";
  imgBLT.src = "images/bacon_lettuce_tomato.jpg";
  imgBLT.alt = "Bacon, Lettuce, & Tomato";

  h2BLT.appendChild(pBLT);
  col7divBLT.appendChild(h2BLT);
  col5divBLT.appendChild(imgBLT);
  rowfeaturettedivBLT.appendChild(col7divBLT);
  rowfeaturettedivBLT.appendChild(col5divBLT);

  //CCSS generation
  hrCCSS = document.createElement("hr");
  hrCCSS.className = "featurette divider"; 

  rowfeaturettedivCCSS= document.createElement("div");
  rowfeaturettedivCCSS.className = "row featurette";
  col7divCCSS = document.createElement("div");
  col7divCCSS.className = "col-md-7";
  col5divCCSS = document.createElement("div");
  col5divCCSS.className = "col-md-5 nopadding";
  h2CCSS = document.createElement("h2");
  h2CCSS.className = "featurette-heading";
  h2CCSS.innerHTML = "Crispy Chicken Summer Salad";
  pCCSS = document.createElement("p");
  pCCSS.className = "lead";
  pCCSS.innerHTML = "A cool summer salad with lettuce, tomato, bacon, buttermilk battered fried chicken, & ranch served with a waffle.";
  imgCCSS = document.createElement("img");
  imgCCSS.className = "featurette-image img-circle";
  imgCCSS.style.width = "200px";
  imgCCSS.style.height = "200px";
  imgCCSS.src = "images/chicken_salad.jpg";
  imgCCSS.alt = "Crispy Chicken Summer Salad";

  h2CCSS.appendChild(pCCSS);
  col7divCCSS.appendChild(h2CCSS);
  col5divCCSS.appendChild(imgCCSS);
  rowfeaturettedivCCSS.appendChild(col7divCCSS);
  rowfeaturettedivCCSS.appendChild(col5divCCSS);

  //HTS generation
  hrHTS = document.createElement("hr");
  hrHTS.className = "featurette divider"; 

  rowfeaturettedivHTS = document.createElement("div");
  rowfeaturettedivHTS.className = "row featurette";
  col7divHTS = document.createElement("div");
  col7divHTS.className = "col-md-7";
  col5divHTS = document.createElement("div");
  col5divHTS.className = "col-md-5 nopadding";
  h2HTS = document.createElement("h2");
  h2HTS.className = "featurette-heading";
  h2HTS.innerHTML = "Ham, Turkey, & Swiss";
  pHTS = document.createElement("p");
  pHTS.className = "lead";
  pHTS.innerHTML = "A hot Monte Cristo sandwich served on a waffle with raspberry preserves.";
  imgHTS = document.createElement("img");
  imgHTS.className = "featurette-image img-circle";
  imgHTS.style.width = "200px";
  imgHTS.style.height = "200px";
  imgHTS.src = "images/ham_turkey_swiss.jpg";
  imgHTS.alt = "Ham, Turkey, & Swiss";

  h2HTS.appendChild(pHTS);
  col7divHTS.appendChild(h2HTS);
  col5divHTS.appendChild(imgHTS);
  rowfeaturettedivHTS.appendChild(col7divHTS);
  rowfeaturettedivHTS.appendChild(col5divHTS);

  //PBB generation
  hrPBB = document.createElement("hr");
  hrPBB.className = "featurette divider"; 

  rowfeaturettedivPBB = document.createElement("div");
  rowfeaturettedivPBB.className = "row featurette";
  col7divPBB = document.createElement("div");
  col7divPBB.className = "col-md-7";
  col5divPBB = document.createElement("div");
  col5divPBB.className = "col-md-5 nopadding";
  h2PBB = document.createElement("h2");
  h2PBB.className = "featurette-heading";
  h2PBB.innerHTML = "Peanut Butter, Bacon, & Banana";
  pPBB = document.createElement("p");
  pPBB.className = "lead";
  pPBB.innerHTML = "All served atop a crispy waffle.";
  imgPBB = document.createElement("img");
  imgPBB.className = "featurette-image img-circle";
  imgPBB.style.width = "200px";
  imgPBB.style.height = "200px";
  imgPBB.src = "images/peanutbutter_bacon_banana.jpg";
  imgPBB.alt = "Peanut Butter, Bacon, & Banana";

  h2PBB.appendChild(pPBB);
  col7divPBB.appendChild(h2PBB);
  col5divPBB.appendChild(imgPBB);
  rowfeaturettedivPBB.appendChild(col7divPBB);
  rowfeaturettedivPBB.appendChild(col5divPBB);

  //MB generation
  hrMB = document.createElement("hr");
  hrMB.className = "featurette divider"; 

  rowfeaturettedivMB = document.createElement("div");
  rowfeaturettedivMB.className = "row featurette";
  col7divMB = document.createElement("div");
  col7divMB.className = "col-md-7";
  col5divMB = document.createElement("div");
  col5divMB.className = "col-md-5 nopadding";
  h2MB = document.createElement("h2");
  h2MB.className = "featurette-heading";
  h2MB.innerHTML = "Mixed Berry";
  pMB = document.createElement("p");
  pMB.className = "lead";
  pMB.innerHTML = "Fresh raspberries, blackberries, & whipped cream.";
  imgMB = document.createElement("img");
  imgMB.className = "featurette-image img-circle";
  imgMB.style.width = "200px";
  imgMB.style.height = "200px";
  imgMB.src = "images/mixed_berries.jpg";
  imgMB.alt = "Mixed Berry";

  h2MB.appendChild(pMB);
  col7divMB.appendChild(h2MB);
  col5divMB.appendChild(imgMB);
  rowfeaturettedivMB.appendChild(col7divMB);
  rowfeaturettedivMB.appendChild(col5divMB);  

  //BW generation
  hrBW = document.createElement("hr");
  hrBW.className = "featurette divider"; 

  rowfeaturettedivBW = document.createElement("div");
  rowfeaturettedivBW.className = "row featurette";
  col7divBW = document.createElement("div");
  col7divBW.className = "col-md-7";
  col5divBW = document.createElement("div");
  col5divBW.className = "col-md-5 nopadding";
  h2BW = document.createElement("h2");
  h2BW.className = "featurette-heading";
  h2BW.innerHTML = "Breakfast Waffle";
  pBW = document.createElement("p");
  pBW.className = "lead";
  pBW.innerHTML = "Eggs, muenster cheese, & either ham, sausage, or bacon served with a waffle.";
  imgBW = document.createElement("img");
  imgBW.className = "featurette-image img-circle";
  imgBW.style.width = "200px";
  imgBW.style.height = "200px";
  imgBW.src = "images/breakfast.jpg";
  imgBW.alt = "Breakfast Waffle";

  h2BW.appendChild(pBW);
  col7divBW.appendChild(h2BW);
  col5divBW.appendChild(imgBW);
  rowfeaturettedivBW.appendChild(col7divBW);
  rowfeaturettedivBW.appendChild(col5divBW);  

  //SB generation
  hrSB = document.createElement("hr");
  hrSB.className = "featurette divider"; 

  rowfeaturettedivSB = document.createElement("div");
  rowfeaturettedivSB.className = "row featurette";
  col7divSB = document.createElement("div");
  col7divSB.className = "col-md-7";
  col5divSB = document.createElement("div");
  col5divSB.className = "col-md-5 nopadding";
  h2SB = document.createElement("h2");
  h2SB.className = "featurette-heading";
  h2SB.innerHTML = "Strawberries & Banana";
  pSB = document.createElement("p");
  pSB.className = "lead";
  pSB.innerHTML = "Fresh fruit & whipped cream on a crispy waffle.";
  imgSB = document.createElement("img");
  imgSB.className = "featurette-image img-circle";
  imgSB.style.width = "200px";
  imgSB.style.height = "200px";
  imgSB.src = "images/strawberry.jpg";
  imgSB.alt = "Strawberries & Banana";

  h2SB.appendChild(pSB);
  col7divSB.appendChild(h2SB);
  col5divSB.appendChild(imgSB);
  rowfeaturettedivSB.appendChild(col7divSB);
  rowfeaturettedivSB.appendChild(col5divSB);

  //CC generation
  hrCC = document.createElement("hr");
  hrCC.className = "featurette divider"; 

  rowfeaturettedivCC = document.createElement("div");
  rowfeaturettedivCC.className = "row featurette";
  col7divCC = document.createElement("div");
  col7divCC.className = "col-md-7";
  col5divCC = document.createElement("div");
  col5divCC.className = "col-md-5 nopadding";
  h2CC = document.createElement("h2");
  h2CC.className = "featurette-heading";
  h2CC.innerHTML = "Chocolate Chip";
  pCC = document.createElement("p");
  pCC.className = "lead";
  pCC.innerHTML = "Milk and white chocolate chips with whipped cream on a hot waffle.";
  imgCC = document.createElement("img");
  imgCC.className = "featurette-image img-circle";
  imgCC.style.width = "200px";
  imgCC.style.height = "200px";
  imgCC.src = "images/chocolate_chip.jpg";
  imgCC.alt = "Chocolate Chip";

  h2CC.appendChild(pCC);
  col7divCC.appendChild(h2CC);
  col5divCC.appendChild(imgCC);
  rowfeaturettedivCC.appendChild(col7divCC);
  rowfeaturettedivCC.appendChild(col5divCC);  

  //P generation
  hrP = document.createElement("hr");
  hrP.className = "featurette divider"; 

  rowfeaturettedivP = document.createElement("div");
  rowfeaturettedivP.className = "row featurette";
  col7divP = document.createElement("div");
  col7divP.className = "col-md-7";
  col5divP = document.createElement("div");
  col5divP.className = "col-md-5 nopadding";
  h2P = document.createElement("h2");
  h2P.className = "featurette-heading";
  h2P.innerHTML = "Plain";
  pP = document.createElement("p");
  pP.className = "lead";
  pP.innerHTML = "A plain, crispy waffle served with syrup.";
  imgP = document.createElement("img");
  imgP.className = "featurette-image img-circle";
  imgP.style.width = "200px";
  imgP.style.height = "200px";
  imgP.src = "images/plain.jpg";
  imgP.alt = "Plain";

  h2P.appendChild(pP);
  col7divP.appendChild(h2P);
  col5divP.appendChild(imgP);
  rowfeaturettedivP.appendChild(col7divP);
  rowfeaturettedivP.appendChild(col5divP);  

  //Generate final featurette divider
  hrEND = document.createElement("hr");
  hrEND.className = "featurette divider"; 

  menu.appendChild(hrCW);
  menu.appendChild(rowfeaturettedivCW);
  menu.appendChild(hrBLT);
  menu.appendChild(rowfeaturettedivBLT);
  menu.appendChild(hrCCSS);
  menu.appendChild(rowfeaturettedivCCSS);
  menu.appendChild(hrHTS);
  menu.appendChild(rowfeaturettedivHTS);
  menu.appendChild(hrPBB);
  menu.appendChild(rowfeaturettedivPBB);
  menu.appendChild(hrMB);
  menu.appendChild(rowfeaturettedivMB);
  menu.appendChild(hrBW);
  menu.appendChild(rowfeaturettedivBW);
  menu.appendChild(hrSB);
  menu.appendChild(rowfeaturettedivSB);
  menu.appendChild(hrCC);
  menu.appendChild(rowfeaturettedivCC);
  menu.appendChild(hrP);
  menu.appendChild(rowfeaturettedivP);
  menu.appendChild(hrEND);
};

function desktopResize() {
  //Chicken and Waffles generation
  hrCW = document.createElement("hr");
  hrCW.className = "featurette divider"; 

  rowfeaturettedivCW = document.createElement("div");
  rowfeaturettedivCW.className = "row featurette";
  col7divCW = document.createElement("div");
  col7divCW.className = "col-md-7";
  col5divCW = document.createElement("div");
  col5divCW.className = "col-md-5 nopadding";
  h2CW = document.createElement("h2");
  h2CW.className = "featurette-heading";
  h2CW.innerHTML = "Chicken & Waffles";
  pCW = document.createElement("p");
  pCW.className = "lead";
  pCW.innerHTML = "Crispy buttermilk battered fried chicken with waffles & syrup.";
  imgCW = document.createElement("img");
  imgCW.className = "featurette-image img-circle";
  imgCW.style.width = "200px";
  imgCW.style.height = "200px";
  imgCW.src = "images/chicken_waffles_square.jpg";
  imgCW.alt = "Chicken & Waffles";

  h2CW.appendChild(pCW);
  col7divCW.appendChild(h2CW);
  col5divCW.appendChild(imgCW);
  rowfeaturettedivCW.appendChild(col7divCW);
  rowfeaturettedivCW.appendChild(col5divCW);

  //BLT generation
  hrBLT = document.createElement("hr");
  hrBLT.className = "featurette divider"; 

  rowfeaturettedivBLT = document.createElement("div");
  rowfeaturettedivBLT.className = "row featurette";
  col7divBLT = document.createElement("div");
  col7divBLT.className = "col-md-7";
  col5divBLT = document.createElement("div");
  col5divBLT.className = "col-md-5 nopadding";
  h2BLT = document.createElement("h2");
  h2BLT.className = "featurette-heading";
  h2BLT.innerHTML = "Bacon, Lettuce, & Tomato";
  pBLT = document.createElement("p");
  pBLT.className = "lead";
  pBLT.innerHTML = "A waffle twist on the classic BLT sandwich. Served with mayo.";
  imgBLT = document.createElement("img");
  imgBLT.className = "featurette-image img-circle";
  imgBLT.style.width = "200px";
  imgBLT.style.height = "200px";
  imgBLT.src = "images/bacon_lettuce_tomato.jpg";
  imgBLT.alt = "Bacon, Lettuce, & Tomato";

  h2BLT.appendChild(pBLT);
  col7divBLT.appendChild(h2BLT);
  col5divBLT.appendChild(imgBLT);
  rowfeaturettedivBLT.appendChild(col5divBLT);
  rowfeaturettedivBLT.appendChild(col7divBLT);

  //CCSS generation
  hrCCSS = document.createElement("hr");
  hrCCSS.className = "featurette divider"; 

  rowfeaturettedivCCSS= document.createElement("div");
  rowfeaturettedivCCSS.className = "row featurette";
  col7divCCSS = document.createElement("div");
  col7divCCSS.className = "col-md-7";
  col5divCCSS = document.createElement("div");
  col5divCCSS.className = "col-md-5 nopadding";
  h2CCSS = document.createElement("h2");
  h2CCSS.className = "featurette-heading";
  h2CCSS.innerHTML = "Crispy Chicken Summer Salad";
  pCCSS = document.createElement("p");
  pCCSS.className = "lead";
  pCCSS.innerHTML = "A cool summer salad with lettuce, tomato, bacon, buttermilk battered fried chicken, & ranch served with a waffle.";
  imgCCSS = document.createElement("img");
  imgCCSS.className = "featurette-image img-circle";
  imgCCSS.style.width = "200px";
  imgCCSS.style.height = "200px";
  imgCCSS.src = "images/chicken_salad.jpg";
  imgCCSS.alt = "Crispy Chicken Summer Salad";

  h2CCSS.appendChild(pCCSS);
  col7divCCSS.appendChild(h2CCSS);
  col5divCCSS.appendChild(imgCCSS);
  rowfeaturettedivCCSS.appendChild(col7divCCSS);
  rowfeaturettedivCCSS.appendChild(col5divCCSS);

  //HTS generation
  hrHTS = document.createElement("hr");
  hrHTS.className = "featurette divider"; 

  rowfeaturettedivHTS = document.createElement("div");
  rowfeaturettedivHTS.className = "row featurette";
  col7divHTS = document.createElement("div");
  col7divHTS.className = "col-md-7";
  col5divHTS = document.createElement("div");
  col5divHTS.className = "col-md-5 nopadding";
  h2HTS = document.createElement("h2");
  h2HTS.className = "featurette-heading";
  h2HTS.innerHTML = "Ham, Turkey, & Swiss";
  pHTS = document.createElement("p");
  pHTS.className = "lead";
  pHTS.innerHTML = "A hot Monte Cristo sandwich served on a waffle with raspberry preserves.";
  imgHTS = document.createElement("img");
  imgHTS.className = "featurette-image img-circle";
  imgHTS.style.width = "200px";
  imgHTS.style.height = "200px";
  imgHTS.src = "images/ham_turkey_swiss.jpg";
  imgHTS.alt = "Ham, Turkey, & Swiss";

  h2HTS.appendChild(pHTS);
  col7divHTS.appendChild(h2HTS);
  col5divHTS.appendChild(imgHTS);
  rowfeaturettedivHTS.appendChild(col5divHTS);
  rowfeaturettedivHTS.appendChild(col7divHTS);

  //PBB generation
  hrPBB = document.createElement("hr");
  hrPBB.className = "featurette divider"; 

  rowfeaturettedivPBB = document.createElement("div");
  rowfeaturettedivPBB.className = "row featurette";
  col7divPBB = document.createElement("div");
  col7divPBB.className = "col-md-7";
  col5divPBB = document.createElement("div");
  col5divPBB.className = "col-md-5 nopadding";
  h2PBB = document.createElement("h2");
  h2PBB.className = "featurette-heading";
  h2PBB.innerHTML = "Peanut Butter, Bacon, & Banana";
  pPBB = document.createElement("p");
  pPBB.className = "lead";
  pPBB.innerHTML = "All served atop a crispy waffle.";
  imgPBB = document.createElement("img");
  imgPBB.className = "featurette-image img-circle";
  imgPBB.style.width = "200px";
  imgPBB.style.height = "200px";
  imgPBB.src = "images/peanutbutter_bacon_banana.jpg";
  imgPBB.alt = "Peanut Butter, Bacon, & Banana";

  h2PBB.appendChild(pPBB);
  col7divPBB.appendChild(h2PBB);
  col5divPBB.appendChild(imgPBB);
  rowfeaturettedivPBB.appendChild(col7divPBB);
  rowfeaturettedivPBB.appendChild(col5divPBB);

  //MB generation
  hrMB = document.createElement("hr");
  hrMB.className = "featurette divider"; 

  rowfeaturettedivMB = document.createElement("div");
  rowfeaturettedivMB.className = "row featurette";
  col7divMB = document.createElement("div");
  col7divMB.className = "col-md-7";
  col5divMB = document.createElement("div");
  col5divMB.className = "col-md-5 nopadding";
  h2MB = document.createElement("h2");
  h2MB.className = "featurette-heading";
  h2MB.innerHTML = "Mixed Berry";
  pMB = document.createElement("p");
  pMB.className = "lead";
  pMB.innerHTML = "Fresh raspberries, blackberries, & whipped cream.";
  imgMB = document.createElement("img");
  imgMB.className = "featurette-image img-circle";
  imgMB.style.width = "200px";
  imgMB.style.height = "200px";
  imgMB.src = "images/mixed_berries.jpg";
  imgMB.alt = "Mixed Berry";

  h2MB.appendChild(pMB);
  col7divMB.appendChild(h2MB);
  col5divMB.appendChild(imgMB);
  rowfeaturettedivMB.appendChild(col5divMB);
  rowfeaturettedivMB.appendChild(col7divMB);  

  //BW generation
  hrBW = document.createElement("hr");
  hrBW.className = "featurette divider"; 

  rowfeaturettedivBW = document.createElement("div");
  rowfeaturettedivBW.className = "row featurette";
  col7divBW = document.createElement("div");
  col7divBW.className = "col-md-7";
  col5divBW = document.createElement("div");
  col5divBW.className = "col-md-5 nopadding";
  h2BW = document.createElement("h2");
  h2BW.className = "featurette-heading";
  h2BW.innerHTML = "Breakfast Waffle";
  pBW = document.createElement("p");
  pBW.className = "lead";
  pBW.innerHTML = "Eggs, muenster cheese, & either ham, sausage, or bacon served with a waffle.";
  imgBW = document.createElement("img");
  imgBW.className = "featurette-image img-circle";
  imgBW.style.width = "200px";
  imgBW.style.height = "200px";
  imgBW.src = "images/breakfast.jpg";
  imgBW.alt = "Breakfast Waffle";

  h2BW.appendChild(pBW);
  col7divBW.appendChild(h2BW);
  col5divBW.appendChild(imgBW);
  rowfeaturettedivBW.appendChild(col7divBW);
  rowfeaturettedivBW.appendChild(col5divBW);  

  //SB generation
  hrSB = document.createElement("hr");
  hrSB.className = "featurette divider"; 

  rowfeaturettedivSB = document.createElement("div");
  rowfeaturettedivSB.className = "row featurette";
  col7divSB = document.createElement("div");
  col7divSB.className = "col-md-7";
  col5divSB = document.createElement("div");
  col5divSB.className = "col-md-5 nopadding";
  h2SB = document.createElement("h2");
  h2SB.className = "featurette-heading";
  h2SB.innerHTML = "Strawberries & Banana";
  pSB = document.createElement("p");
  pSB.className = "lead";
  pSB.innerHTML = "Fresh fruit & whipped cream on a crispy waffle.";
  imgSB = document.createElement("img");
  imgSB.className = "featurette-image img-circle";
  imgSB.style.width = "200px";
  imgSB.style.height = "200px";
  imgSB.src = "images/strawberry.jpg";
  imgSB.alt = "Strawberries & Banana";

  h2SB.appendChild(pSB);
  col7divSB.appendChild(h2SB);
  col5divSB.appendChild(imgSB);
  rowfeaturettedivSB.appendChild(col5divSB);
  rowfeaturettedivSB.appendChild(col7divSB);

  //CC generation
  hrCC = document.createElement("hr");
  hrCC.className = "featurette divider"; 

  rowfeaturettedivCC = document.createElement("div");
  rowfeaturettedivCC.className = "row featurette";
  col7divCC = document.createElement("div");
  col7divCC.className = "col-md-7";
  col5divCC = document.createElement("div");
  col5divCC.className = "col-md-5 nopadding";
  h2CC = document.createElement("h2");
  h2CC.className = "featurette-heading";
  h2CC.innerHTML = "Chocolate Chip";
  pCC = document.createElement("p");
  pCC.className = "lead";
  pCC.innerHTML = "Milk and white chocolate chips with whipped cream on a hot waffle.";
  imgCC = document.createElement("img");
  imgCC.className = "featurette-image img-circle";
  imgCC.style.width = "200px";
  imgCC.style.height = "200px";
  imgCC.src = "images/chocolate_chip.jpg";
  imgCC.alt = "Chocolate Chip";

  h2CC.appendChild(pCC);
  col7divCC.appendChild(h2CC);
  col5divCC.appendChild(imgCC);
  rowfeaturettedivCC.appendChild(col7divCC);
  rowfeaturettedivCC.appendChild(col5divCC);  


  //P generation
  hrP = document.createElement("hr");
  hrP.className = "featurette divider"; 

  rowfeaturettedivP = document.createElement("div");
  rowfeaturettedivP.className = "row featurette";
  col7divP = document.createElement("div");
  col7divP.className = "col-md-7";
  col5divP = document.createElement("div");
  col5divP.className = "col-md-5 nopadding";
  h2P = document.createElement("h2");
  h2P.className = "featurette-heading";
  h2P.innerHTML = "Plain";
  pP = document.createElement("p");
  pP.className = "lead";
  pP.innerHTML = "A plain, crispy waffle served with syrup.";
  imgP = document.createElement("img");
  imgP.className = "featurette-image img-circle";
  imgP.style.width = "200px";
  imgP.style.height = "200px";
  imgP.src = "images/plain.jpg";
  imgP.alt = "Plain";

  h2P.appendChild(pP);
  col7divP.appendChild(h2P);
  col5divP.appendChild(imgP);
  rowfeaturettedivP.appendChild(col5divP);
  rowfeaturettedivP.appendChild(col7divP);  

  //Generate final featurette divider
  hrEND = document.createElement("hr");
  hrEND.className = "featurette divider"; 

  menu.appendChild(hrCW);
  menu.appendChild(rowfeaturettedivCW);
  menu.appendChild(hrBLT);
  menu.appendChild(rowfeaturettedivBLT);
  menu.appendChild(hrCCSS);
  menu.appendChild(rowfeaturettedivCCSS);
  menu.appendChild(hrHTS);
  menu.appendChild(rowfeaturettedivHTS);
  menu.appendChild(hrPBB);
  menu.appendChild(rowfeaturettedivPBB);
  menu.appendChild(hrMB);
  menu.appendChild(rowfeaturettedivMB);
  menu.appendChild(hrBW);
  menu.appendChild(rowfeaturettedivBW);
  menu.appendChild(hrSB);
  menu.appendChild(rowfeaturettedivSB);
  menu.appendChild(hrCC);
  menu.appendChild(rowfeaturettedivCC);
  menu.appendChild(hrP);
  menu.appendChild(rowfeaturettedivP);
  menu.appendChild(hrEND);
};

window.onload = firstLoad;
window.onresize = refreshMenu;