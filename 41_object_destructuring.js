// object destructuring
const band = {
    bandName : "Led zeppeline",
    famousSong : "stairway to heaven",
    year : 1968,
    anotherSong : "KASHMIR",

}

const {bandName:var1, famousSong:var2,...restProp} = band;
console.log(var1, restProp)