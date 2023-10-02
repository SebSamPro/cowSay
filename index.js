const { user } = require("./information")

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: `I'm ${user.name} a moooodule in ${user.campus}`,
    e: "oO",
    T: "U "
}));

