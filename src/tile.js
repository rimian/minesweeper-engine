const StateMachine = require('javascript-state-machine');

const Tile = StateMachine.factory({
  init: 'default',
  transitions: [
    { name: 'clear', from: 'default', to() { return this.armed ? 'detonated' : 'cleared' } },
    { name: 'flag', from: 'default', to: 'flagged' },
    { name: 'unflag', from: 'flagged', to: 'default' }
  ],
  data: {
    armed: false,
  },
  methods: {
    arm() { this.armed = true },
    cleared() { return this.state == 'cleared' },
    detonated() { return this.state == 'detonated' },
    flagged() { return this.state == 'flagged' }
  }
})

module.exports = Tile
