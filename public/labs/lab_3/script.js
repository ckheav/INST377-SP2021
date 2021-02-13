/* Put your javascript in here */
const btnPrev = document.querySelector('button.arrow.prev');
    const btnNext = document.querySelector('button.arrow.next');
    const ul = document.querySelector('div.gallery > ul');
    const liWidth = document.querySelector('div.gallery ul > li').clientWidth;
    const limit = ul.querySelectorAll('img').length * liWidth; 
    
    const count = 3;
    let position = 0;
    
    console.log(ul); 
    
    const scrollFn = (isNext) => {
      const move = position + (count * (isNext ? liWidth : -(liWidth)));
      console.log(move);
      if(move < 0 || move > limit) {
        return;
      }
      
      position = move;
      ul.style.transform = `translateX(${-(position)}px)`;
    };
    
    btnPrev.onclick = () => scrollFn(false);
    btnNext.onclick = () => scrollFn(true);