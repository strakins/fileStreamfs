const async = require('async');

// Function to simulate an asynchronous task with a delay
function processItem(item, callback) {
    setTimeout(() => {
        const result = item * 2;
        callback(null, result);
    }, 1000); // 1 second delay
}

// Data array
const numbers = [1, 3, 5, 6, 3];

// Process items sequentially using async.mapSeries
async.mapSeries(numbers, processItem, (err, results) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Processed results:', results);
    }
});



