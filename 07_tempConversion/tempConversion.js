const ftoc = function(numFaren) {
  let ansCel = (numFaren - 32) * 5 / 9;

  if (ansCel == 0) {
    return Math.round(ansCel);
  } else {
    return ansCel.toFixed(1);
  }
};

const ctof = function(numCel) {
  let ansFaren = (numCel * 9 / 5) + 32;

  if (ansFaren == 0) {
    return Math.round(ansFaren);
  } else {
    return ansFaren.toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
