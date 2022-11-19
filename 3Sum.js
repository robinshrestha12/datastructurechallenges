// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.
//https://dev.to/urfan/leetcode-3sum-with-javascript-4b8j
var threeSum = function(array) {
  array.sort((a,b) => a - b);
 const triplets = [];

 for(let i=0; i < array.length - 2; i++){
     if(array[i] != array[i-1]){ // making sure our solution set does not contain duplicate triplets
         let left = i + 1;
       let right = array.length - 1;

         while (left < right){
             const currentSum = array[i] + array[left] + array[right];
             if (currentSum === 0){
                 triplets.push([array[i], array[left], array[right]]);
                 while(array[left] == array[left + 1]) left ++
                 while(array[right] == array[right - 1]) right -- // making sure our solution set does not contain duplicate triplets
                 left ++;
                 right --;
             } else if(currentSum < 0) {
                 left ++
             } else if(currentSum > 0){
                 right --
             }
         }
     }
 }
 return triplets
};

nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums));