# IBM SkillBoard

## Set up database

Using your MongoDB manager or provider create a database for the IBM SkillBoard as well as an user with at least the `readWrite` role on the database. Create the collections listed in `/database/create_collections.js`.

### Helper script

- Create `/database/.env` from template file `/database/example.env`.
    - This script runs under the assumption that the MongoDB instance is new.
    - Populate username and password fields with the new desired values.
- Install MongoDB.
- Run `sudo ./database/setup.sh`.

### Check sucessful setup

- Launch MongoDB
    ```bash
    sudo systemctl start mongod             # Linux
    brew services start mongodb-community   # MacOS
    ```
- Check service status
    ```bash
    sudo systemctl status mongod            # Linux
    brew services list | grep mongod        # MacOS
    ```
    - This command should return something similar to this:
        ```bash
        # Linux: make sure it reads "active"
        ● mongod.service - MongoDB Database Server
            Loaded: loaded (/lib/systemd/system/mongod.service; disabled; vendor preset: enabled)
            Active: active (running) since Mon 2023-04-17 12:42:19 CST; 4s ago
        # MacOS: make sure it reads "started"
        mongodb-community started         username ~/Library/LaunchAgents/homebrew.mxcl.mongodb-community.plist
        ```
- Log in to the database
    ```bash
    mongosh --authenticationDatabase 'databaseName' -u 'user' -p
    # Enter your password when prompted
    ```
- Check that all collections exist
    ```javascript
    use 'databaseName'
    show tables
    ```
    - Expected output:
        ```
        categories
        certificateCategory
        certificateEmployee
        certificates
        employees
        employeeTeam
        managerTeam
        teams
        users
        ```

## Set up your bestfriend Ruby!

- Install Ruby 3.0.2.
    - Note that the current Ruby version can be found in `/backend-dashboard/.ruby-version`.
- In `/backend-dashboard/`, install the app bundle by running `bundle install`.
- Create `/backend-dashboard/config/application.yml` from template file `/backend-dashboard/config/example.application.yml`
    - Populate `DB_` fields with the database access data.
    - Populate `FIREBASE_KEY` field with the API key for the authentication service.
- Launch the server by running `bin/rails server`

## Run the back end (MongoDB and Ruby)

- Start MongoDB:
    ```bash
    sudo systemctl start mongod             # Linux
    brew services start mongodb-community   # MacOS
    ```
- Start Rails
    ```bash
    bin/rails server
    ```

## Endpoint documentation

Note: if an endpoint is not listed here, a complete list can be retrieved by running `bin/rails routes`.

- Authentication
    - POST /api/v1/login?email=string&password=string
        - Returns 200 OK and `Set-Cookie` header containing `_session_id: <SESSION_ID>` if successful
        - Returns 401 Unauthorized if unsuccessful
    - POST /api/v1/logout
        - Returns 200 OK
- Users
    - GET /api/v1/users
        - Returns JSON with all users in the 'users' collection
    - GET /api/v1/users/:id
        - Returns JSON of user if found
    - POST /api/v1/users?username=string&email=string&password=string
        - Creates user in database
    - PUT /api/v1/users/:id?`field`=`content`
        - Updates user's `field` with new `content`
    - DELETE /api/v1/users/:id
        - Deletes user from database

✨ Documentation is my passion ✨
