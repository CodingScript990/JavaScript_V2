const ATTACK_VALUE = 10; // attack damage(player)
const STRONG_ATTACK_VALUE = 17; // attack damage(strong)
const MONSTER_ATTACK_VALUE = 14; // attack damage(monster)
const HEAL_VALUE = 20; // heal (monster,player)

const MODE_ATTACK = "ATTACK"; // MODE_ATTACK = 0
const MODE_STRONG_ATTACK = "STRONG_ATTACK"; // MODE_STRONG_ATTACK = 1
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

const enteredValue = prompt("Maximum life for you and the monster.", "100"); // hp 100

let chosenMaxLife = parseInt(enteredValue); // enteredValue (maximum hp)
let battleLog = []; // Array value(attack)

// What if it happens for isNaN or 0 ?
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife; // Start Monster HP(100)
let currentPlayHealth = chosenMaxLife; // Start player HP(100)
let hasBonusLife = true; // bonuse life

adjustHealthBars(chosenMaxLife); // hp

function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };

  // Switch
  switch (ev) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry = {
        event: ev,
        value: val,
        target: "MONSTER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry = {
        event: ev,
        value: val,
        target: "PLAYER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry = {
        event: ev,
        value: val,
        target: "PLAYER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    case LOG_EVENT_GAME_OVER:
      logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    default:
      logEntry = {};
      break;
  }

  // if ~ else
  /*
  if (ev === LOG_EVENT_PLAYER_ATTACK) {
    logEntry.target = "MONSTER";
  } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logEntry.target = "MONSTER";
  } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
    logEntry.target = "PLAYER";
  } else if (ev === LOG_EVENT_PLAYER_HEAL) {
    logEntry.target = "PLAYER";
  } else if (ev === LOG_EVENT_GAME_OVER) {
  }
  */
  battleLog.push(logEntry);
}

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
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentPlayHealth,
    currentMonsterHealth
  );

  // Monster hp zero status(message) || Player hp zero statue(message)
  if (currentMonsterHealth <= 0 && currentPlayHealth > 0) {
    alert("You won!"); // player win
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "PLAYER WON",
      currentMonsterHealth,
      currentPlayHealth
    );
  } else if (currentPlayHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost!"); // monster win
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "MONSTER WON",
      currentMonsterHealth,
      currentPlayHealth
    );
  } else if (currentPlayHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw!"); // player (hp=0) === monster (hp=0)
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "A DRAW",
      currentMonsterHealth,
      currentPlayHealth
    );
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
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE; // max damage
  const logEvent =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK; // play damage
  // mode === 'attack'
  // if (mode === MODE_ATTACK) {
  //   maxDamage = ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK;
  // } else if (mode === MODE_STRONG_ATTACK) {
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  // }

  const damage = dealMonsterDamage(maxDamage); // max damage
  currentMonsterHealth -= damage; // hp(Monster)
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayHealth);
  endRound(); // finish round
}

// attack function(Monster)
function attackHandler() {
  attackMonster(MODE_ATTACK);
}

// strong function(Monster)
function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
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
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayHealth
  );
  endRound();
}

// printLogHandler
function printLogHandler() {
  // for 1. [for]
  // for (let i = 0; i < battleLog.length; i++) {
  //   console.log(battleLog[i]);
  // }

  // for 2. [for-of]
  let i = 0; // initialVal = 0;
  /* 
  for (const logEntry of battleLog) {
    console.log(logEntry);
    console.log(i);
    i++; // 0 + 1 / 1 + 1 / 2 + 1 ... increase
  }
  */

  // for 3. [for-in]
  for (const logEntry of battleLog) {
    console.log(`#${i++}`); // increase
    for (const key in logEntry) {
      // key in value
      console.log(`${key} => ${logEntry[key]}`);
    }
  }

  // while & do-while loops
  let j = 0; // initialVal = 0;

  // while
  while (j < 3) {
    console.log(j); // But if j = 3 => 3 < 3
    j++; // Not print!
  }

  // do-while
  do {
    console.log(j); // But if j = 3 => 3 < 3
    j++; // It's ok print 3!
  } while (j < 3);
}

attackBtn.addEventListener("click", attackHandler); // attack function
strongAttackBtn.addEventListener("click", strongAttackHandler); // strong attack function
healBtn.addEventListener("click", healPlayerHandler); // heal function
logBtn.addEventListener("click", printLogHandler); // print function
