
//Petición get para conseguir el listado de todos los teléfonos

const getAllPhones = ()=>{
    return new Promise((resolve,reject)=>{
        db.query('SELECT * FROM phone' , (err,rows)=> {  //consulta a la bbdd que nos devuelva todos los teléfonos.
            if(err)reject(err);
            resolve(rows);
        })
    })
}

module.exports = {getAllPhones}