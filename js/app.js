let is_showing = false
function show_menu(){
    let button_icon = document.getElementById('button_icon')
    let menu = document.getElementById('menu')
    if(is_showing){
        menu.style.display = 'none'
        is_showing = false
        button_icon.setAttribute('src', 'images/icon-hamburger.svg')
    }
    else{
        is_showing = true
        menu.style.display = 'flex'
        button_icon.setAttribute('src', 'images/icon-close.svg')
    }
}