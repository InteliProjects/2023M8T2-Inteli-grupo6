const fs = require('fs');

const logging = (message) => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    const logEntry = `[${formattedDate} ${formattedTime}] ${message}\n`;

    fs.appendFile('log.txt', logEntry, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        } else {
            console.log('Message logged successfully:', message);
        }
    });
};

module.exports = {
    logging,
}
