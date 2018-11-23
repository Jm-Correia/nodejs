module.exports = function(application){
    application.get("/formulario_inclusao_noticias", function(req,res){
        application.app.controllers.admin.formulario_inclusao_noticia(application,req, res);
    }); 
    application.post("/noticias/salvar", function(req,res){
        application.app.controllers.admin.salvar_noticia(application,req, res);
    }); 
}