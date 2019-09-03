# DiscordDeletePrivateMessages
A small program which automatically deletes all of your chat messages, sent into a given private chat on Discord. 

# Installation
- Make sure you have Node.js installed. 
https://nodejs.org/en/
- Download the repository.
- Put all the files into a single folder.
- Open a terminal and change its directory to the given folder. (e.g. : "pushd *SOME DIRECTORY PATH*)
- Type **npm install** into the terminal, this will install the programs dependencies.
- Open the config.json file and fill in the required fields: 

**I RECOMMEND USING DISCORD'S BROWSER VERSION FOR THE NEXT STEPS** 
  - "channel" : put the ID of the DM channel in here. 

  How do I get the channel ID? 
  
-> Open the DM chat in your browser, now copy the channel ID from the URL
   (e.g. https://discordapp.com/channels/@me/CHANNEL_ID )
  - "authorization" : put your auth token in here.

  How do I get my auth token? 
  
-> https://discordhelp.net/discord-token
  - "authorID" : put your own ID in this field.

  How do I get my own ID? 
  
-> Make sure you got Discord's developer mode enabled, now right click onto your profile picture in a chat and click on "Copy ID"
  - Make sure to save the config file before you close it.

  ## Now you are ready to start the program!
  - Go back to your terminal and type "node main.js". 
  - The programm will do its work from now on, at this point, it simply crashes once it deleted all of your messages.
  - Press CTRL + C to exit the program at any point in time.


# What did I learn from doing it? 
  - Handling delays in for-loops with ES7 syntax, man, I really do not like it at all.
  - Improving my understanding of asynchronous code in general.
  
# Sources 
  - The main idea of my code originated from this lovely post: https://gist.github.com/CarletonStuberg/0c838a6248772c6fea1339ddad503cce#gistcomment-2632274

My browser lagged a lot when I used the script from the post above, so I thought implementing it into node.js would make it way more efficient and less laggy. ~ 
 

