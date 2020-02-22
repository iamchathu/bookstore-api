<h1 align="middle"> bookstore-api</h1>
How to configure simple API using  typescript.

## 🚀 Install
### Requirements

* NodeJS (^8.9.4)
* yarn (^1.6.0)
* MongoDB (It's not essential to have MongoDB on your local machine)

## 📚 Run
```
$ git clone https://github.com/iamchathu/bookstore-api
$ cd bookstore-api
$ yarn
```
* If you don't have MongoDB locally then we have can create free server environment from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* Create new account by giving the simple informations create a new account and then select free cluster
* Select AWS as a cloud provider and Singapore as a reagion and then click create cluster
<h1 align="middle"><img align="center" src="https://github.com/Semicolon10/bookstore-api/blob/master/readmeimages/selection.PNG" width="400"></h1>

* Select Cluster0 give the testing ip 0.0.0.0/0 for the ip and the any discription
* Create MongoDB user by giving strong password and username (Plese keep remind the password that you are using)
<h1 align="middle"><img align="center" src="https://github.com/Semicolon10/bookstore-api/blob/master/readmeimages/createCluster.PNG" width="400"></h1>

* Then move on to the choose an connection method tab
* Click connectyour application and you will be getting a connection  key. Then let's move back to our application
* Create new file called .env and paste your key inside that file and assign that string to MONGODB_URI variable (Plese be remind to update <username> and <password> with your username and password)

