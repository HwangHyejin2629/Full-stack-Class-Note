//버튼을 눌렀을때 이미지 바꿔주면됨
document.addEventListener('DOMContentLoaded', function(e){
    let bt = document.querySelector('input')
    let img= document.querySelector('img')
    let img1='image/profile.jpg';
    let img2='image/hl1.jpg';
    let img3='image/hl2.jpg';
    bt.addEventListener('click',function(e){
        if(img.getAttribute('src')===img1){
            img.setAttribute('src',img2);
        }else if(img.getAttribute('src')===img2){
            img.setAttribute('src',img3);
        }else{img.setAttribute('src',img1);}
        
    })    
})