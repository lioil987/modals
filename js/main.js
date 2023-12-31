let modalShowBtn=document.querySelectorAll('button.modalShowBtn');
let modalHideBtn=document.querySelectorAll('button.modalHideBtn');
modalShowBtn.forEach(element => {
  element.addEventListener('click',function(){
    let temp=document.querySelector(element.getAttribute('data-target'));
    temp.classList.add('show');
  })
});
modalHideBtn.forEach(element=>{
element.addEventListener('click',function(){
 let temp= element.parentElement.parentElement.parentElement;
 temp.classList.remove('show')
})
});
