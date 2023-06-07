

var img = document.querySelectorAll("img")[0];
var span = document.querySelectorAll('span')[0];
var btnDiv = document.querySelectorAll('.btn-div')[0];
console.log(btnDiv)
var counts = 0;
var score = 0;
console.log(img);
console.log(img.src);



function match(userSelect) {
    var ranNum = Math.ceil(Math.random() * 6);
    console.log(ranNum);

    span.innerHTML = ++counts
    console.log(counts, 'count')

if (ranNum === 1) {
    img.src = "./Images/1.jpg";
  } else if (ranNum === 2) {
    img.src = "./Images/2.jpg";
  }else if (ranNum === 3) {
      img.src = "./Images/3.jpg";
    }else if (ranNum === 4) {
      img.src = "./Images/4.jpg";
    }else if (ranNum === 5) {
      img.src = "./Images/5.jpg";
    }else if (ranNum === 6) {
      img.src = "./Images/6.jpg";
    }   

    if(userSelect == ranNum){
        score = ++score
    }

    if(counts === 10){
        btnDiv.innerHTML = '<h1> Your Success Rate is ' + score / 10 * 100 + '% </ h1>'  
        btnDiv.style.backgroundColor = "#E7E9EB"
    }
    console.log(score, 'socre')
}
