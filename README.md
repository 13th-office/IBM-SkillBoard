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
    - Populate `REACT_ROUTE` field with comma-separated routes of the front end (no spaces).
- Launch the server by running `bin/rails server`. Add flag `-b 0.0.0.0` to run on the server's IP address.

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

### Authentication

- Endpoints requiring authentication read `_session_id` header, which is sent automatically by the browser once the user is logged in. Otherwise, `Status: 401 Unauthorized` and `{ "error" : "Authentication required" }` are returned.

- `POST /api/v1/login`: Log in
    - Request
        ```json
        JSON body:
            {
                "email": "maria@ibm.com",
                "password": "password"
            }
        ```
    - Response
        ```json
        Relevant headers:
            Set-Cookie: _session_id=ABCDEF012345; path=/; HttpOnly; SameSite=Lax
        
        On failure:
            Status: 401 Unauthorized
            JSON body: { "error": "Bad login credentials" }
        ```
- `POST /api/v1/logout`: Log out

### Users

- All Users requests require authentication.

- `GET /api/v1/users`: Fetch all users
    - Response
        ```json
        Status: 200 OK
        JSON body:
            [
                {
                    "_id": { "$oid": "643ea304d2f1c13ab257a43d" },
                    "name": "Julia Montemayor",
                    "email": "july@ibm.com",
                    "created_at": "2023-04-18T14:02:44.852Z",
                    "updated_at": "2023-04-18T14:02:44.852Z"
                },
                ...
            ]
        
        If not logged in:
        ```
- `GET /api/v1/users/:id`: Fetch user info
    - Response
        ```json
        JSON body:
            {
                "_id": { "$oid": "643ea304d2f1c13ab257a43d" },
                "name": "Julia Montemayor",
                "email": "july@ibm.com",
                "created_at": "2023-04-18T14:02:44.852Z",
                "updated_at": "2023-04-18T14:02:44.852Z"
            }
        ```

- `POST /api/v1/users`: Create user
    - Request
        ```json
        JSON body:
            {
                "name": "Julia Montemayor",
                "email": "july@ibm.com"
            }
        ```
    - Reponse
        ```json
        JSON body:
            {
                "_id": { "$oid": "643ea1efd2f1c13ab257a43c" },
                "name": "Julia Montemayor",
                "email": "july@ibm.com",
                "created_at": "2023-04-18T13:58:07.377Z",
                "updated_at": "2023-04-18T13:58:07.377Z"
            }
        ```
- `PUT /api/v1/users/:id`: Update user
    - Request
        ```json
        JSON body:
            {
                "name": "Julia Montemenor"
            }
        ```
    - Response
        ```json
        JSON body:
            {
                "_id": { "$oid": "643ea1efd2f1c13ab257a43c" },
                "name": "Julia Montemenor",
                "email": "july@ibm.com",
                "created_at": "2023-04-18T13:58:07.377Z",
                "updated_at": "2023-04-18T14:03:28.958Z"
            }
        ```
- `DELETE /api/v1/users/:id`: Delete user
    - Response
        ```json
        Status: 204 No Content
        ```

### Certificates

- All Users requests require authentication.

- `GET /api/v1/certificates`: Fetch all certificates
    - Response
        ```json
        Status: 200 OK
        JSON body:
            [
                {
                    "_id": { "$oid": "643efe1cd2f1c148b579fd74" },
                    "name": "Watson Specialist v1",
                    "type": "ibm",
                    "expiration_date": "2024-04-01",
                    "created_at": "2023-04-18T20:31:24.184Z",
                    "updated_at": "2023-04-18T20:31:24.184Z"
                },
                ...
            ]
        ```
- `GET /api/v1/certificates/:id`: Fetch certificate info
    - Response
        ```json
        JSON body:
            {
                "_id": { "$oid": "643efe1cd2f1c148b579fd74" },
                "name": "Watson Specialist v1",
                "type": "ibm",
                "expiration_date": "2024-04-01",
                "created_at": "2023-04-18T20:31:24.184Z",
                "updated_at": "2023-04-18T20:31:24.184Z"
            }
        ```

- `POST /api/v1/certificates`: Create certificate
    - Request
        ```json
        JSON body:
            {
                "name": "Watson Specialist v1",
                "type": "ibm",
                "expiration_date": "2024-4-1"
            }

        On failure:
            Status: 422 Unprocessable Entity
            JSON body:
                {
                    "name": [
                        "is too short (minimum is 3 characters)"
                    ],
                    "type": [
                        "can't be blank",
                        "must be either ibm or industry"
                    ]
                }
        ```
    - Reponse
        ```json
        JSON body:
            {
                "_id": { "$oid": "643efe1cd2f1c148b579fd74" },
                "name": "Watson Specialist v1",
                "type": "ibm",
                "expiration_date": "2024-04-01",
                "created_at": "2023-04-18T13:58:07.377Z",
                "updated_at": "2023-04-18T13:58:07.377Z"
            }
        ```
- `PUT /api/v1/certificates/:id`: Update certificate
    - Request
        ```json
        JSON body:
            {
                "expiration_date": "2024-4-3'"
            }
        ```
    - Response
        ```json
        JSON body:
            {
                "_id": { "$oid": "643efe1cd2f1c148b579fd74" },
                "name": "Watson Specialist v1",
                "type": "ibm",
                "expiration_date": "2024-04-30",
                "created_at": "2023-04-18T13:58:07.377Z",
                "updated_at": "2023-04-18T20:50:18.635Z"
            }
        ```
- `DELETE /api/v1/certificates/:id`: Delete certificate
    - Response
        ```json
        Status: 204 No Content
        ```

✨ Documentation is my passion ✨
