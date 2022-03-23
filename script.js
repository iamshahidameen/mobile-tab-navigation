/* Custom Method 1 */

const mobileMenu = document.querySelectorAll('.main-menu li ');
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
}  