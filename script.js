let carsSelect = document.getElementById("select-car");
let valor = document.getElementById("value-input");
let balance = 100;
const redBull = document.getElementById("redBull");
const ferrari = document.getElementById("ferrari");
const mcLaren = document.getElementById("mclaren");
const mercedes = document.getElementById("mercedes");
const astonMartin = document.getElementById("aston-martin");

const positions = [0, 0, 0, 0, 0];
const cars = [redBull, ferrari, mcLaren, mercedes, astonMartin];



function init() {
  const balanceValor = document.getElementById("balance");
  balanceValor.innerText = "Balance: R$ " + balance;
  const bet = document.getElementById("button-bet");
  bet.addEventListener("click", function(){
    if((valor.value >= 5) && (carsSelect.value != "select")){
      function raceCar() {
        for (let i = 0; i < 5; i++) {
          positions[i] += randomValue();
          cars[i].style.marginLeft = positions[i] + "px";
          cars[i].style.width = "40px";
        }
      }
      
      function checkWinner(){
        for (let i = 0; i < positions.length; i++){
          if(positions[i] >= 640){
            clearInterval(startInterval);
            clearPositions();
            if(cars[i].id == carsSelect.value){
              alert(cars[i].id + " won a race! \nYour bet was the winner, Congratulations!");                          
              balance = (valor.value * 2) + balance;
              balanceValor.innerText = "Balance: R$ " + balance;
            }else{
              alert(cars[i].id + " won the race! \nYou lost!");
              balance -= valor.value;
              balanceValor.innerText = "Balance: R$ " + balance;
            }
            break;
          }
        }
      }
      
      function clearPositions(){
        for (let i = 0; i < 5; i++) {
          positions[i] = 0;
          cars[i].style.marginLeft = positions[i] + "px";
          cars[i].style.width = "40px";
        }
      }
      const startInterval = setInterval(() => {
        raceCar();
        checkWinner();
      }, 250);
    }
  })
}

function randomValue() {
  return Math.random() * 10 + 1;
}

