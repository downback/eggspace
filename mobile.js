const images = document.querySelectorAll('.poster-img');

window.addEventListener('scroll',checkBoxes);

function checkBoxes(){
  const triggerBottom = window.innerHeight / 1.2;
  
  images.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    
    if(boxTop < triggerBottom){
      box.classList.add('show');
    }else{
      box.classList.remove('show');
    }
  });
}

checkBoxes();