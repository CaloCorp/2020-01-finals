const makeRunOn = function (str) {
  let result = '';
  for(let i = 0; i < str.length; i++) {
    if (str[i] === '.') {
      result += ","
    } else {
      result += str[i]
    }
  }
  if (result.endsWith(',')) {
    result = result.slice(0, result.length-1);
    result += '.'; 
  }
  return result  
}

const stringOut = function(str) {
  let result = '';
  for(let i = 0; i < str.length; i++) { 
    if (str[i] !== ' ') {
      result += str[i] + ' '
    } else if (str[i] === ' ') {
    } else {
      result += str[i]
    }
  }
  if (result.endsWith(' ')) {
    result = result.slice(0, result.length-1);
  }
  return result;
}
const nightOwls = function (array){
  let result =[]
for (let i=0;i< array.length; i++)
{
if (array[i].asleep === false && array[i].localTime >= 100 && array[i].localTime <=400){


result.push(array[i])
}


}
return result
}
const totalScore = function (array) {
  let result = 0;
  for(let i = 0; i < array.length; i++) {
    if (array[i].multiplier === 1) {
      result += array[i].score;
    } else if (array[i].multiplier === undefined) {
      result += array[i].score;
    } else {
      result += array[i].score * array[i].multiplier
    }
  }
  return result;
}
const getToBed = function (array){
let result = []
result = array.slice()
  for(let i = 0; i < result.length; i++){

    if(result[i].asleep === true || result[i].asleep === false && result[i].localTime >= 100 && result[i].localTime <=400){
      result[i].asleep = true
    }
  }

return result
}

const findIndices= function(array, callback){

 return array.filter(callback)
}

const Faqtory = function(){

  return {

    questions: [],
    addQuestion: function (text){
const question = { text: text,
  id: this.questions[this.questions.length-1],
  answered: false 

}
  this.questions.push(question)
    }
  }
  
}

if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof stringOut === 'undefined') {
  stringOut = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  stringOut,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
