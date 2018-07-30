# Simple Node Connect Drill

To practice connecting a front end angular application to a node backend.  

The connections have been , we now just have to put in the logic inside the functions to pass the information along.

## server.js changes

1. We need to server the public folder from our server file.

2. We want to use sessions to store the screenname, so we are going to to Initialize express-session

3. Write the function to save the screenname to the session in the /api/screenname endpoint

## chatCtrl.js changes

1. Write the function that will accept a request and get the chats

2. Write the function that will accept a request and post a new chat

3. Write the function that will accept a request and delete all the chats

## mainSrvc.js changes

1. Make a GET $http call to the ```"/api/chats"``` endpoint.

2. Make a POST $http call to the ```"/api/chats"``` endpoint.

3. Make a DELETE $http call to the ```"/api/chats"``` endpoint.

## mainCtrl.js Changes

1. Call the mainSrvc's getChats method to get the chat messages

2. Call the mainSrvc's addChats method to add a new chat message

3. Call the mainSrvc's deleteChats method to delete the chat messages
