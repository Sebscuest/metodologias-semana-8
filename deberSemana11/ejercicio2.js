'use strict'
function numeros(nums) {
    for (let i = 0; i < nums.length; i++) {
        let row = '';
        for (let j = i + 1; j < nums.length; j++) {
            row += nums[i] + '' + nums[j] + ' ';
        }
        if (row !== '') {
            alert(row.trim());
        }
    }
}

let nums = [0, 2, 4, 8];
numeros(nums);
