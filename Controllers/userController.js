const config = require('../Config/db');
const mssql = require('mssql');


async function getUsers(req,res) {
    try {
        await mssql.connect(config)
        const result = await (await mssql.query("SELECT * FROM users")).recordset
        res.send(result)
        console.log(result)

    } catch (err) {
        // ... error checks
        console.log(err)
    }
}

async function getUser(req, res) {
    
    const id = req.params.id
    try {
        let pool = await mssql.connect(config);
        let result1 = await pool.request()
            .query('SELECT * from users where id = ${id}');
        
            res.json(result1.recordset)

    }
    catch (error) {
        console.log(err);
    }
}


async function addUser(res, req) {

    const {firstname,lastname, email, projectname} = req.body
    const id = req.params.id;
    try {
        let pool = await mssql.connect(config);
        await pool.request()
            .input('id', mssql.Int, id)
            .query( 'INSERT INTO users(firtsname,lastname,email,projectname) VALUES (${firstname},${lastname},${email},${projectname}')
        
            res.json('User Added Successfully')
        
    }
    catch (err) {
        console.log(err);
    }

}

async function deleteUser(req, res) {
    
    const id = req.params.id
    try {
        let pool = await mssql.connect(config);
        let result1 = await pool.request()
            .query('DELETE from users where id = ${id}');
        
            res.json('User Deleted Successfully')

    }
    catch (error) {
        console.log(err);
    }
}






module.exports = {
    getUsers: getUsers,
    getUser : getUser,
    addUser : addUser,
    // updateUser : updateUser,
    deleteUser: deleteUser
}