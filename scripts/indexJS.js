// /* Sass Document */
// let present = getElementById('present');
// let bod = document.body;
// setTimeout(function(){
//   present.classList.add('re2');

// }, 2000);


let page = document.getElementById('ulpart1');

for ( let i = 0; i < 5; i ++) {

    let div = document.createElement('div');
    div.classList.add('page');
    let img = document.createElement('img');
    let a = document.createElement('a');
    a.setAttribute('href', '#');
    img.src = "galery/allclothes/7822763.jpg";
    a.appendChild(img);
    div.appendChild(a);
    page.appendChild(div);
}

$(document).ready(function(){
 
  
  $('.topmenus-mobil').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 8000,
    arrows: 'linear',
  });  

   
  $('.big-banner').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    
  });
  
  $('.all-page-left-part-1').slick({
    arrows: false,
   
  });

  });


