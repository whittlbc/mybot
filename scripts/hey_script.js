module.exports = {
  pattern: /hey/i,
  onMatch: function (matches, text) {
    this.respond('HEARD A MATCH!');
  }
};