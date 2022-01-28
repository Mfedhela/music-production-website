let menuBtn = document.getElementById('menuBtn');
let side = document.querySelector('.side_right');
let closeBtn = document.getElementById('closeBtn');
menuBtn.addEventListener('click', () => {

  if (side.style.transform == "translateX(-120%)") {
  
  				side.style.transform = "translateX(0)";
  				menuBtn.innerHTML = '<i class ="fa fa-times"></i>'
  				
  } else{
  
  				side.style.transform = "translateX(-120%)";
  				menuBtn.innerHTML = '<i class ="fa fa-bars"></i>'
  }
				
});

/* closeBtn.addEventListener('click', () => {
				side.style.transform = "translateX(-120%)"; 
}) */
