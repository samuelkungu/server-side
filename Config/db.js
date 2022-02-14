// const mssql = required('mssql')
//connect to db
let config = {
    server:'127.0.0.1',
    user :'sa',
    database:'Projects',
    password :'1234',


    options:{
        encrypt: false,
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'MSSQL_SERVER'
    },

    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },

    // port : 1031
}

module.exports = config; 