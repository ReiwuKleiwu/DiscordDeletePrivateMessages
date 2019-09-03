# DiscordDeletePrivateMessages
A small program which automatically deletes all of your chat message, sent into a certain private chat on Discord. 

# Installation
- Make sure you have Node.js installed. 
https://nodejs.org/en/
- Download the repository.
- Put all the files into a single folder.
- Open a terminal and change its directory to the given folder. (e.g. : "pushd *SOME DIRECTORY PATH*)
- Type **npm install** into the terminal, this will install the programs dependencies.
- Open the config.json file and fill in the fields: 

**I RECOMMEND USING DISCORD'S BROWSER VERSION FOR THE NEXT STEPS** 
  - "channel" : put the ID of the DM channel in here, 
  How do I get the channel ID? 
  
-> Open the DM chat in your browser, now copy the channel ID from the URL
   (e.g. https://discordapp.com/channels/@me/CHANNEL ID )
  - "authorization" : put your auth token in here, 
  How do I get my auth token? 
  
-> https://discordhelp.net/discord-token
  - "authorID" : put your own ID in this field
  How do I get my own ID? 
  
-> Make sure you got Discord's developer mode enabled, now right click onto your profile picture in a chat and click on "Copy ID"
  - Make sure to save the config file before you close it.

  ##Now you are ready to start the program!
  - Go back to your terminal and type "node main.js". 
  - The programm will do its work from now on, at this point, it simply crashes once it deleted all of your messages.
  - Press CTRL + C to exit the program at any point in time.


