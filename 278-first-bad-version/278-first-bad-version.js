var solution = (isBadVersion) => {
    return function(n) {
        for (let i = n; i > 0; i--) {
            if (!isBadVersion(i)) return i + 1
        }
        return 1
        
    };
};