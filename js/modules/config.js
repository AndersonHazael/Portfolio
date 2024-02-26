
// --------------- SKILL FUNCTIONs ------------------- //
export function configGlobalSkill(visibility, animation){
    level.style.visibility = visibility;
    skill.style.animation = animation;
}

export function configSkill(linguaguem, nivel, cor, largura, filtroHTML, filtroCSS, filtroJS){    
    
    let btnHTML     =   document.getElementById('btnHtml')
    let btnCSS      =   document.getElementById('btnCss')
    let btnJS       =   document.getElementById('btnJavascript')
    let skill       =   document.getElementById('skill'); 
    let level       =   document.getElementById('level');   
    let progress    =   document.getElementById('progress'); 

    skill.textContent = linguaguem;
    level.textContent = nivel;
    progress.style.background = cor;
    progress.style.width = largura;
    btnHTML.style.filter = filtroHTML;  
    btnCSS.style.filter = filtroCSS;
    btnJS.style.filter = filtroJS;
}


// --------------- ABOUT FUNCTIONs ------------------- //
export function updateText(titulo, texto){
    let title = document.getElementById('title');
    let text = document.getElementById('text');

    title.textContent = titulo; 
    text.textContent = texto;
}


// --------------- NAVBAR FUNCTIONs ------------------- //
export function displayBar(transform, transition, image){
    let navbar = document.getElementById('menu');
    let btnMenu = document.getElementById('btnMenu');

    navbar.style.transform = transform;
    navbar.style.transition = transition;
    btnMenu.src = image;
}