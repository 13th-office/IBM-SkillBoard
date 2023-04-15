# IBM SkillBoard

## Set up MongoDB

- Create `.env` and `setup.env` from template files `example.env` and `example.setup.env`.
    - This script runs under the assumption that the MongoDB instance is new.
    - Populate username and password fields with the new desired values.
- Install MongoDB.
- Run `sudo ./database/setup/setup.sh`.

## Set up your bestfriend Ruby!
Current version working for ruby lang and gemfiles is .ruby-version's file one.

*ruby-3.0.2*

- in !/IBM-SKILLBOARD/backend-dashboard

    **bundle install** 


- will automatically update and install all necessary gems for an api app with Rails

    initial test for connectivity in cmd

    **rails s**

To run the database rename `application copy.yml` to `application.yml`

