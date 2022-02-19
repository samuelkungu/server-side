const mssql = require('mssql')
const config = require('../config/db')

async function getUsers (req,res){
    try{
        await mssql.connect(config)
        const result = await (await mssql.query("EXECUTE spUsers;")).recordset
        res.json(result)
    } catch (err){
        console.log(err);
    }
}
async function getUser (req,res){
    const id = req.params.id
    try{
        let pool = await mssql.connect(config)
        let result1 = await pool.request()
        .query(`EXECUTE spUser ${id}`)
        res.json(result1.recordset)
        res.json(" successful")

    } catch (err){
        console.log(err);
    }
}
async function addUser (req,res){
    const{firstname, secondname, email, project, password} = req.body
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .query(`EXECUTE spAdd;`)
        res.json("user added successfully")

    } catch (err){
        console.log(err);
    }
}
async function updateUser (req,res){
    const{firstname, secondname, email, project, password} = req.body
    const id = req.params.id
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('id', mssql.Int, id)
        .input('firstname', mssql.VarChar, firstname)
        .input('lastname', mssql.VarChar, secondname)
        .input('email', mssql.VarChar, email)
        .input('project', mssql.Text, project)
        .input('password', mssql.VarChar, password)
        .query('UPDATE users SET firstname = @firstname, lastname = @lastname, email = @email, project = @project, password = @password WHERE id = @id')
        .query('EXECUTE spUpdate')

        res.json("user added successfully")

    } catch (err){
        console.log(err);
    }
}
async function deleteUser (req,res){
    const id = req.params.id
    try{
        let pool = await mssql.connect(config)
        let result1 = await pool.request()
        .query(`EXECUTE spDel ${id}`)
        res.json("User deleted successfully")

    } catch (err){
        console.log(err);
    }
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}