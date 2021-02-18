/*******************
 * YOUR CODE HERE! *
 *******************/
function yell(x){
  return x + '!';
}

function getFirstCharacter(y){
  return y[0];
}

function getLastCharacter(z){
  return z[z.length - 1];
}

function getOneCharacter(a,b){
  return a[b];
}

function getTwoCharacters(d, e, f){
  return d[e]+d[f];
}

function makeCapitalized(m){
  return m.toUpperCase();
}

function yellLouder(n){
  return n.toUpperCase() +'!!!';
}

function getInitials(h){
  const i = h.indexOf(' ');
  return h[0] + '.' + h[i+1] + '.';
}







/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
