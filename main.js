const makeRunOn= function (str){
for(let i=0; i < str.length-1; i++)

{
  
  if (str[i] = '.'){

  str[i] = ','
 

}
return str 
}
}

const stringOut= function(str){
  for(let i=0; i < str.length; i++)
{ if (str[i]!== ' '){


str[i]+= ' '

}

return str 
}
}
const nightOwls = function (array){
let copyOfArray= []

copyOfArray= array.slice()
let resultArray=[]
for (let i=0;i< copyOfArray.length; i++)
{
if (copyOfArray[i].asleep = false && copyOfArray[i].localTime >= 100 && copyOfArray[i].localTime <=400){

resultArray.push([i])
}


}

return resultArray
}
const totalScore = function (){}


const Faqtory = function(){

  return {

    questions: [],
    addQuestion: function (str){
const question = {str}
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
