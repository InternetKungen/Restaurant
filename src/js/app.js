
const menuDropdown = document.querySelector('menu');
const menuButton = document.querySelector('.menu-button');




//Dropdown meny - 
let sectionContent = document.querySelectorAll('.section-content');
let linksMenu = document.querySelectorAll('.a-menu');

for(let i = 0; i < linksMenu.length; i++){
    linksMenu[i].addEventListener('click', () => {

        
        // for(let j = 0; j < linksMenu.length; j++){
        //     if(linksMenu[i] === linksMenu[j]){
        //         sectionContent[j].classList.remove('hide');
        //     } else{
        //         sectionContent[j].classList.add('hide');
        //     }
            
        // }

        // Stäng menyn
        menuDropdown.classList.toggle("menu-open");

    });
}

const articleDish = document.querySelector('.article-dish');
const buttonHalfCircle = document.querySelector('.button-half-circle');

const footer = document.querySelector('footer');
const buttonFooterOpener = document.querySelector('.button-footer-opener');

let toggleLock = false;

buttonHalfCircle.addEventListener('click', () => {
    footer.classList.toggle('footer-added');
    setTimeout(() => {
        footer.classList.toggle('footer-added');
    }, 1000);
    
});

menuButton.addEventListener('click', () => {
    menuDropdown.classList.toggle("menu-open");
    });

articleDish.addEventListener('click', () => {
    if(!toggleLock){
        toggleLock = true;
        
        if(!buttonHalfCircle.textContent){
            buttonHalfCircle.classList.toggle('button-half-circle-open');
            setTimeout(() => {      
                buttonHalfCircle.textContent = "Lägg till +";  
                toggleLock = false;            
            }, 1000);        
        } else {
            buttonHalfCircle.textContent = "";
            buttonHalfCircle.classList.toggle('button-half-circle-open');
            setTimeout(() => {        
                toggleLock = false;            
            }, 1000);        
        }
    } 
    return;      
});

buttonFooterOpener.addEventListener('click', () => {
    if(buttonFooterOpener.innerText === "Se beställning"){
        
        footer.classList.toggle('footer-open');
        setTimeout(() => {        
            buttonFooterOpener.innerText = "Tillbaka";  
            buttonFooterOpener.style.backgroundColor = "#FFCB47";
            buttonFooterOpener.style.color = "#2C4251";
        }, 1000);        
    } else{
        
        footer.classList.toggle('footer-open');
        setTimeout(() => {        
            buttonFooterOpener.innerText = "Se beställning";   
            buttonFooterOpener.style.backgroundColor = "#2C4251";
            buttonFooterOpener.style.color = "#FFCB47";         
        }, 1000);        
        
    }
    
});


// Denna kod körs först när sidan laddas och gömmer saker
document.addEventListener('DOMContentLoaded', function () {
     //hidden
     document.querySelector('.section-meny').style.display = 'none';
     document.querySelector('.section-tider').style.display = 'none';
     document.querySelector('.section-boka').style.display = 'none';
     document.querySelector('.section-kontakt').style.display = 'none';
     //visible
     document.querySelector('.section-dagens').style.display = 'flex';
});

function loadHomePage() {
    //hidden
    document.querySelector('.section-meny').style.display = 'none';
    document.querySelector('.section-tider').style.display = 'none';
    document.querySelector('.section-boka').style.display = 'none';
    document.querySelector('.section-kontakt').style.display = 'none';
    // document.querySelector('.section-footer-order').style.display = 'none';
    
    //visible
    document.querySelector('.section-dagens').style.display = 'flex';
}

function loadMenuPage() {
    //hidden
    document.querySelector('.section-dagens').style.display = 'none';
    document.querySelector('.section-tider').style.display = 'none';
    document.querySelector('.section-boka').style.display = 'none';
    document.querySelector('.section-kontakt').style.display = 'none';
    // document.querySelector('.section-footer-order').style.display = 'none';
    
    //visible
    document.querySelector('.section-meny').style.display = 'flex';
}

function loadOpenHourPage() {
    //hidden
    document.querySelector('.section-dagens').style.display = 'none';
    document.querySelector('.section-boka').style.display = 'none';
    document.querySelector('.section-meny').style.display = 'none';
    document.querySelector('.section-kontakt').style.display = 'none';
    // document.querySelector('.section-footer-order').style.display = 'none';
    
    //visible
    document.querySelector('.section-tider').style.display = 'flex';
}

function loadBookingPage() {
    //hidden
    document.querySelector('.section-dagens').style.display = 'none';
    document.querySelector('.section-tider').style.display = 'none';
    document.querySelector('.section-meny').style.display = 'none';
    document.querySelector('.section-kontakt').style.display = 'none';
    // document.querySelector('.section-footer-order').style.display = 'none';
    
    //visible
    document.querySelector('.section-boka').style.display = 'flex';
}

function loadContactPage() {
    //hidden
    document.querySelector('.section-dagens').style.display = 'none';
    document.querySelector('.section-tider').style.display = 'none';
    document.querySelector('.section-meny').style.display = 'none';
    document.querySelector('.section-boka').style.display = 'none';
    // document.querySelector('.section-footer-order').style.display = 'none';
    
    //visible
    document.querySelector('.section-kontakt').style.display = 'flex';
}