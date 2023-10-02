const info = require('./information');

const cowsay = require (("cowsay"));

console.log(cowsay.say({
    text : `Hi, my name is ${info.name} and i'm on the bootcamp of ${info.bootcamp} !`,
    e : "oO",
    T : "U"
}));
