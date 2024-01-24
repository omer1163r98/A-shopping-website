

const home = document.getElementById('#home');
const about = document.getElementById('#about');
const contact = document.getElementById('#contact')
const homeDropDownMenu = document.querySelector('.home-drop-down');
const aboutDropDownMenu = document.querySelector('.about-drop-down');
const contactDropDownMenu = document.querySelector('.contact-drop-down');
let Break =  document.querySelector('.break');




//navbar events for when the user interacts with elements in the navbar


//

   
//home
    home.addEventListener('mouseover', () => {
      homeDropDown();
      dropDown(Break,'block','none') ;
    } );

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
let itemPage = document.querySelector('.item-description-page');
let itemName = document.querySelector('.item-description-page h2');
let itemPrice = document.querySelector('.price');
let itemDescription = document.querySelector('.description');
let itemImg = document.getElementById('item-img');

let itembutton1 = document.getElementById('item1')
let itembutton2 = document.getElementById('item2')
let itembutton3 = document.getElementById('item3')
let itembutton4 = document.getElementById('item4')
let itembutton5 = document.getElementById('item5')
let itembutton6 = document.getElementById('item6')
let itembutton7 = document.getElementById('item7')
let itembutton8 = document.getElementById('item8')
let itembutton9 = document.getElementById('item9')

let itemButtons = [
    itembutton1,
    itembutton2,
    itembutton3,
    itembutton4,
    itembutton5,
    itembutton6,
    itembutton7,
    itembutton8,
    itembutton9
]




let products = [
    {name: 'comet bag', price: 44.99, description: '', img: './comet-bag.webp'},
    {name: 'comet pouch', price: 22.99, img: './puch.webp'},
    {name: 'blue ray glasses', price: 84.99, img: './glasses.png'},
    {name: 'gaming keyboard', price: 34.99, img: './keyboard.webp'},
    {name: 'gaming mouse', price: 20.99, img: './mouse.webp'},
    {name: 'gaming headphones', price: 79.99, img: './headphones2.png'},
    {name: 'desk pad', price: 15.99, img: './desk-pad.webp'},
    {name: 'power bank', price: 29.99, img: './power-bank.png'},
    {name: 'ring', price: 9.99, img: './ring.jpeg'}
]


function updateItem(buttonIndex, productIndex) {
    let button = itemButtons[buttonIndex];
    let product = products[productIndex];
    if (buttonIndex === productIndex ){
        button.addEventListener('click', () => {
          itemName.innerText = product.name;
          itemPrice.innerText = product.price;
          itemDescription.innerText = product.name;
          itemImg.src = product.img;
          itemPage.style.display = "flex";

          itemPage.addEventListener('mouseover', () => {
            itemPage.style.display = 'flex'
         })
        
         itemPage.addEventListener('mouseout', () => {
            itemPage.style.display = 'none'
         })

        })
          
    }
        }
      
  updateItem(0,0)
  updateItem(1,1)
  updateItem(2,2)
  updateItem(3,3)
  updateItem(4,4)
  updateItem(5,5)
  updateItem(6,6)
  updateItem(7,7)
  updateItem(8,8)

// add to cart functions 

let addToCart = document.querySelector('.add-to-cart')
let cartCircle = document.querySelector('.cart-circle')
function updateCartCircle () {
    for (i = 1; i >= 1; i++){
    addToCart.addEventListener('click', () => {
        itemPage.style.display = "none";
        cartCircle.innerText = i;
    })}
}

updateCartCircle();