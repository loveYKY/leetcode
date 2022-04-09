
var trap = function(height) {
    // left_max：左边的最大值，它是从左往右遍历找到的
    // right_max：右边的最大值，它是从右往左遍历找到的
    // left：从左往右处理的当前下标
    // right：从右往左处理的当前下标
    // 定理一：在某个位置i处，它能存的水，取决于它左右两边的最大值中较小的一个。
    // 定理二：当我们从左往右处理到left下标时，左边的最大值left_max对它而言是可信的，但right_max对它而言是不可信的。（见下图，由于中间状况未知，对于left下标而言，right_max未必就是它右边最大的值）
    // 定理三：当我们从右往左处理到right下标时，右边的最大值right_max对它而言是可信的，但left_max对它而 言是不可信的。
    
    let left = 0
    let right = height.length-1
    let left_max = height[left]
    let right_max = height[right]
    let res = 0
    while(left<right) {
        if(left_max<right_max) {
            left++
            res += Math.max(0,left_max-height[left])
            left_max = Math.max(left_max,height[left])
        }else {
            right--
            res += Math.max(0,right_max-height[right])
            right_max = Math.max(right_max,height[right])
        }
    }
    return res
};