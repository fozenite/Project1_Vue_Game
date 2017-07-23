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
      this.monsterHealth -= this.calcDamage(type);
      this.humanHealth -= this.calcDamage('monster');

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
    }
  },

});