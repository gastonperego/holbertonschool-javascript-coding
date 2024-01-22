#!/usr/bin/node

const request = require('request');

request.get(process.argv[2], (err, response, body) => {
  if (err) throw err;
  const data = JSON.parse(body);
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  let num6 = 0;
  let num7 = 0;
  let num8 = 0;
  let num9 = 0;
  let num10 = 0;
  for (const task of data) {
    if (task.completed === true) {
      if (task.userId === 1) {
        num1 += 1;
      }
      if (task.userId === 2) {
        num2 += 1;
      }
      if (task.userId === 3) {
        num3 += 1;
      }
      if (task.userId === 4) {
        num4 += 1;
      }
      if (task.userId === 5) {
        num5 += 1;
      }
      if (task.userId === 6) {
        num6 += 1;
      }
      if (task.userId === 7) {
        num7 += 1;
      }
      if (task.userId === 8) {
        num8 += 1;
      }
      if (task.userId === 9) {
        num9 += 1;
      }
      if (task.userId === 10) {
        num10 += 1;
      }
    }
  }
  const nums = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];
  const obj = {};
  let i = 1;
  while (i < 100) {
    if (nums[i - 1] > 0) {
      obj[i] = nums[i - 1];
    }
    i++;
  }
  console.log(obj);
});
