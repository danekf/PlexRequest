# Plex Request Backend Tasks

## Additional Requirements
- Plex server running on local machine
- Tautilli (to export plex db data)
- Mongo db atlas cluster



## Tautilli
Tautilli will be used to automatically fetch db info from running plex servers since it has an easy to use API that is run locally.

### Tautilli setup 
- Install Tautilli (latest at time of writing is 2.13.4): https://github.com/Tautulli/Tautulli/releases
- Log in to Tautilli
- Got to Settings -> Web Interface
  - -> API : Enable API
  - Copy API Key
  - Paste API key into .env file at appropriate spot
  - *OPTIONAL :* <br /> 
  Insert IP address and port of Tautilli host machine into .env file (default ip in .env.example uses localhost and default tautilli port, replace as necessary)

## Get section IDs for plex library
Will run getSectionIDs.js whenever the server is started.

### Tautilli API reference
Reference for controlling Tautilli and exporting metadata. 

https://github.com/Tautulli/Tautulli/wiki/Tautulli-API-Reference#export_metadata


## TODO
- USER :
  - Add encryption
  - Set user cookie
  