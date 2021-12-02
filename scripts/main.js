// Image switcher code

let myImage = document.querySelector('img');
// decumentは組み込みオブジェクト。
// ブラウザが表示しているページ。DOMとも呼ぶ。Document Object Model の略。
// querySelector はページの一部（HTML要素）を選ぶ関数。

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/myimage.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
console.log(myHeading);

function setUserName() {
  let myName = prompt('名前を入力してください');
  //promptは、組み込みの関数。promt (pop-up) Windowを表示して、ユーザ入力をさせる。
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    // 入力データを、特別な場所（変数ではない、ファイルなどに相当）に保存する。
    myHeading.innerHTML = 'こんにちは, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  // 以前に特別な場所（ファイルなど）保存していた名前があれば、それを使う。
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'さようなら, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
