const root = document.getElementById('root')

const tagMaker = function (tagName,innerText,appen) {
  let a = document.createElement(tagName)
    a.innerText = innerText
  return appen.appendChild(a)
}

console.log(tagMaker('div', 'ㅎㅇ', root))
  console.log(root)
