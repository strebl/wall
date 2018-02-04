// Setup a timer
var timeout;

// Listen for resize events
window.addEventListener(
    'resize',
    function(event) {
        console.log('no debounce');

        // If timer is null, reset it to 66ms and run your functions.
        // Otherwise, wait until timer is cleared
        if (!timeout) {
            timeout = setTimeout(function() {
                // Reset timeout
                timeout = null;

                // Run our resize functions
                console.log('debounced');
            }, 66);
        }
    },
    false
);

document.querySelector('#fitme').addEventListener('keyup', resizeText);

function resizeText({ target }) {
    console.count('qwe');
    let height = document.documentElement.clientHeight;
    let width = document.documentElement.clientWidth;
    let fontSize = height;

    [100, 50, 10, 2, 1].forEach(function(step) {
        for (; fontSize > 0; fontSize -= step) {
            target.style.fontSize = fontSize + 'px';
            if (target.scrollWidth <= width && target.offsetHeight <= height) {
                break;
            }
        }
        fontSize += step;
    });
}
