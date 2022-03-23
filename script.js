/* Custom Method 1 */

/*const mobileMenu = document.querySelectorAll('.main-menu li ');
const imgEl = document.querySelectorAll('.phone img');

mobileMenu.forEach((menu, menuIndex) => {

    menu.addEventListener('click', function() {
        
        addImgToTab(menuIndex);
    });
   
});

function addImgToTab(imageIndex){
    
    for(let i = 0; i<imgEl.length; i++ ) {
        imgEl[i].classList.remove('show');
        console.log(imageIndex, imgEl[i])
        if(i === imageIndex) {
            imgEl[i].classList.add('show');
        }
    }
}  */


//Method no 2
const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}


function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}