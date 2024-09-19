# Plex request
This repo is setup to use mongoDB to allow users to request that content be added to a plex library. This serves as the backend for the plex request project.
<br>
Data is saved to a mongoose db (using db atlas data api) and will catalog everything so that users can see available content at a glance from any device and immediately request missing content without needing any 3rd party apps.
<br>
Uses redux for user/admin management.
<br>
The plan is to build a functional site. And then use the skeleton as a base from which to build a React Native app for daily use of the built backend.

## Dependencies
<ul> 
  <li>mongoose @ 7.2.2</li>
  <li>dotenv @ 16.1.4</li>
  <li>express @ 4.18.12</li>
  <li>Redux </li>
  <li>Redux js </li>
  <li>Redux-persist </li>
</ul>

## Setup

<ol>
  <li>Clone and install dependencies (npm i) in backend and frontent.</li>
  <li>Setup MongoDB Atlas cluster and db [here](https://www.mongodb.com/atlas).</li>
  <li>Enable database access and network access for your location, under "Security" for your cluster.</li> 
  <li>Setup ENV variable in backend, using example as template. Use your mongodb Atlas username and password setup in previous step.</li>
</ol>

## Use

` npm start ` in the frontend/backend folder to spin them up.


## TODO

<ul>
  <li>Add message to login when user is redirected for unauthorized route</li>
</ul>