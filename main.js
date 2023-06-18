const root = document.getElementById('root')

const tagMaker = function (tagName, innerText, parent, className) {
  let a = document.createElement(tagName)
  a.innerText = innerText
  a.setAttribute('class', className)
  return parent.appendChild(a)
}
tagMaker('h1', '- 임지성 -', root, 'MyName')

tagMaker('div', '안녕하세요', root)
tagMaker('div', ' js ts react git 블라블라', root)
tagMaker('div', ' verstad821@gmail.com ', root)
tagMaker('div', '  ', root)

const MyName = document.querySelector('.MyName')
MyName.style.display = 'flex'
MyName.style.justifyContent = 'center'
