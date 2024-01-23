const home = document.getElementById('#home')
const about = document.getElementById('#about')
const contact = document.getElementById('#contact')
const homeDropDownMenu = document.querySelector('.home-drop-down');
const aboutDropDownMenu = document.querySelector('.about-drop-down');
const contactDropDownMenu = document.querySelector('.contact-drop-down');
let Break =  document.querySelector('.break');




//navbar events for when the user interacts with elements in the navbar


//

   
//home
    home.addEventListener('mouseover', () => {
      homeDropDown(),
      dropDown(Break,'block','none') 
    } )

    homeDropDownMenu.addEventListener('mouseover', () => {
        dropDown(homeDropDownMenu, 'block', 'none'),
        dropDown(home, 'auto', 'underline')

    })

    homeDropDownMenu.addEventListener('mouseleave', homeDropCancel)

//about
about.addEventListener('mouseover', ()=> {
    aboutDropDown(),
    dropDown(Break,'block','none')

} )

aboutDropDownMenu.addEventListener('mouseover', () => {
    dropDown(aboutDropDownMenu, 'block', 'none'),
    dropDown(about, 'auto', 'underline')

})

aboutDropDownMenu.addEventListener('mouseout', aboutDropCancel)

//contact
contact.addEventListener('mouseover', () => {
    contactDropDown(),
    dropDown(Break,'block','none')

} )

contactDropDownMenu.addEventListener('mouseover', () => {
    dropDown(contactDropDownMenu, 'block','none')
    dropDown(contact, 'auto','underline')
})

contactDropDownMenu.addEventListener('mouseout', contactDropCancel)



//navbar events functions
function contactDropCancel(){
    dropDown(contactDropDownMenu,'none','none')
    dropDown(contact,'auto','none')
}

function contactDropDown() {
    dropDown(contactDropDownMenu,'block','none'),
    dropDown(contact, 'auto', 'underline')
    dropDown(home, 'auto', 'none'),
    dropDown(homeDropDownMenu, 'none', 'none')
    dropDown(aboutDropDownMenu, 'none', 'none')
    dropDown(about, 'auto', 'none')
}






function aboutDropDown() {
    dropDown(aboutDropDownMenu, 'block', 'none')
    dropDown(about, 'auto', 'underline'),
    dropDown(home, 'auto', 'none'),
    dropDown(homeDropDownMenu, 'none', 'none')
    dropDown(contact,'auto','none')
    dropDown(contactDropDownMenu,'none','none')
    

}



function homeDropDown () {

    dropDown(homeDropDownMenu, 'block', 'none')
    dropDown(home,'auto','underline')
    dropDown(aboutDropDownMenu, 'none', 'none')
    dropDown(about, 'auto', 'none')
    dropDown(contact,'auto','none')
    dropDown(contactDropDownMenu,'none','none')

   
}

function homeDropCancel(){
    dropDown(homeDropDownMenu, 'none', 'none')
    dropDown(home, 'auto', 'none')
}

function aboutDropCancel () {
    dropDown(aboutDropDownMenu, 'none', 'none')
    dropDown(about, 'auto', 'none')
}

    

function dropDown(selector, display, decoration) {
    
        let displayProperty = selector.style.display = display;

        let textDecoration = selector.style.textDecoration = decoration

        return displayProperty,
        textDecoration;
   
}

//products page