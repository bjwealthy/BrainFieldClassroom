
// import mysql from 'mysql';

// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'studentms'
// })

// con.connect(function(err){
//     if(err){
//         console.log('db wahala dey')
//         return;
//     }else{
//         console.log('server connected to mysql db')
//     }
// })

// export default con;

import mysql from 'mysql';

const con = mysql.createConnection({

    host: 'sql8.freemysqlhosting.net',
    user: 'sql8753965',
    password: 'dhdKH9IB98',
    //database: 'studentms',
    database: 'sql8753965',
    port: '3306',
})

con.connect(function(err){
    if(err){
        console.log('db wahala dey')
        return;
    }else{
        console.log('server connected to mysql db and doing fine')
    }
})

export default con;