let img = document.getElementById('imgb')
let header = document.getElementsByClassName('header')
let input = document.getElementById('input')
let qrimage = document.getElementById('qrimage')


function generateQR(){
    if(input.value.length > 0){
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    }
    else{
        alert('please enter the value')
    }
}





