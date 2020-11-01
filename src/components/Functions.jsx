import preload from "./Apprentice_TandemFor400_Data.json";

// function adds the correct answer to the array of incorrect randomly
export const updateAnswers = (incorrect, correct) => {
  let startIndex = Math.floor(Math.random() * 4);
  let deleteCount = 0;
  let arr = incorrect;
  let newE = correct;
  arr.splice(startIndex, deleteCount, newE);
  return arr;
};
preload.forEach((obj) => updateAnswers(obj.incorrect, obj.correct));
export const questions = preload;

// functionn gets random questions within the array of questions
export const getRandom = (arr, n) => {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    let x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

// setTimeOut fucntions
let timer;
export const setTimer = (func) =>
  (timer = setTimeout(() => {
    func();
  }, 500));
export const clearTimer = () => clearTimeout(timer);
