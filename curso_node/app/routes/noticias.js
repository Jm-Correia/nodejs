module.exports = function(aplication){
    aplication.get("/noticias", function(req,res){

    var con = aplication.config.dbConnection();
    var adminDAO = new aplication.app.models.NoticiasDAO(con);
           
        adminDAO.getNoticias(function(error, result){
           //res.send(result);
           res.render("noticias/noticias", {lista : result});
        }); 
    }); 
    aplication.get("/noticia", function(req,res){
           
        adminDAO.getNoticia(1 , function(error, result){
           //res.send(result);
           res.render("noticias/noticias", {lista : result});
        }); 
    }); 
}
