# IBM SkillBoard

## Set up database

Using your MongoDB manager or provider create a database for the IBM SkillBoard as well as an user with at least the `readWrite` role on the database. Create the collections listed in `/database/create_collections.js`.

### Helper script

- Create `/database/.env` from template files `/database/example.env`.
    - This script runs under the assumption that the MongoDB instance is new.
    - Populate username and password fields with the new desired values.
- Install MongoDB.
- Run `sudo ./database/setup.sh`.

## Set up your bestfriend Ruby!
Current version working for ruby lang and gemfiles is .ruby-version's file one.

`ruby-3.0.2`

- in !/IBM-SKILLBOARD/backend-dashboard

    `bundle install` 


- will automatically update and install all necessary gems for an api app with Rails

    initial test for connectivity in cmd

    `rails s`

To run the database create `application.yml` from `example.application.yml`

## Running the endpoint between Mongo and Ruby
- ### Mongo server
    Once you have all confifured on your database side and the previously steps to install the necessary gems for ruby are in your system, you can connect.

    Firstly start your instance of the mongod server, for Linux based OS
    ```Shell
    sudo systemctl start mongod

    sudo systemctl status mongod
    ```
    Checking for the status should return something like:

    ```Shell
    ● mongod.service - MongoDB Database Server
        Loaded: loaded (/lib/systemd/system/mongod.service; disabled; vendor preset: enabled)
        Active: active (running) since Mon 2023-04-17 12:42:19 CST; 4s ago
        Docs: https://docs.mongodb.org/manual
    Main PID: 27511 (mongod)
        Memory: 225.8M
            CPU: 409ms
        CGroup: /system.slice/mongod.service
                └─27511 /usr/bin/mongod --config /etc/mongod.conf

    Apr 17 12:42:19 pop-os systemd[1]: Started MongoDB Database Server.
    ```
    If done the previous configuration for the ibmSkillBoard database, you should login to access it.

    ```Shell
    mongosh --authenticationDatabase 'databaseName' -u 'user' -p 'password'
    ```
    In mongosh shell we're going to check if there's local data, you can do this whether with tables or collections commands

    ```Shell
    use 'databaseNme'
    show tables
    ```
    if the database setup was run correctly it should show use something like:
    ```Shell
    ibmSkillBoard> show tables
    category
    certificateCategory
    certificateEmployee
    certificates
    employee
    employeeTeam
    managerTeam
    team
    user #user and users were generated from rails should appear after the server
    users
    ```
    *For now the rails configuration just has the user model, we will be making insertions to this collection.*
- ## Rails requests
  First let us check available routes:
  ```Shell
  $ rails routes

         Prefix Verb   URI Pattern                 Controller#Action
    api_v1_users GET    /api/v1/users(.:format)     api/v1/users#index
                 POST   /api/v1/users(.:format)     api/v1/users#create
    api_v1_user  GET    /api/v1/users/:id(.:format) api/v1/users#show
                 PATCH  /api/v1/users/:id(.:format) api/v1/users#update
                 PUT    /api/v1/users/:id(.:format) api/v1/users#update
                 DELETE /api/v1/users/:id(.:format) api/v1/users#destroy
    api_v1_login POST   /api/v1/login(.:format)     api/v1/auth#login
   api_v1_logout POST   /api/v1/logout(.:format)    api/v1/auth#logout
  ```
  For a **GET** request of all current users:
  `localhost:3000/api/v1/users`
  
  returns a Json with the *local* database Collection

    For a **POST** request which creates a user: `localhost:3000/api/v1/users?username=alyxgeimer2&email=ggez@gmail.com&password=pinacolada1234`
    
    This is an example format.

    For a **GET** request for a specific user: `localhost:3000/api/v1/users/IDOFUSER`

    For a **PUT** request which updates the user: `localhost:3000/api/v1/users/IDOFUSER?FIELD=MODIFICATION`

    ✨ Documentation is my passion ✨

    For a **DELETE** request: yeah you're getting my point
