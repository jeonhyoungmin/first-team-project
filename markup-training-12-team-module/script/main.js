import docInit from "./docInit.js";
import domStyling from "./domStyling.js";
import cardslide from "./cardSlide.js"
import pokemonApiList from "./pokemonApiList.js"




domStyling.size(docInit.root, '100vw', '100vh');
domStyling.bgColor(docInit.root, '');
domStyling.flexSetting(docInit.root, 'flex', 'center', 'center');

// 중앙 정렬 div
docInit.root.append(docInit.centerDiv)
docInit.centerDiv.id = 'centerDiv'
domStyling.size(docInit.centerDiv, '80vw', '40vh');
// domStyling.bgColor(docInit.centerDiv, 'greenyellow')

// arrow div
docInit.centerDiv.append(docInit.arrowDiv)
docInit.arrowDiv.id = 'arrow'
domStyling.size(docInit.arrowDiv, '70vw', '40vh');
domStyling.flexSetting(docInit.arrowDiv, 'flex', 'space-between', 'center')
docInit.arrowDiv.append(docInit.leftDiv)
docInit.arrowDiv.append(docInit.rightDiv)
docInit.leftDiv.textContent = '<'
docInit.rightDiv.textContent = '>'
domStyling.arrowFontSize(docInit.leftDiv, '2rem', '500', 'grey');
domStyling.arrowFontSize(docInit.rightDiv, '2rem', '500', 'grey');
domStyling.positionSetting(docInit.arrowDiv, 'absolute', '28vh', '15vw');
docInit.arrowDiv.style.zIndex = '1';

//cardslide div
docInit.centerDiv.append(docInit.slideContainer);
domStyling.size(docInit.slideContainer, '80vw', '40vh');
docInit.slideContainer.id = 'slideContainer';
domStyling.flexSetting(docInit.slideContainer, 'flex', 'flex-start', 'flex-start');





const pokemonName = [];

// 단일 카드 내부 div
// 카드 이미지 부분
function pokemonApiImport(Keys, count){
  const _BASIC_URL = `https://pokeapi.co/api/v2/${Keys}?limit=${count}/`;
  const request = new XMLHttpRequest();
    request.open("GET", _BASIC_URL);
    request.responseType = "json";
    request.send();
    request.addEventListener('load', () => {
    const _POKEMON_API = request.response;
    // console.log(_POKEMON_API);
    console.log(_POKEMON_API.results[0].name)
    // console.log(_POKEMON_API.results);
    for(let i = 0; i< count; i++){
      let pokemonData = _POKEMON_API.results[i].name
      
    }
  })
}
pokemonApiImport(pokemonApiList.pokemon, 898)


// const _BASIC_URL = `https://pokeapi.co/api/v2/pokemon?limit=905/`;
//   const request = new XMLHttpRequest();
//     request.open("GET", _BASIC_URL);
//     request.responseType = "json";
//     request.send();
//     request.addEventListener('load', () => {
//     const _POKEMON_API = request.response;
//     // console.log(_POKEMON_API);
//     // console.log(_POKEMON_API.results);
//     // console.log(_POKEMON_API.results.length);
//     const pokemonList = _POKEMON_API.results;
//     // console.log(pokemonList);

//     const cardDivArr = []
//     for(let i = 0; i < 898 ; i++){
//       let cardDiv = document.createElement('div');
//       // 단일 카드 내부 div들
//       // 카드 위 이미지 부분
//       let cardTopDiv = document.createElement('div');
//       let numberDiv = document.createElement('div');
//       // 카드 아래 텍스트 부분
//       let cardBottomDiv = document.createElement('div');
//       let pokemonDivBox = document.createElement('div');
//       let pokemonDiv = document.createElement('div');
//       let textDiv = document.createElement('div');
//       let underLineDiv = document.createElement('div');
//       let textAlignDiv = document.createElement('div');
//       docInit.slideContainer.append(cardDiv)
//       cardDiv.style.width = '10vw';
//       cardDiv.style.height = '40vh';
//       cardDiv.id = `card${i}`
//       cardDivArr[i] = cardDiv
//       // cardDiv.style.backgroundColor = 'green';
      
