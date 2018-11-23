function NoticiasDAO(connection){
  
    this._connection = connection;

}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(id, callback){
    this._connection.query('select * from noticias where = '+ id, callback);
}

NoticiasDAO.prototype.salvaNoticia = function(noticia, callback){
    console.log(noticia);
    this._connection.query('Insert into noticias set ?', noticia, callback);
}


module.exports = function(){
    return NoticiasDAO;
}