// slå dig løs her... 


//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach(service => console.log(service.headline))

// element adders--------------------------------------------------------------

// ul and li elements ------------------------

function ul(className) {
    let ulElement = document.createElement("ul");

    ulElement.classList.add(className);

    return ulElement
}

function li() {
    let liElement = document.createElement("li");

    return liElement
}


// section and articles ----------------------
function article(className) {
    let articleElement = document.createElement("article");

    articleElement.classList.add(className);

    return articleElement
}

function section(className) {
    let sectionElement = document.createElement("section");

    sectionElement.classList.add(className);

    return sectionElement
}

// headlines ------------------
function h1(textContent) {
    let h1Element = document.createElement("h1");

    h1Element.textContent = textContent

    return h1Element;
}

function h2(textContent) {
    let h2Element = document.createElement("h2");

    h2Element.textContent = textContent

    return h2Element;
}

function h3(textContent) {
    let h3Element = document.createElement("h3");

    h3Element.textContent = textContent

    return h3Element
}

// paragraphs -----------------
function p(textContent) {
    let pElement = document.createElement("p");

    pElement.textContent = textContent

    return pElement
}

// img -----------------------
function img(src, alt) {
    let imgElement = document.createElement("img");

    imgElement.setAttribute("src", src);

    imgElement.setAttribute("alt", alt);

    return imgElement
}

// anchor tags ----------------------
function a(textContent, link) {
    let aElement = document.createElement("a");

    aElement.textContent = textContent

    aElement.setAttribute("href", link);

    return aElement;
}

// button ------------------------
function btn(className) {

    let buttonElement = document.createElement("button");

    buttonElement.classList.add(className);

    return buttonElement;
}


// vraiables ---------------------------------------------------------------
// find section hero and display in console for better overview
const sHero = document.querySelector(".hero");
console.log(sHero);


// make <img> with src and alt

sHero.append(img(hero.image, "woman working"));

// make a section
sHero.append(section("herotxtbox"));
let herotxtbox = document.querySelector(".herotxtbox");

// make <h1>
herotxtbox.append(h1(hero.headline));

// make dummy txt in a <p> element
herotxtbox.append(p(hero.copy));


// make a button with
herotxtbox.append(btn("herobtn"));
let herobtn = document.querySelector(".herobtn");
// insert the icon <img>
herobtn.append(img(hero.icon, "netlify"));

// insert <p> with thext explore 
herobtn.append(p("Explore"));





// find section services an display in console ---------------------------------
const sServices = document.querySelector(".services");
console.log(sServices);


// make a for each that does this with every object in the array
services.forEach(function (service) {

    // make a section
    let serviceElement = article("serviceSection");

    // insert img
    serviceElement.append(img(service.illustration, "icon"));


    // insert h3 with txt
    serviceElement.append(h3(service.headline));


    //  insert paragraph with dummy txt
    serviceElement.append(p(service.text));


    // insert <a> with txt
    serviceElement.append(a(service.linktext, "#"))

    sServices.append(serviceElement);
});



// find fascilities and display in console ------------------------------------
const sFacilities = document.querySelector(".facilities");
console.log(sFacilities);


// display h2
sFacilities.append(h2(facilities.headline));


// make an foreach facilite options
facilities.options.forEach(option => {

    // make section
    let faciliteElement = article("facilitieSection");

    // insert img
    faciliteElement.append(img(option.icon, "icon"));


    // insert h3 with txt
    faciliteElement.append(h3(option.headline));


    // insert paragraph with txt
    faciliteElement.append(p(option.text));


    sFacilities.append(faciliteElement);
});


// find sites and display in console ----------------------------------------------
const sSites = document.querySelector(".sites");
console.log(sSites);

// insert h2 with txt
sSites.append(h2(sites.headline));


// insert paragraph with txt
sSites.append(p(sites.text));


// insert button
let sSitesBtn = btn("sitesMainBtn");

// insert icon
sSitesBtn.append(img(sites.btnicon, "btn icon"));

// insert paragraph with txt
sSitesBtn.append(p("button here"));

sSites.append(sSitesBtn);


// insert section
let sSiteSection = section("siteSection");

// make foreach object in the array
sites.places.forEach(function (place) {

    // make article
    let sSitesArticle = article("siteArticle");

    // insert img
    sSitesArticle.append(img(place.img, place.name));

    // insert h3 with name as txt
    sSitesArticle.append(h3(place.name));

    // paragraph with city name
    sSitesArticle.append(p(place.city));


    sSiteSection.append(sSitesArticle);

});

sSites.append(sSiteSection);




// find advantages and display in console ------------------------------------------
const sAdvantages = document.querySelector(".advantages");
console.log(sAdvantages);


// make a h2 with txt Our Advantages
sAdvantages.append(h2("Our Advantages"))

let advHeadSection = section("advHeadSection");

// make foreach object in the array 
advantages.forEach(function (advantage) {

    // make an article
    let advUnderSection = section("advUnderSection");

    // insert icon (img) 
    advUnderSection.append(img(advantage.icon, "icon"));

    // insert h3 with headline
    advUnderSection.append(h3(advantage.headline));

    // insert paragraph with text 
    advUnderSection.append(p(advantage.text));

    advHeadSection.append(advUnderSection)
});

sAdvantages.append(advHeadSection);


// find footer with .log and display in dom
let footer = document.querySelector(".footer")
console.log(footer);

// insert paragraph with text
footer.append(p(dataFooter.text));

// insert h2 with headline
footer.append(h2(dataFooter.headline));

// make a foreach utilityOption object inside the ul
dataFooter.utilityOptions.forEach(function (utilitySetting) {

    // insert ul
    let footerMainUl = ul("footerMainUl");

    // make a forEach object inside the utility
    utilitySetting.utility.forEach(function (utilitys) {


        // make a li
        let listItm = li();

        // make a paragraph with headline
        listItm.append(p(utilitys.text));

        footerMainUl.append(listItm);

    });

    footer.append(footerMainUl);
});


// make a new section
let footerUnderSection = section("footerUnderSection");

// make a paragraph wiith rights
footerUnderSection.append(p(dataFooter.rights));

// make a ul element 
let footerScndUl = ul("scndUl");

dataFooter.navigation.forEach(function (nav) {

    // make li elements
    let listItm2 = li();

    // make a paragraph with the
    listItm2.append(nav.text);

    footerScndUl.append(listItm2);
});

    footerUnderSection.append(footerScndUl);

footer.append(footerUnderSection);