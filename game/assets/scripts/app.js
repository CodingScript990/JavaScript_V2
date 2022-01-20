const ATTACK_VALUE = 10; // attack damage(player)
const STRONG_ATTACK_VALUE = 17; // attack damage(strong)
const MONSTER_ATTACK_VALUE = 14; // attack damage(monster)
const HEAL_VALUE = 20; // heal (monster,player)

const enteredValue = prompt("Maximum life for you and the monster.", "100"); // hp 100

let chosenMaxLife = parseInt(enteredValue); // enteredValue (maximum hp)

// What if it happens for isNaN or 0 ?
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife; // Start Monster HP(100)
let currentPlayHealth = chosenMaxLife; // Start player HP(100)
let hasBonusLife = true; // bonuse life

adjustHealthBars(chosenMaxLife); // hp

// reset function
function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

// finish round(play game)
function endRound() {
  const initialPlayerHealth = currentPlayHealth; // initial player hp
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayHealth -= playerDamage;
  // Monster hp zero status(message) || Player hp zero statue(message)
  if (currentMonsterHealth <= 0 && currentPlayHealth > 0) {
    alert("You won!"); // player win
  } else if (currentPlayHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost!"); // monster win
  } else if (currentPlayHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw!"); // player (hp=0) === monster (hp=0)
  }

  // reset game
  if (currentMonsterHealth <= 0 || currentPlayHealth <= 0) {
    reset();
  }

  // Bonuse play game(player life)
  if (currentPlayHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife(); // remove bonuse life
    currentPlayHealth = initialPlayerHealth; // initial player hp
    setPlayerHealth(initialPlayerHealth); // bonuse player hp
    alert("You would be dead but the bonus life saved you!"); // msg
  }
}

// attack monster Function(Mode)
function attackMonster(mode) {
  let maxDamage; // max damage
  // mode === 'attack'
  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else if (mode === "STRONG_ATTACK") {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const damage = dealMonsterDamage(maxDamage); // max damage
  currentMonsterHealth -= damage; // hp(Monster)
  endRound(); // finish round
}

// attack function(Monster)
function attackHandler() {
  attackMonster("ATTACK");
}

// strong function(Monster)
function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}

// heal function(Player)
function healPlayerHandler() {
  let healValue; // healValue

  // player increase heal hp+ but not decrease player hp-
  if (currentPlayHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than your max initial health.");
    healValue = chosenMaxLife - currentPlayHealth;
  } else {
    healValue = HEAL_VALUE;
  }

  increasePlayerHealth(healValue);
  currentPlayHealth += healValue; // increase Player HP++
  endRound();
}

attackBtn.addEventListener("click", attackHandler); // attack function
strongAttackBtn.addEventListener("click", strongAttackHandler); // strong attack function
healBtn.addEventListener("click", healPlayerHandler); // heal function
