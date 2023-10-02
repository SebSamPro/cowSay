const { user } = require("./information")

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: `I'm ${user.name} from ${user.campus} campus`,
    e: "oO",
    T: "U "
}));

