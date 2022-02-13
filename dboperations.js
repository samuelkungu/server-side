var config = require('./dbconfig');
const sql = require('mssql');


async function getUsers() {
    try {
        let pool = await sql.connect(config);
        let Users = await pool.request().query("SELECT * from User");
        return Users.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getUser(userId) {
    try {
        let pool = await sql.connect(config);
        let User = await pool.request()
            .input('input_parameter', sql.Int, userId)
            .query("SELECT * from Users where Id = @input_parameter");
        return User.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


async function addUser(user) {

    try {
        let pool = await sql.connect(config);
        let insertUser = await pool.request()
            .input('UserId', sql.Int, user.Id)
            .input('FirstName', sql.NVarChar, user.FirstName)
            .input('SecondName', sql.NVarChar, user.SecondName)
            .input('Email', sql.NVarChar, user.Email)
            .input('ProjectName', sql.NVarChar, user.ProjectName)
            .input('Password', sql.NVarChar, user.Password)
            .execute('InsertUsers');
        return insertUser.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}






module.exports = {
    getUsers: getUsers,
    getUser : getUser,
    addUser : addUser
}