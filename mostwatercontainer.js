// 11. Container With Most Water
// Medium

// 21282

// 1134

// Add to List

// Share
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
 

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

var maxArea = function (height) {
  // Maximum area will be stored in this variable
  let maximumArea = Number.MIN_SAFE_INTEGER;
  // Left and right pointers
  let left = 0;
  let right = height.length - 1;
  // Loop until left and right meet
  while (left < right) {
      // Shorter pole/vertical line
      let shorterLine = Math.min(height[left], height[right]);
      // Update maximum area if required
      maximumArea = Math.max(maximumArea, shorterLine * (right - left));
      // If there is a longer vertical line present
      if (height[left] < height[right]) {
          left++;
      } else {
          right--;
      }
  }
  return maximumArea;
};

console.log(maxArea([1,1]));

height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height));