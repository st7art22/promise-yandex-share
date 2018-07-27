let promise = null;
let result = ((src = "https://yastatic.net/share2/share.js") => {
    promise = promise || new Promise((resolve, reject) => {
        let s;
        s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
    });

    return promise;
})();

export default result;