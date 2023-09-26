import Mysql from "mysql";

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"gyp"
})
