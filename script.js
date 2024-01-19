const home = document.getElementById('#home')
const homeDropDownMenu = document.querySelector('.home-drop-down');

home.addEventListener('mouseover', homeDropDown)

home.addEventListener('mouseout', homeDropCancel)










function homeDropDown () {

    dropDown(homeDropDownMenu, 'block', 'none')
    dropDown(home,'auto','underline')

   
}

function homeDropCancel(){
    homeDropDownMenu.style.display = 'none'
}






function dropDown(selector, display, decoration) {
    
        let displayProperty = selector.style.display = display;

        let textDecoration = selector.style.textDecoration = decoration

        return displayProperty,
        textDecoration;
    
}