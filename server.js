const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let isReady = false;

app.get('/health', (req, res) => {
    res.status(200).send('I am alive!');
});

app.get('/readiness', (req, res) => {
    if (isReady) {
        res.status(200).send('I am ready!');
    } else {
        res.status(500).send('Not ready yet!');
    }
});

// Simulate readiness after 10 seconds
setTimeout(() => {
    isReady = true;
    console.log('Application is now ready');
}, 10000);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
