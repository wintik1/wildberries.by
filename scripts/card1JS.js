let Foto = document.getElementById('img1');
let bigFoto = document.getElementById('img2');
let wind = document.getElementById('photo');

let leftPage1 = document.querySelector('.left-page1');
let leftPage2 = document.querySelector('.left-page2');
let leftPage3 = document.querySelector('.left-page3');


let standart2 = document.querySelector('.standart-carusel-block2');
let standart1 = document.querySelector('.standart-carusel-block1');
let standart3 = document.querySelector('.photoCustomerItem');





wind.onmousemove = function (e) {
    
    let x = (((e.clientX - 104)* -1) * 1.7);
    let y = (((e.clientY - 60)* -1) * 2.5);

        if(x <= 0 && x >= -578){
            bigFoto.style.left = x + 'px';
        }
        if (y <=0 && y >= -678){
        bigFoto.style.top = y + 'px';
        }
       



        
};




let dinamik = function (ab, b, c, d, standart, s, num){

for(let i = 0; i < num; i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = "#";
    a.addEventListener('click', function(evt) {
        evt.preventDefault();
    });
    let img = document.createElement('img');
    img.src = s;
    a.appendChild(img);

    for(let j = 0; j <= 3; j++) {
        
        let p = document.createElement('p');

        if(j === 0){
            let txt1 = document.createTextNode(ab);
            p.classList.add('newPrice');
            p.appendChild(txt1);
            a.appendChild(p); 
                      
        }

        if( j === 1) {
            let txt2 = document.createTextNode(b);
            p.classList.add('price');
            p.appendChild(txt2);
            a.appendChild(p); 
           
        }

        if(j === 2){
            let txt3 = document.createTextNode(c);
            p.classList.add('brand');
            p.appendChild(txt3);
            a.appendChild(p); 
            
        }    
        if(j === 3) {
            let txt4 = document.createTextNode(d + (i+1));
            p.classList.add('transcript');
            p.appendChild(txt4);
            a.appendChild(p); 
            
        }
        
       
    }
    li.appendChild(a);
    standart.appendChild(li);
}


};

dinamik('22 р. 54 к.','45 р. 53 к.','ТВОЕ','Рубашка динамика №', standart2, "../galery/allclothes/7762907.jpg", 100);
dinamik('13 p. 63 к.','27 р. 68 к.','ТВОЕ','Брюки: ', standart1, "../galery/allclothes/7568694.jpg", 50);
dinamik('','','','', standart3, "../galery/beauty/7394305.jpg", 20);
 




 $(document).ready(function(){
   
   
    
    $('.slaider1').slick({
        arrows: false
    });
    


    $(standart1).slick({
        arrows: false
    });
  

    $(standart2).slick({
        arrows: false
    });

    $(standart3).slick({
        arrows: false
    });



    

    
            
    

    
leftPage1.onmouseover = function(){
    bigFoto.src = '../galery/cardimg/3170118-1.jpg';
    Foto.src = '../galery/cardimg/3170118-1.jpg';
};
leftPage2.onmouseover = function(){
    bigFoto.src = '../galery/cardimg/3170118-2.jpg';
    Foto.src = '../galery/cardimg/3170118-2.jpg';
};
leftPage3.onmouseover = function(){
    bigFoto.src = '../galery/cardimg/3170118-3.jpg';
    Foto.src = '../galery/cardimg/3170118-3.jpg';
};
let p1 =  document.querySelector('.leftPage1a');
let p2 =  document.querySelector('.leftPage2a');
let p3 =  document.querySelector('.leftPage3a');

leftPage1.addEventListener('click', function(){
    p1.classList.add('leftBord');
    p2.classList.remove('leftBord');
    p3.classList.remove('leftBord');
    
    bigFoto.src = '../galery/cardimg/3170118-1.jpg';
    Foto.src = '../galery/cardimg/3170118-1.jpg';
});
leftPage2.addEventListener('click', function(){
    p1.classList.remove('leftBord');
    p2.classList.add('leftBord');
    p3.classList.remove('leftBord');

    bigFoto.src = '../galery/cardimg/3170118-2.jpg';
    Foto.src = '../galery/cardimg/3170118-2.jpg';
});
leftPage3.addEventListener('click', function(){
    p1.classList.remove('leftBord');
    p2.classList.remove('leftBord');
    p3.classList.add('leftBord');

    bigFoto.src = '../galery/cardimg/3170118-3.jpg';
    Foto.src = '../galery/cardimg/3170118-3.jpg';
    });






});

