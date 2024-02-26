import '../modules/config.js';
import { displayBar } from "../modules/config.js";

document.addEventListener('DOMContentLoaded', function(){
    
    let navbar = document.getElementById('menu');
    const HIDE_POSITION = 'translateX(100%)';
    const VISIBLE_POSITION = 'translateX(-10%)';
    const ANIMATION_DURATION = '0.5s';
    const CLOSE_MENU = 'img/icons/menu/close.png';
    const OPEN_MENU = 'img/icons/menu/close.png'

    displayBar(HIDE_POSITION, '', OPEN_MENU)

    btnMenu.addEventListener('click', function(){
        if (navbar.style.transform === HIDE_POSITION){
            displayBar(VISIBLE_POSITION, ANIMATION_DURATION, CLOSE_MENU)
        }
        else if(navbar.style.transform === 'translateX(-10%)'){
            displayBar(HIDE_POSITION, ANIMATION_DURATION, OPEN_MENU)
        }
    })

})
