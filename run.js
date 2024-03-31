const nums = [1, 1, 1, 2, 2, 3];
let map = new Map();
let len = nums.length;

for (let i = 0; i < nums.length; i++) {
  if (!map.has(nums[i])) {
    map.set(nums[i], 1);
  } else {
    map.set(nums[i], map.get(nums[i]) + 1);
  }
}
const x = [];
const k = 2;

for (let i = 0; i <= nums.length; i++) {
  x[i] = [];
}

for (let i of map) {
  let f = i[1];
  x[f].push(i[0]);
}

const res = [];

for (let i = len; i > 0; i--) {
  if (x[i]) {
    for (let j of x[i]) {
      if (res.length == k) {
        break;
      }
      res.push(j);
    }
  }
}
console.log(res);
