const Kewt = require('./Kewt');

class KewtDOM extends Kewt {
  static getShadow(type, color, opacity) {
    const c = `rgba(${KewtDOM.RGB_COLORS[color]},${opacity / 100})`;
    switch (type) {
      case 'uniform':
        return `-1px -1px 0 ${c},1px -1px 0 ${c},-1px 1px 0 ${c},1px 1px 0 ${c}`;
      case 'shadow':
        return `1px 1px 1px ${c}`;
      default:
        return '';
    }
  }
  constructor() {
    super();
    const persistedState = localStorage.getItem('kewtState');
    if (persistedState) {
      super.set(JSON.parse(persistedState));
    }
  }
  /**
   * reset - resets all caption properties to their default values and clears persisted state
   *
   * @return {undefined}
   */
  reset() {
    super.reset();
    localStorage.removeItem('kewtState');
    return this;
  }
  /**
   * render - renders the style tag with styles to document head
   *
   * @return {undefined}
   */
  render() {
    if (!this.sheet || !this.node) {
      this.node = document.createElement('style');
      this.node.appendChild(document.createTextNode(''));
      document.head.appendChild(this.node);
      this.sheet = this.node.sheet;
      this.sheet.insertRule('::cue {}', 0);
    }
    const {
      font,
      fontSize,
      fontEdge,
      edgeHighlight: eColor,
      edgeOpacity: eOpacity,
      textColor: fColor,
      textOpacity: fOpacity,
      backgroundColor: bColor,
      backgroundOpacity: bOpacity,
    } = this.get();
    const {
      FONT_SIZES,
      RGB_COLORS,
    } = KewtDOM;
    this.sheet.cssRules[0].style.fontFamily = font;
    this.sheet.cssRules[0].style.fontSize = FONT_SIZES[fontSize];
    this.sheet.cssRules[0].style.color = `rgba(${RGB_COLORS[fColor]},${fOpacity / 100})`;
    this.sheet.cssRules[0].style.backgroundColor = `rgba(${RGB_COLORS[bColor]},${bOpacity / 100})`;
    this.sheet.cssRules[0].style.textShadow = KewtDOM.getShadow(fontEdge, eColor, eOpacity);
    return this;
  }
  /**
   * persist - persists the current Kewt state to localstorage
   *
   * @return {undefined}
   */
  persist() {
    localStorage.setItem('kewtState', JSON.stringify(super.get()));
    return this;
  }
}

KewtDOM.RGB_COLORS = {
  black: '0,0,0',
  blue: '0,0,255',
  green: '0,128,0',
  teal: '0,128,128',
  red: '255,0,0',
  purple: '128,0,128',
  yellow: '255,255,0',
  white: '255,255,255',
};

KewtDOM.FONT_SIZES = {
  1: '27px',
  2: '33px',
  3: '39px',
  4: '45px',
  5: '51px',
  6: '56px',
};

module.exports = KewtDOM;
