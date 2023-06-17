const root = document.getElementById('root')
const MyName = document.querySelector('MyName')

const tagMaker = function (tagName,innerText,parent,className) {
  let a = document.createElement(tagName)
  a.innerText = innerText
  a.setAttribute('class', className);
  return parent.appendChild(a)
}
tagMaker('h1', '- 임지성 -', root, 'MyName')
tagMaker('div', '안녕하세요', root)
tagMaker('div', ' js ts react git 블라블라', root)
tagMaker('div', ' 이메일 전화번호 ', root)
tagMaker('div', ' footer ', root)
tagMaker('div', ' ;', root)

