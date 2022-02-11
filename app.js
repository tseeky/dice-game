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
    //1-6 хоорондох тоог санамсагүйгээх гаргаж ирнэ.
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //Шооны зургийг гаргаж ирнэ.
    diceDoc.style.display = "block";
 
// Буусан санамсаргүй тоонд харгалзах шооны зургийг гаргаж ирнэ. 
    diceDoc.src =  "dice-" + diceNumber + ".png";

if (diceNumber !== 1 ) {
    // 1- ээс  ялгаатай тоо буулаа. Тоглогчид нэмж өглөө
    roundScore = roundScore + diceNumber;
    document.getElementById('current-' + activePlayer).textContent = roundScore;  
} else {
    //Тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
    roundScore = 0 ;
    document.getElementById('current-' + activePlayer).textContent = 0;
    // Тоглогчийн ээлжийг энэ хэсэгт сольно.
    // Хэрэв идэвхтэй тоглогч 0 байвал идэвхтэй тоглогчийг 1 нэг болгоно.
    // Үгүй бол идэвхтэй тоглогчийг 0 болго:
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0)
//    Улаан цэгийг шилжүүлэхЫ
document.querySelector('.player-0-panel').classList.toggle("active");
document.querySelector('.player-1-panel').classList.toggle("active");
//Шоог түр алга болгон
diceDoc.style.display = "none";
}
});