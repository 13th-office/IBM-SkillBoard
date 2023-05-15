# IBM SkillBoard

## Set up CI/CD

The following GitHub repository secrets must be defined:
- `DISCORD_WEBHOOK`: URL of Discord webhook to send notifications to
- `PROJECT_ROOT`: path where repo is located (current implementation requires it be the same for `main` and `dev` VPSs, e.g. `/root/repos/IBM-SkillBoard`)
- `MAIN_SSH_IP`: IP address of VPS for `main` branch deployment
- `MAIN_SSH_USER`: user of VPS for `main` branch deployment
- `MAIN_SSH_PRIVATE_KEY`: private key previously set up for passwordless SSH connection to VPS for `main` branch deployment
- `DEV_SSH_IP`: IP address of VPS for `dev` branch deployment
- `DEV_SSH_USER`: user of VPS for `dev` branch deployment
- `DEV_SSH_PRIVATE_KEY`: private key previously set up for passwordless SSH connection to VPS for `dev` branch deployment

For more info on setting up SSH keys see [this DigitalOcean resource](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/).

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
### Table of contents

- [Authentication](#authentication)
  - `POST /api/v1/login`: Log in
  - `POST /api/v1/logout`: Log out
- [Users](#users)
  - `GET /api/v1/users`: Fetch all users
  - `GET /api/v1/users/:id`: Fetch user info
- [Certificates](#certificates)
  - `GET /api/v1/certificates`: Fetch all certificates
  - `GET /api/v1/certificates/:type`: Fetch certificate filtered by type (`all`, `ibm`, `industry`, `my_teams`)
- [Categories](#categories)
  - `GET /api/v1/categories`: Fetch all registered categories
  - `GET /api/v1/categories/:id`: Fetch category 
- [Employees](#employees)
  - `GET /api/v1/employees`: Fetch all employees
  - `GET /api/v1/employees/:id`: Fetch an employee's data
- [Teams](#teams)
  - `GET /api/v1/teams`: Fetch all teams and employees related to that team
  - `GET /api/v1/teams/:id`: Fetch an specific team's data

All routes related to the following models contain a method for `POST, PUT and DELETE`

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
  **All Users requests require authentication.**


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

### Certificates
  **All Users requests require authentication.**


- `GET /api/v1/certificates`: Fetch all certificates
    - Response
        ```json
        Status: 200 OK
        JSON body:
            [
                {
                    "certificate": {
                        "id": "643efe1cd2f1c148b579fd74"
                        "name": "Watson Specialist v1",
                        "type": "ibm",
                        "expiration_date": "2025-07-05"
                    },
                    "categories": [
                        {
                            "id": "644c95d4d2f1c175be910954",
                            "name": "AI"
                        },
                        ...
                    ]
                },
                ...
            ]
        ```
- `GET /api/v1/certificates/:type`: Fetch certificates by type
    - Types: `all`, `ibm`, `industry`, `my_teams`
    - Response
        ```json
        JSON body:
            [
                {
                    "certificate": {
                        "id": "643efe1cd2f1c148b579fd74"
                        "name": "Watson Specialist v1",
                        "type": "ibm",
                        "expiration_date": "2025-07-05"
                    },
                    "categories": [
                        {
                            "id": "644c95d4d2f1c175be910954",
                            "name": "AI"
                        },
                        ...
                    ]
                },
                ...
            ]
        ```
### Categories
- `GET /api/v1/categories`: Fetch categories
    - Response
        ```json
        JSON body:
                [
            {
                "_id": {
                    "$oid": "644c95d4d2f1c175be910954"
                },
                "created_at": "2023-04-29T03:58:11.498Z",
                "name": "AI",
                "updated_at": "2023-04-29T03:58:11.498Z"
            },
            {
                "_id": {
                    "$oid": "644c9842d2f1c175be910956"
                },
                "created_at": "2023-04-29T04:08:34.726Z",
                "name": "Networking",
                "updated_at": "2023-04-29T04:08:34.726Z"
            }
        ]
        ```
- `GET /api/v1/categories/:id`: Fetch a single category
    - Response
        ```json
            {
                "_id": {
                    "$oid": "644c9842d2f1c175be910956"
                },
                "created_at": "2023-04-29T04:08:34.726Z",
                "name": "Networking",
                "updated_at": "2023-04-29T04:08:34.726Z"
            }
        ```
### Employees
  **All Users requests require authentication.**
  - `GET /api/v1/employees`: Fetch all employees
    - Response
        ```JSON
        JSON body:
                [
            {
                "_id": "cristijnm17gas",
                "created_at": "2023-04-27T20:32:14.886Z",
                "email": "cristi@ibm.com",
                "id": "cristijnm17gas",
                "last_name": "Aguilera",
                "name": "Cristina",
                "role": "Software Intern",
                "updated_at": "2023-04-27T20:32:14.886Z"
            },
            {
                "_id": "cameki0-8",
                "created_at": "2023-04-28T20:07:50.647Z",
                "email": "camello@ibm.com",
                "last_name": "Petrolero",
                "name": "Camello",
                "role": "Camello Manager",
                "updated_at": "2023-04-28T20:07:50.647Z"
            },
            ...
            ]
        ```
- `GET /api/v1/employees/:id`: Fetch an employee's data
  - Response
    ```JSON
        Json body:
            {
        "employee": {
            "id": "cr7id",
            "name": "Cristiano",
            "last_name": "Ronaldo",
            "email": "cr7@ibm.com",
            "role": "Senior Manager"
        },
        "teams": [
            {
                "team": {
                    "id": "644c25aee64d1e6d26836799",
                    "name": "Back-end Management"
                },
                "managers": [
                    {
                        "id": "cameki0-8",
                        "name": "Camello",
                        "last_name": "Petrolero",
                        "email": "camello@ibm.com",
                        "role": "Camello Manager"
                    }
                ]
            }
        ],
        "certificates": [
            {
                "certificate": {
                    "id": "643f424fed787a568fdc64d2",
                    "name": "Watson Specialist v1",
                    "type": "ibm",
                    "expiration_date": "2025-07-05"
                },
                "categories": [
                    {
                        "id": "644c95d4d2f1c175be910954",
                        "name": "AI"
                    }
                ]
            }
        ]
    }
    ```
### Teams
  **All Users requests require authentication.**

- `GET /api/v1/teams`: Fetch all teams and their respective employees and managers
  - Response
    ```json
    JSON body:
        {
        "teams": [
            {
                "team": {
                    "id": "644c25aee64d1e6d26836799",
                    "name": "Back-end Management"
                },
                "employees": [
                    {
                        "id": "alyxita",
                        "name": "Alyx",
                        "last_name": "Miranda",
                        "email": "alyx@ibm.com",
                        "role": "TopGamer"
                    },
                    {
                        "id": "cr7id",
                        "name": "Cristiano",
                        "last_name": "Ronaldo",
                        "email": "cr7@ibm.com",
                        "role": "Senior Manager"
                    }
                ],
                "managers": [
                    {
                        "id": "cameki0-8",
                        "name": "Camello",
                        "last_name": "Petrolero",
                        "email": "camello@ibm.com",
                        "role": "Camello Manager"
                    }
                ]
            },
            {
                "team": {
                    "id": "644c25dbe64d1e6d2683679a",
                    "name": "IBM Testing"
                },
                "employees": [],
                "managers": []
            },
        ...
        ]
    }
    ```
- `GET /api/v1/teams/:id`: Get a team's information
  - Response
    ```json
    JSON body:
        {
        "team": {
            "id": "644c25aee64d1e6d26836799",
            "name": "Back-end Management"
        },
        "employees": [
            {
                "id": "alyxita",
                "name": "Alyx",
                "last_name": "Miranda",
                "email": "alyx@ibm.com",
                "role": "TopGamer"
            },
            {
                "id": "cr7id",
                "name": "Cristiano",
                "last_name": "Ronaldo",
                "email": "cr7@ibm.com",
                "role": "Senior Manager"
            }
        ],
        "managers": [
            {
                "id": "cameki0-8",
                "name": "Camello",
                "last_name": "Petrolero",
                "email": "camello@ibm.com",
                "role": "Camello Manager"
            }
        ]
    }
    ```
*These are the important endpoints for GET methods related to the team endpoint*

✨ Documentation is my passion ✨
