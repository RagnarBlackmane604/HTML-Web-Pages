import { createContext, useContext, useState } from "react";

export const challenges = [
  {
    id: 145,
    title: "Two-sum",
    description: `
### Problem Statement:
Given an array of integers \`nums\` and an integer \`target\`, return
indices of the two numbers such that they add up to \`target\`. You
may assume that each input would have exactly one solution, and you
may not use the same element twice. You can return the answer in any
order.
### Example:
Input: \`nums = [2,7,11,15]\`, \`target = 9\`
Output: \`[0,1]\`
Explanation: \`nums[0] + nums[1] = 2 + 7 = 9\`, so the answer is
\`[0,1]\`.
### Constraints:
- \`2 <= nums.length <= 10^4\`
- \`-10^9 <= nums[i] <= 10^9\`
- \`-10^9 <= target <= 10^9\`
- Only one valid answer exists.
### Approach:
A brute force approach involves iterating through the array and
checking every pair of elements to see if their sum equals the
target. However, this approach would have a time complexity of

O(n^2). A more efficient approach involves using a hash table (or
dictionary in Python) to store the indices of the elements as we
iterate through the array. This way, we can check if the complement
of the current element (target - current element) exists in the hash
table in constant time, reducing the time complexity to O(n).
`,
    difficulty: "Easy",
    category: "arrays",
    status: "Completed",
    tests: [],
  },
  {
    id: 146,
    title: "Fibonacci series",
    description: `
### Problem Statement:
Given a number \`n\`, return the first \`n\` numbers of the Fibonacci sequence.  
The Fibonacci sequence is defined as:

- \`F(0) = 0\`
- \`F(1) = 1\`
- \`F(n) = F(n - 1) + F(n - 2)\` for \`n > 1\`

### Example:
Input: \`n = 5\`  
Output: \`[0, 1, 1, 2, 3]\`

### Constraints:
- \`0 <= n <= 50\`

### Approach:
You can solve this using either:
- An iterative method with a loop (O(n) time and space)
- Recursion (less efficient)
- Memoization or dynamic programming to improve recursion
`
,
    category: "Data structure",
    difficulty: "Moderate",
    status: "Attempted",
    solutionRate: "45%",
    tests: [],
  },
  {
    id: 147,
    title: "Skyline problem",
    description: `
### Problem Statement:
You are given a list of buildings in the form of \`[left, right, height]\`.  
Your task is to return the skyline formed by these buildings as a list of key points \`[x, height]\`.

A building is represented by a triple: left x-coordinate, right x-coordinate, and height.

### Example:
Input: \`[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]\`  
Output: \`[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]\`

### Constraints:
- \`1 <= buildings.length <= 10^4\`
- \`0 <= left < right <= 2^31 - 1\`
- \`1 <= height <= 10^4\`

### Approach:
This problem can be solved efficiently using a **sweep line algorithm** and a max-heap to keep track of active buildings.  
The key challenge is managing overlapping intervals and detecting height changes.
`
,
    category: "Data structure",
    difficulty: "Moderate",
    status: "Pending",
    solutionRate: "45%",
    tests: [],
  },
  {
    id: 148,
    title: "NP-hard scheduling",
    description: `
### Problem Statement:
You are given a set of jobs, each with a start time, end time, and profit.  
Return the maximum profit you can achieve by scheduling non-overlapping jobs.

This problem is a simplified form of task scheduling, which is known to be NP-hard.

### Example:
Input:  
\`startTime = [1, 2, 3, 3]\`  
\`endTime = [3, 4, 5, 6]\`  
\`profit = [50, 10, 40, 70]\`  
Output: \`120\`  
Explanation: Schedule jobs 1 and 4 for max profit (50 + 70).

### Constraints:
- \`1 <= startTime.length == endTime.length == profit.length <= 5 * 10^4\`
- \`1 <= startTime[i] < endTime[i] <= 10^9\`
- \`1 <= profit[i] <= 10^4\`

### Approach:
Use **dynamic programming with binary search** to find the next non-overlapping job for each current job.  
Sort by end time and use a DP array to store the max profit up to each job.
`
,
    category: "Algorithms",
    difficulty: "Hard",
    status: "Pending",
    solutionRate: "20%",
    tests: [],
  },
];

const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
  const [currentChallenge, setCurrentChallenge] = useState(null);

  const selectChallengeById = (id) => {
    const found = challenges.find((ch) => ch.id === Number(id));
    setCurrentChallenge(found || null);
  };

  return (
    <ChallengeContext.Provider
      value={{ currentChallenge, selectChallengeById }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};

export const useChallenge = () => useContext(ChallengeContext);
