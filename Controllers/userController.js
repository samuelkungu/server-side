const mssql = require('mssql')
const config = require('../config/db')

async function getUsers (req,res){
    try{
        await mssql.connect(config)
        const result = await (await mssql.execute('spUsers')).recordset
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
        .input('id',mssql.Int,id).execute('spUser')
        res.json(result1.recordset)
        res.json(" successful")

    } catch (err){
        console.log(err);
    }
}
async function addUser (req,res){
    const{firstname, lastname, email, project, passwd} = req.body
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('id', mssql.Int, id)
        .input('firstname', mssql.VarChar, firstname)
        .input('lastname', mssql.VarChar, lastname)
        .input('email', mssql.VarChar, email)
        .input('project', mssql.Text, project)
        .input('passwd', mssql.VarChar, passwd)
        .execute(`spPost`)
        res.json("user added successfully")

    } catch (err){
        console.log(err);
    }
}
async function updateUser (req,res){
    const{firstname, lastname, email, project, passwd} = req.body
    const id = req.params.id
    try{
        let pool = await mssql.connect(config)
        await pool.request()
        .input('id', mssql.Int, id)
        .input('firstname', mssql.VarChar, firstname)
        .input('lastname', mssql.VarChar, lastname)
        .input('email', mssql.VarChar, email)
        .input('project', mssql.Text, project)
        .input('passwd', mssql.VarChar, passwd)
        .query(`spPut ${id} ,${firstname} , ${lastname}, ${email}, ${project} ,${passwd};`)

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
        .input('id',mssql.Int,id).execute('spDel')
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