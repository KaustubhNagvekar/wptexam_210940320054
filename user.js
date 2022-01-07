const mysql=require("mysql");
const Promise=require("bluebird");

Promise.promisifyAll(require("mysql/lib/connection").prototype);

const dbifo={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"project2",
};

const addUser=async(user)=>{
    const connection =mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql=`insert into MESSAGE(msg)values(?)`;
    connection.queryAsync(sql,[user.msg]);
    await connection.endAsync();

};
const selectUser=async()=>{
    const connection =mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql=`select * from MESSAGE`;
    const list=await connection.queryAsync(sql,[]);
    await connection.endAsync();
     return list;
};

module.exports={addUser,selectUser};