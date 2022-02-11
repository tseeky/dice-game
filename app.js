//Тоглогчийн ээлжийг хадгалах хувьсагч.
var activePlayer = 0;

//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч.
 var score = [0,0];

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
//Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
//var diceNumber = Math.floor(Math.random() * 6) + 1;

 //Программын эхлэл
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;

  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
var diceDoc = document.querySelector('.dice');
diceDoc.style.display = "none";


  //Event Roll Dice click хийгдэх үед шооны зургийг харгалзуулан гаргана.
  document.querySelector('.btn-roll').addEventListener('click', function() {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDoc.style.display = "block";
    diceDoc.src =  "dice-" + diceNumber + ".png";
  });