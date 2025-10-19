  const myElement = document.createElement('div');
  document.body.appendChild(myElement);
  let correct = false;
  let person, personName;
  while(!correct){
    person= prompt("Будь ласка, введіть своє ім'я", "Артем");
    personName = person.trim();
    if(personName ==""){
      person= prompt("Будь ласка, введіть своє ім'я", "Артем");
    }
    else correct = true; 
  }
  const text = document.createElement('p');
  text.innerHTML = "Зіграємо, "+ person+ '?';
  myElement.appendChild(text);

  let computer = 0;
  let player = 0;
  const score = document.createElement('p');
  score.innerHTML = "Рахунок: "+ player+ " – " + computer;
  myElement.appendChild(score);

  myElement.appendChild(document.createElement('br'));

  const div = document.createElement('div');
  myElement.appendChild(div);
  div.classList.add('contain');

  const user = document.createElement('div');
  div.appendChild(user);
  user.classList.add('userComputer');

  const button = document.createElement('button');
  button.type = "button";
  button.innerText = "Згенерувати!";
  div.appendChild(button);

  const comp = document.createElement('div');
  div.appendChild(comp);
  comp.classList.add('userComputer');

  user.innerHTML = "Твоє число:<br>";
  comp.innerHTML = "Число комп'ютера:<br>";

  let playerNum;
  let compNum;

  score.style.cssText = 'color: red'

  button.onclick = () => calculate();
  function calculate() {
    user.classList.remove("anim");
    comp.classList.remove("anim");
    if(computer ==3 || player == 3){
      computer = 0;
      player = 0;
    }
    playerNum = Math.floor((Math.random() * 10) + 1);
    compNum = Math.floor((Math.random() * 10) + 1);
    setTimeout(() => {
    comp.classList.add("anim");
    user.classList.add("anim");
    }, 10);
    user.innerHTML = "Твоє число:<br>"+playerNum;
    comp.innerHTML = "Число комп'ютера:<br>"+compNum;
    if(playerNum>compNum){
      player++;
      user.style.cssText = 'background: linear-gradient(to right, rgb(0, 100, 0), rgb(0, 200, 0), rgb(144, 238, 144))';
      comp.style.cssText = 'background: linear-gradient(to right, rgb(139, 0, 0), rgb(255, 0, 0), rgb(255, 80, 80), rgb(255, 160, 160))';
    }
    else if(playerNum<compNum){
      computer++;
      comp.style.cssText = 'background: linear-gradient(to right, rgb(0, 100, 0), rgb(0, 200, 0), rgb(144, 238, 144))';
      user.style.cssText = 'background: linear-gradient(to right, rgb(139, 0, 0), rgb(255, 0, 0), rgb(255, 80, 80), rgb(255, 160, 160))';
    } 
    else {
      comp.style.cssText = 'background: linear-gradient(to right, #fda085, #f6d365)';
      user.style.cssText = 'background: linear-gradient(to right, #fda085, #f6d365)';
    }
    score.innerHTML = "Рахунок: "+ player+ " – " + computer;
    if(computer == 3) score.innerHTML += "<br>На жаль, Ви програли(";
    else if(player == 3) score.innerHTML += "<br>Вітаю, Ви перемогли!";
  }