const StateMachine = require('javascript-state-machine');

const Tile = StateMachine.factory({
  init: 'default',
  transitions: [
    { name: 'clear', from: 'default', to() { return this.armed ? 'detonated' : 'cleared' } },
    { name: 'flag', from: 'default', to: 'flagged' },
    { name: 'unflag', from: 'flagged', to: 'default' }
  ],
  data(x, y, i) {
    return {
      id: i,
      x: x,
      y: y,
      armed: false,
      danger: 0,
    }
  },
  methods: {
    arm() { this.armed = true },
    cleared() { return this.state == 'cleared' },
    detonated() { return this.state == 'detonated' },
    flagged() { return this.state == 'flagged' },
    moreDanger() { this.danger++ }
  }
})

module.exports = Tile
