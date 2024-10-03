const fs = require('fs');
const path = require('path');
const logDir = path.join(process.cwd(), 'Logs');
const removeLogFiles = () => {
    if (fs.existsSync(logDir)) {
        fs.readdirSync(logDir).forEach(file => {
            const filePath = path.join(logDir, file);
            console.log(`delete files...${file}`);
            fs.unlinkSync(filePath);
        });

        fs.rmdirSync(logDir);

    } else {
        console.log('Logs directory does not exist.');
    }
};

removeLogFiles();
