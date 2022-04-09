// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。


// 思路:   1. 利用map记录数值的位置
//         2. 给数组排序，使得数组符合升序数组
//         3. 利用双指针搜素target

var twoSum = function(nums, target) {
    let arr = nums.map((item,index)=>{
        return {
            val:item,
            index:index
        }
    })

    arr.sort((a,b)=>{
        if(a.val>b.val) {
            return 1
        }else {
            return -1
        }
    })

    let left = 0
    let right = arr.length-1

    while(left<right) {
        if(arr[left].val + arr[right].val < target) {
            left++
        }
        if(arr[right].val + arr[left].val > target) {
            right--
        }
        if(arr[right].val + arr[left].val == target) {
            return [arr[left].index,arr[right].index]
        }
    } 

    return []
};