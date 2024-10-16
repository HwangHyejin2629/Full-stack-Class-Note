addEventListener('DOMContentLoaded',function(e){
    let nameEditButton = document.querySelector('#nameEditButton') //누를것
    let editNameField = document.querySelector('#editNameField') //띄울 창
    nameEditButton.addEventListener('click',function(e){
        editNameField.setAttribute('style','display:block')
        nameEditButton.style.display='inline';
    })
    let okButtom = document.querySelector('#okButtom') //확인버튼
    let newName =document.querySelector('#newName') //입력창
    let nameHere =document.querySelector('#nameHere')
    okButtom.addEventListener('click',function(e){
        let value =newName.value;
        nameHere.textContent=value;
    })
})