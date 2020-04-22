function countChars(nums) {
    let count = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i+1]) count++;
    }
    return count;
}

function reduceDuplicate(nums, numIndex) {
	let delCount = 0;
    for (let i = numIndex; i < nums.length - 1; i++) {
        nums[i] !== nums[i + 1] ? break : delCount++;
    }
    nums.splice(numIndex + 1, delCount);
}

var removeDuplicates = function(nums) {
    const count = countChars(nums);
    for (let i = 0; i < count; i++) {
        reduceDuplicate(nums, i);
    }
    return nums.length;
};
