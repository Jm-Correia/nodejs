module.exports.formulario_inclusao_noticia = function(application, req, res){
    //Logica aqui dentro
    res.render("admin/form_inclusao_noticias", {validacao : {}, noticia : {}});
}
module.exports.salvar_noticia = function(application, req, res){
    var noticia = req.body;

    req.assert('titulo','Titulo e obrigatorio').notEmpty();
    req.assert('resumo','O resumo deve conter entre 10 e 100 caracteres').len(10,100);
    req.assert('data_noticia','Data Obrigatorio').notEmpty();

    var erros = req.validationErrors();
   
    
    if(erros){
        res.render("admin/form_inclusao_noticias",{validacao : erros, noticia: noticia});
        return;
    }

    var con = application.config.dbConnection();
    var adminDAO = new application.app.models.NoticiasDAO(con);  
    //conexao
    //model
    adminDAO.salvaNoticia(noticia, function(error, result){
       res.redirect("/noticias");
     }); 
    //salvar 
}