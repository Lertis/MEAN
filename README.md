# MEAN

MEAN:

![alt text](https://upload.wikimedia.org/wikipedia/commons/3/32/Mongo-db-logo.png "MongoDB")
- MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL).

![alt text](https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png "Express.js")
- Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png "Angular")
- Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.

![alt text](https://nodejs.org/static/images/logo.svg "NodeJS")

- Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. 


# Preconditions

Before launch the application You need to install MongoDB. Use link https://www.mongodb.com/download-center/community to install MongoDB Compass Community.

![alt text](https://upload.wikimedia.org/wikipedia/commons/3/32/Mongo-db-logo.png "MongoDB")

When MongoDB Compass Community has been installed create database <NameOfDB> and collection <collectionName>. <strong>Remember to change the db.js file! Example: mongoose.connect('mongodb://localhost:27017/"NameOfDB"'.</strong>

# Launch
 <strong>If you install application from this git repository do not forget to run `npm i` ;)</strong>

- Launch MongoDB Compass Community.

- Go to the NodeJS folder and run command `nodemon index.js`.

- Go to the Angular application folder and run command `npm run start`.

# Issues

MongoDB not running on the provided host and port

- Go to the folder where you installed MongoDB. As for me it was `MongoDB\Server\4.0\bin ` and run `mongod`
- Press `❖ + R ` and type `services.msc`
- Find MongoDB Server and run it
- Launch MongoDB Compass
