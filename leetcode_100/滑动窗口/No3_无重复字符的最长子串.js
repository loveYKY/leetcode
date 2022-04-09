//给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。


// 1. 利用滑动窗口记录不重复的最长子串

var lengthOfLongestSubstring = function(s) {
    let window = []
    let res = 0

    for(let i=0;i<s.length;i++) {
        if(!window.includes(s[i])) {
            //不存在就push
            window.push(s[i])
            //更新最大长度
            res = Math.max(res,window.length)
        }else {
            //先push
            window.push(s[i])
            //找出重复字符的位置
            let index = window.indexOf(s[i])
            let len = window.length
            //将index之前的全部删除
            window = window.slice(index+1,len)
            //更新最大长度
            res = Math.max(res,window.length)
        }
    }
    return res
};