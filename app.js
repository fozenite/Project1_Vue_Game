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
      type === 'normal' ? this.monsterHealth -=10 : this.monsterHealth -=20;
      this.humanHealth -= 5;

    },
    checkGameOver: function() {
    if((this.monsterHealth <= 0) || (this.humanHealth <= 0)) {
        this.gameStarted = false;
        alert('Game Over');
      }
    },
    healHuman: function() {
      this.humanHealth <= 90 ? this.humanHealth += 10 : this.humanHealth = 100;
    }
  },

});