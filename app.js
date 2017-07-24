new Vue({
  el: '#app',
  data: {
    gameStarted: false,
    humanHealth: 100,
    monsterHealth: 100,
    eventsList:[]
  },
  computed: {

  },
  methods : {
    gameReset: function(){
      this.monsterHealth = 100;
      this.humanHealth = 100;
      this.eventsList = [];
    },
    calcDamage: function(type){
      let max;
      let min;
      type ===
        'normal'
        ? (max = 10, min = 1)
          : type === 'special'
          ? (max = 20, min = 10)
            :(max=10, min=5);
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    },
    startGame: function(){
      this.gameReset();
      this.gameStarted = true;
    },
    getHumanHealth: function() {
      return {width: this.humanHealth + '%'};
    },
    getMonsterHealth: function() {
      return {width: this.monsterHealth + '%'};
    },
    attackMonster: function(type) {
      let humanAttackDamage = this.calcDamage(type);
      let monsterAttackDamage = this.calcDamage('monster')
      this.monsterHealth -= humanAttackDamage;
      this.humanHealth -= monsterAttackDamage;
      this.eventsList.push(`PLAYER HITS MONSTER FOR ${humanAttackDamage}`);
      this.eventsList.push(`MONSTER HITS PLAYER FOR ${monsterAttackDamage}`);
    },
    checkGameOver: function() {
    if((this.monsterHealth <= 0) || (this.humanHealth <= 0)) {
        this.gameStarted = false;
        if(confirm("Press Ok if you want to start a new game!") === true) {
          this.startGame();
        }
      }
    },
    healHuman: function() {
      this.humanHealth <= 90 ? this.humanHealth += 10 : this.humanHealth = 100;
      this.eventsList.push(`PLAYER USES HEAL`);
      let monsterAttackDamage = this.calcDamage('monster');
      this.humanHealth -= monsterAttackDamage;
      this.eventsList.push(`MONSTER HITS PLAYER FOR ${monsterAttackDamage}`);
    },
    computeLogClass: function(item) {
      return item[0] === 'P' ? 'player-turn' : 'monster-turn';
    }
  }
});