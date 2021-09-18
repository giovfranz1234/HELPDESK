const pg = require ('../bd')

async function getUsuarios(){
    
    try{
    var result = await pg('usuarios').select('*')
    return result;
    }
    catch{
        throw(error); 
    }

}
module.exports = {
    getUsuarios
}