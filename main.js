const CONFIG_PATH = './config.json';
const request = require('request-promise');
const fs = require('fs');
const CONFIG = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
const channelID = CONFIG.channel;
const defaultURL = 'https://discordapp.com/api/v6/channels/' + channelID + '/messages/';
const requestURL = defaultURL + 'search?author_id=' + CONFIG.authorID + '&min_id=000000000000000000';



let timer = (ms) => {
    return new Promise(res => setTimeout(res, ms));
}


let fetchMessages = async () => {
    let result = await request({
        headers: {
            'authorization': CONFIG.authorization
        },
        url: requestURL
    })

    result = JSON.parse(result);
    return result;
}


let deleteMessage = (message) => {

    try {
        if (message.author.id == CONFIG.authorID) {
            request({
                headers: {
                    'authorization': CONFIG.authorization
                },
                url: defaultURL + message.id,
                method: 'DELETE'
            });

            console.log("Message #" + message.id + " was deleted.");
        }
    } catch (err) {

    };
}



let main = async () => {

    let messages = await fetchMessages();

        

    console.log(messages.total_results + ' messages were found.');



    for (let i = 0; i < messages.messages.length; i++) {
        for (let j = 0; j < messages.messages[0].length; j++) {

            if (messages.messages[i][j].hit === true) {
                deleteMessage(messages.messages[i][j]);
                await timer(500);
            }

        }

    }


    main();

}

main();