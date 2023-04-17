#!/usr/bin/env bash

# Get setup file path
SETUP_PATH="$(dirname $0)"

# Start MongoDB service
sudo systemctl start mongod

# Load environment variables
# https://stackoverflow.com/questions/19331497/set-environment-variables-from-file-of-key-value-pairs
set -o allexport
for file in .env setup.env; do
    if [ ! -f "$SETUP_PATH/../$file" ]; then
        echo "Configuration file $file not found" >&2
        exit 1
    fi
    source "$SETUP_PATH/$file"
done
set +o allexport

# Create admin user
mongosh \
    --host $DB_HOST --port $DB_PORT \
    --eval "var DB_ADMIN_USER = '$DB_ADMIN_USER';
        var DB_ADMIN_PASS = '$DB_ADMIN_PASS';" \
    $SETUP_PATH/create_admin.js

# Restart MongoDB service with authentication enabled
sudo systemctl stop mongod
sudo echo "security:
    authorization: enabled" >> /etc/mongod.conf
sudo systemctl start mongod

# Create IBM SkillBoard user
mongosh \
    --host $DB_HOST --port $DB_PORT \
    --authenticationDatabase admin \
    -u $DB_ADMIN_USER -p $DB_ADMIN_PASS \
    --eval "var DB_NAME = '$DB_NAME';
        var DB_USER = '$DB_USER';
        var DB_PASS = '$DB_PASS';" \
    $SETUP_PATH/create_db_and_user.js

# Create collections (tables)
mongosh \
    --host $DB_HOST --port $DB_PORT \
    --authenticationDatabase $DB_NAME \
    -u $DB_USER -p $DB_PASS \
    --eval "var DB_NAME = '$DB_NAME';
        var DB_USER = '$DB_USER';
        var DB_PASS = '$DB_PASS';" \
    $SETUP_PATH/create_collections.js
