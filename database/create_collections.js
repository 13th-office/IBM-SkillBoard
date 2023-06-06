db = db.getSiblingDB(process.env["DB_NAME"]);

db.createCollection("employees")
db.createCollection("users")
db.createCollection("teams")
db.createCollection("certificates")
db.createCollection("categories")

db.createCollection("certificateCategory")
db.createCollection("certificateEmployee")
db.createCollection("employeeTeam")
db.createCollection("managerTeam")
