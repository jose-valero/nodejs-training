const config = {
    // usando las variables de entorno en caso que deban sobreescribir alguna informacion 
    dbUrl: process.env.DB_URL || 'mongodb+srv://db_valero:17410336@cluster0-gb6fa.mongodb.net/test',
    port: process.env.PORT || 3000,
    host: process.env.PHOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || 'app',
    filesRoutes: process.env.FILES_ROUTE || 'file'




}

module.exports = config