# estateably project

## Running Locally

### Prerequisites
* [Node.js](http://nodejs.org/) - 16.13.2
* [NPM](http://npm.com) - 8.1.2

### Set it up
1. Clone the repo `$ git clone https://github.com/MatthewCandido/estateably.git`
2. Navigate to new Folder `$ cd estateably`
3. Navigate to the front-end project `$ cd client`
4. Install Dependencies and start the project `$ npm install && npm run start`
5. The front-end project should be now running on [localhost:3000](http://localhost:3000/)
6. Navigate back to the root `$ cd ..`
7. Create a .env file and add the following vars:
`MONGO_USER=new_user`
`MONGO_PASSWORD=ZYTAT8mBeC60smIx`
`MONGO_PATH=cluster0.3wvy5.mongodb.net/estateably`
4. Install dependencies and build the project `$ npm install && npm run build`
5. Start the Node server with `$ npm run start`
6. The back-end should be now running on [localhost:5000](http://localhost:5000/)

You can now access the application on [localhost:3000](http://localhost:3000/).
