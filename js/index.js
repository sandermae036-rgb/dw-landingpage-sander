// slå dig løs her... 


//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach(service => console.log(service.headline))

// element adders--------------------------------------------------------------

// section ----------------------
    function section (className) {
        let sectionElement = document.createElement("section");

        sectionElement.classList.add(className);
        
        return sectionElement
    }

// headlines ------------------
    function h1 (textContent) {
        let h1Element = document.createElement("h1");

        h1Element.textContent = textContent

        return h1Element;
    }

    function h2 (textContent) {
        let h2Element = document.createElement("h2");

        h2Element.textContent = textContent

        return h1Element;
    }

    function h3 (textContent) {
        let h3Element = document.createElement("h3");

        h3Element.textContent = textContent

        return h3Element
    }
    
    // paragraphs -----------------
    function p (textContent) {
        let pElement = document.createElement("p");

        pElement.textContent = textContent

        return pElement
    }

    // img -----------------------
    function img (src, alt) {
        let imgElement = document.createElement("img");

        imgElement.setAttribute("src", src);

        imgElement.setAttribute("alt", alt);

        return imgElement
    }

    // anchor tags ----------------------
    function a (textContent, link) {
        let aElement = document.createElement("a");

        aElement.textContent = textContent

        aElement.setAttribute("href", link);

        return aElement;
    }

    // button ------------------------
    function btn (className) {

        let buttonElement = document.createElement("button");

        buttonElement.classList.add(className);

        return buttonElement;
    }


// vraiables ---------------------------------------------------------------
    // find section hero and display in console for better overview
    const sHero = document.querySelector(".hero");
    console.log(sHero);
    

        // make <img> with src and alt

        sHero.append(img (hero.image, "woman working"));

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