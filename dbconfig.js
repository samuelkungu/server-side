const config = {
    user :'sa',
    password :'1234',
    server:'127.0.0.1',
    database:'Projects',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'MSSQL_SERVER'
    },
    port : 1031
}

module.exports = config; 