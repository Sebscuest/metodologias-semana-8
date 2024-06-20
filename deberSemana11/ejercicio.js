'use strict';

function cadena(nums) {
    for (let i = 0; i < nums.length; i++) {
        let row = '';
        for (let j = 0; j < nums.length; j++) {
            row += nums[i] + '' + nums[j] + ' ';
        }
        alert(row.trim());
    }
}

let nums = [0, 2, 4, 8];
cadena(nums);

