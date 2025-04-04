const {createPool} = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "goMuhammad7277",
    database: "electroweb",
    connectionLimit: 10
})

pool.query(`select * from electroweb`, (err, result, fields)=> {
    if(err){
        return console.log(err);
    }
    return console.log(result);
})