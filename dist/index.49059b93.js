document.querySelector(".request-complement").addEventListener("click", function() {
    fetch("/complement").then(function(res) {
        return res.json();
    }).then(function(data) {
        document.querySelector(".complement").innerText = data.complement;
    }).catch(function(err) {
        console.error(err);
    });
});
document.querySelector(".request-insult").addEventListener("click", function() {
    fetch("/insult").then(function(res) {
        return res.json();
    }).then(function(data) {
        document.querySelector(".complement").innerText = data.insult;
    }).catch(function(err) {
        console.error(err);
    });
});
const { keyframes , easing , styler  } = window.popmotion;
const bodyStyler = styler(document.body);
keyframes({
    values: [
        '#FF1C68',
        '#14D790',
        '#198FE3',
        '#FF1C68'
    ],
    duration: 10000,
    ease: easing.linear,
    loop: Infinity
}).start(bodyStyler.set('background'));

//# sourceMappingURL=index.49059b93.js.map
