const domStyling = {
  size: function(element, width, height){
    element.style.width = width;      
    element.style.height = height;      
  },
  bgColor: function(element, backgroundColor) {
    element.style.backgroundColor = backgroundColor;
  },
  flexSetting: function(element, display, justifyContent, alignItems) {
    element.style.display = display;
    element.style.justifyContent = justifyContent;
    element.style.alignItems = alignItems;
  },
  positionSetting: function(element, position, bottom, left) {
    element.style.position = position;
    element.style.bottom = bottom;
    element.style.left = left;
  },
  arrowFontSize: function(element, fontSize, fontWeight, color){
    element.style.fontSize = fontSize;
    element.style.fontWeight = fontWeight;
    element.style.color = color;
  },
  pokemonFontSize: function(element, fontSize, fontWeight, color){
    element.style.fontSize = fontSize;
    element.style.fontWeight = fontWeight;
    element.style.color = color;
  },
  textFontSize: function(element, fontSize, fontWeight, color){
    element.style.fontSize = fontSize;
    element.style.fontWeight = fontWeight;
    element.style.color = color;
  },
  flexWebkit: function(element){
    element.style.display = '-webkit-box'
    element.style.overflow = 'hidden'
  }
}

export default domStyling