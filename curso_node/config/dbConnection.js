var mysql = require('mysql');

var connMysql = function(){
    console.log('Conexao com o db estabelecida');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
}

module.exports = function(){
    console.log('Carregado Modulo db!!!');
    return connMysql;
} 