//       cardDiv.append(cardTopDiv)
//       domStyling.size(cardTopDiv, '10vw', '20vh')





//       cardTopDiv.style.backgroundImage = `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png)`
//       cardTopDiv.style.backgroundSize = '10vw 20vh'
      
//       // domStyling.bgColor(cardTopDiv,  `rgb( ${new Array(3).fill().map(parameter => Math.random() * 255).join(", ")} )`)
//       domStyling.flexSetting(cardTopDiv, 'flex', 'flex-start', 'flex-end')
//       cardTopDiv.append(numberDiv);
//       // domStyling.size(numberDiv, '3vw', '3vh')
//       numberDiv.textContent = 'No.' + (i+1)
//       // numberDiv.style.textAlign = 'center'
//       domStyling.bgColor(numberDiv, '')
//       // 카드 텍스트 부분
//       cardDiv.append(cardBottomDiv)
//       domStyling.size(cardBottomDiv, '10vw', '20vh');
//       // domStyling.bgColor(cardBottomDiv, 'white')
//       // 포켓몬 텍스트 부분
//       cardBottomDiv.append(pokemonDivBox)
//       domStyling.size(pokemonDivBox, '10vw', '5vh');
//       domStyling.bgColor(pokemonDivBox, '');
//       domStyling.flexSetting(pokemonDivBox, 'flex', 'center', 'center');
//       pokemonDivBox.append(pokemonDiv);
//       domStyling.size(pokemonDiv, '3vw', '3vh');
//       domStyling.bgColor(pokemonDiv, '');
//       pokemonDiv.textContent = pokemonList[i].name;
//       domStyling.flexWebkit(pokemonDiv)
//       domStyling.pokemonFontSize(pokemonDiv, '0.8rem', '100','black')
//       pokemonDiv.append(underLineDiv);
//       domStyling.size(underLineDiv, '2vw', '0.5vh');
//       underLineDiv.style.backgroundColor = `rgb( ${new Array(3).fill().map(parameter => Math.random() * 255).join(", ")} )`;
//       pokemonDiv.style.flexDirection = 'column'
//       domStyling.flexSetting(pokemonDiv, 'flex', 'space-between', 'center')
//       // lorem 텍스트 부분
//       cardBottomDiv.append(textDiv);
//       domStyling.size(textDiv, '10vw', '15vh');
//       domStyling.textFontSize(textDiv, '1rem', '10', 'black')
//       // domStyling.bgColor(textDiv, 'blue');
//       textDiv.append(textAlignDiv)
//       textAlignDiv.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iusto, atque incidunt accusamus ut quasi consequatur tenetur dolorem dolore corporis minima quo esse beatae ipsum. Rerum omnis neque dolorem et!'
//       // textAlignDiv.style.textAlign = 'justify'
//       // textAlignDiv.style.lineHeight = '25px'
//       domStyling.flexWebkit(textDiv)
//     }
    
    






//     // 카드 슬라이드
//     docInit.centerDiv.style.overflow = 'hidden'

//     cardslide(cardDivArr, docInit.slideContainer, docInit.rightDiv, docInit.leftDiv);

//     // let count = 1;
//     // const size = cardDivArr[0].clientWidth

//     // docInit.rightDiv.addEventListener('click', function() {
//     //   if(count >= cardDivArr.length -1) return;
//     //   docInit.slideContainer.style.transform = "translateX(" + (-size*count) + "px)";
//     //   docInit.slideContainer.style.transition = 'transform 0.3s ease-in-out'
//     //   count++;
//     // })
//     // docInit.leftDiv.addEventListener('click', function() {
//     //   if(count <= 0) return;
//     //   docInit.slideContainer.style.transition = 'transform 0.3s ease-in-out';
//     //   count--;
//     //   docInit.slideContainer.style.transform = "translateX(" + (-size*count) + "px)";
//     // })




//   });




