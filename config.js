const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//gg
module.exports = {
SESSION_ID: 'T6QCTJiC#1bRfzJ6tzuAqaz-V087tS1aWGXsFqIJr7hFtHiRfiZw',

GITHUB_TOKEN: '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',
REPO_NAME: 'Check',
GITHUB_USER_NAME: 'x-kevinbro',

};

//token -- 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
