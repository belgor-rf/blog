window.onload = init();


function init(){
    changer()
}


function changer(){
    let list = document.getElementsByClassName('hk');
    console.log('ok')
    console.log(list)
    if( window.innerWidth >= 700 ){
        for (let b of list){
            console.log('appear')
            b.style.display = 'true';
        }
    }
    else {
        for (let b of list){
            console.log('hide')
            b.style.display = 'none';
        }
    }
}