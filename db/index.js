const Alert = require("./models/alert.js")
const Group = require("./models/group.js")
const LocationHistory = require("./models/locationHistory.js")
const ResponderProfile = require("./models/responderProfile.js")
const SensorData = require("./models/sensorData.js")
const User = require("./models/user.js")
const db = require('./db')

<<<<<<< HEAD


Group.hasMany(User)
User.belongsTo(Group)

=======
Group.hasMany(User)
User.belongsTo(Group)

>>>>>>> 9a90483a9180b5a8132d9a2dbc121fb37a73fe21
User.hasMany(SensorData)
SensorData.belongsTo(User)

User.hasOne(ResponderProfile)
ResponderProfile.belongsTo(User)

User.hasMany(LocationHistory)
LocationHistory.belongsTo(User)

User.belongsToMany(Alert, {through: 'UserToAlert'})

<<<<<<< HEAD







=======
>>>>>>> 9a90483a9180b5a8132d9a2dbc121fb37a73fe21
module.exports = {
    db,
    User,
    Alert,
    Group,
    LocationHistory,
    ResponderProfile,
    SensorData,
}
