export default function cardSlide(Array, container, rightButton, leftButton ){



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