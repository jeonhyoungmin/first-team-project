const docInit = {
  body: document.body,
  root: document.getElementById('root'),
  centerDiv: document.createElement('div'),
  arrowDiv: document.createElement('div'),
  slideContainer: document.createElement('div'),
  leftDiv: document.createElement('div'),
  rightDiv: document.createElement('div'),


  // 카드 div ==> for문으로 제작하기
  cardDiv: document.createElement('div'),
  // cardDivOne: document.createElement('div'),
  // cardDivTwo: document.createElement('div'),
  // cardDivThree: document.createElement('div'),
  // cardDivFour: document.createElement('div'),
  // cardDivFive: document.createElement('div'),
  // cardDivSix: document.createElement('div'),

  // 단일 카드 내부 div들
  // 카드 위 이미지 부분
  cardTopDiv: document.createElement('div'),
  numberDiv: document.createElement('div'),
  // 카드 아래 텍스트 부분
  cardBottomDiv: document.createElement('div'),
  pokemonDivBox: document.createElement('div'),
  pokemonDiv: document.createElement('div'),
  textDiv: document.createElement('div'),
  underLineDiv: document.createElement('div')
}

export default docInit