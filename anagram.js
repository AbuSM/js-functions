function aclean(arr) {
    function areAnagrams(str1, str2) {
        const s1 = str1.trim().toLowerCase();
        const s2 = str2.trim().toLowerCase();
        if (s1.length === s2.length) {
            for (let value of s1) {
                if (s2.indexOf(value) === -1) {
                    return false;
                }
            }
        } else return false;
        return true
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++){
            if (areAnagrams(arr[i], arr[j])) {
                arr.splice(j, 1)
            }
        }
    }
    console.log(arr);
    return arr
}

aclean(["nap", "teachers", "hello", "cheaters", "good", "PAN", "ear", "era", "hectares"]);
