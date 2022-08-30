export default function cardSlide(Array, container, rightButton, leftButton ){


  //두진's 작업영역
  let count = 1;
  const size = Array[0].clientWidth

  rightButton.addEventListener('click', function() {
    if(count >= Array.length -1) return;
    container.style.transform = "translateX(" + (-size*count) + "px)";
    container.style.transition = 'transform 0.3s ease-in-out'
    count++;
  })
  leftButton.addEventListener('click', function() {
    if(count <= 0) return;
    container.style.transition = 'transform 0.3s ease-in-out';
    count--;
    container.style.transform = "translateX(" + (-size*count) + "px)";
  })

  const slideList = document.querySelector("#slideContainer");
        const rightButton = document.getElementById("arrow").children[1];
        const leftButton = document.getElementById("arrow").children[0];
        const slideLength = cardDivArr.length;
        const slideWidth = 300;
        const slideSpeed = 300;
        const startNum = 0;
        const slideMargin = 30;

        slideList.style.width = slideWidth * (slideLength) + "px";
        

        makeClone();

        function makeClone(){
          for (let i = 0; i< slideLength; i++){
            
            let cloneSlide = cardDivArr[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slideList.appendChild(cloneSlide);
          }
          for(let i = slideLength-1; i >=0; i--){
            let cloneSlide = cardDivArr[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slideList.prepend(cloneSlide);
          }
          updateWidth();
          setInitialPos();
          setTimeout(function(){
            slideList.style.transition = "0.5s ease-out";
          },100);
        }

        function updateWidth() {

          let currentslideRail = document.querySelectorAll("#slideContainer div");
          let newslideNumber = currentslideRail.length;
          console.log(newslideNumber);

          let newWidth = (slideWidth + slideMargin)*newslideNumber - slideMargin + "px";
          slideList.style.width =newWidth;
          
        }
        function setInitialPos(){
          let initialTrans = -(slideWidth + slideMargin)* slideLength;
          slideList.style.transform = 'tranxslateX(' + initialTrans +'px)';
        }
                
        /*let firstChild = slideList.firstElementChild;
        let lastChild = slideList.lastElementChild;
        let clonedFirst = firstChild.cloneNode(true);
        let clonedLast = lastChild.cloneNode(true);
        
        slideList.appendChild(clonedFirst);
        slideList.insertBefore(clonedLast, slideList.firstElementChild);*/
        
        slideList.style.transform = "translate3d(-" + (slideWidth * (startNum )) + "px, 0px, 0px)";

        let currentIndex = startNum;
        let currentslide = cardDivArr[currentIndex];

        currentslide.classList.add('slide_active');
        
        rightButton.addEventListener('click',function(){

          if (currentIndex <= slideLength -1){
            slideList.style.transition = slideSpeed + "ms";
            slideList.style.transform = "translate3d(-" + (slideWidth*(currentIndex +2)) + "px, 0px, 0px)";
          }

          if (currentIndex === slideLength - 1){
            setTimeout(function(){
              slideList.style.transition = "0ms";
              slideList.style.transform = "translate3d(-" + slideWidth +"px, 0px, 0px)";
            }, slideSpeed);
            currentIndex = -1;
          }
          currentslide.classList.remove('slide_active');
          currentslide = cardDivArr[++currentIndex];
          currentslide.classList.add('slide_active');
        });

        leftButton.addEventListener('click',function(){

          if (currentIndex >= 0){
          slideList.style.transition = slideSpeed + "ms";
          slideList.style.transform = "translate3d(-" + (slideWidth * currentIndex) + "px, 0px, 0px)";
        }

        if (currentIndex === 0){
          setTimeout(function(){
            slideList.style.left = -slideLength * (slideWidth + slideMargin)+ "px";
            slideList.style.transition = `${0}s ease-out`;
          }, slideSpeed);
          currentIndex = slideLength;
        }
        currentIndex -= 1;
        });




}


// let count = 1;
//     const size = cardDivArr[0].clientWidth

//     docInit.rightDiv.addEventListener('click', function() {
//       if(count >= cardDivArr.length -1) return;
//       docInit.slideContainer.style.transform = "translateX(" + (-size*count) + "px)";
//       docInit.slideContainer.style.transition = 'transform 0.3s ease-in-out'
//       count++;
//     })
//     docInit.leftDiv.addEventListener('click', function() {
//       if(count <= 0) return;
//       docInit.slideContainer.style.transition = 'transform 0.3s ease-in-out';
//       count--;
//       docInit.slideContainer.style.transform = "translateX(" + (-size*count) + "px)";
//     })