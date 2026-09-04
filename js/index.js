// slå dig løs her... 


//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach(service => console.log(service.headline))

// element adders--------------------------------------------------------------

// section --------------------
    function section (a, b) {
        let sectionElement = document.createElement("section");

        sectionElement.innerHTML = a

        b.append(h1Element);
    }

// headlines ------------------
    function h1 (a, b) {
        let h1Element = document.createElement("h1");

        h1Element.textContent = a

        b.append(h1Element);
    }

    function h2 (a, b) {
        let h2Element = document.createElement("h2");

        h2Element.textContent = a

        b.append(h2Element);
    }

    function h3 (a, b) {
        let h3Element = document.createElement("h3");

        h3Element.textContent = a

        b.append(h3Element);
    }
    
    // paragraphs -----------------
    function p (a, b) {
        let pElement = document.createElement("p");

        pElement.textContent = a

        b.append(pElement);
    }

    // img -----------------------
    function img (a, b, c) {
        let imgElement = document.createElement("img");

        imgElement.setAttribute("src", a);

        imgElement.setAttribute("alt", b);

        c.append(imgElement);
    }

    // anchors ----------------------
    function a (a, b, c) {
        let aElement = document.createElement("a");

        aElement.textContent = a

        aElement.setAttribute("href", b);

        c.append(aElement);
    }

    // button ------------------------
    function btn (a, b) {

        let buttonElement = document.createElement("button");

        buttonElement.textContent = a

        b.append(buttonElement);
    }


// vraiables ---------------------------------------------------------------
    // find section hero and display in console for better overview
    const sHero = document.querySelector(".hero");
    console.log(sHero);
    

        // make <img> with src and alt

        // make <h1>

        // make dummy txt in a <p> element


        // make a button with

            // insert the icon <img>

            // insert <p> with thext explore 


    // find section services an display in console ---------------------------------
    const sServices = document.querySelector(".services");
    console.log(sServices);
    

        // make a for each that does this with every object in the array



            // insert img


            // insert h3 with txt


            //  insert paragraph with dummy txt


            // insert <a> with txt



    // find fascilities and display in console ------------------------------------
    const sFacilities = document.querySelector(".facilities");
        console.log(sFacilities);
        
    
        // display h2
        
        
        // make an array for each object in the array

            // insert img


            // insert h3 with txt


            // insert paragraph with txt

        
    // find sites and display in console ----------------------------------------------
    const sSites = document.querySelector(".sites");
console.log(sSites);

        // insert h2 with txt


        // insert paragraph with txt


        // insert button

            // insert icon

            // insert paragraph with txt


        // insert section and display with log for better view

            // make foreach object in the array = places

                // insert img

                // insert paragraph with name as txt

                // paragraph with city name

    // find advantages and display in console ------------------------------------------
    const sAdvantages = document.querySelector(".advantages");
    console.log(sAdvantages);
    
    
        // make a h2 with txt Our Advantages 

        // make foreach object in the array 

            // insert icon (img) 

            // insert h3 with headline

            // insert paragraph with text 









// functions ----------------------------------------------------------