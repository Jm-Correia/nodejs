module.exports = function(application){
    application.get("/formulario_inclusao_noticias", function(req,res){
        res.render("admin/form_inclusao_noticias");
    
    }); 
    application.post("/noticias/salvar", function(req,res){
        var noticia = req.body;
        var con = application.config.dbConnection();
        var adminDAO = new application.app.models.NoticiasDAO(con);  
        //conexao
        //model
        adminDAO.salvaNoticia(noticia, function(error, result){
           res.redirect("/noticias");
         }); 
        //salvar 
    }); 
}