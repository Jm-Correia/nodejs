var app = require("./config/server");

//exemplo de criacao de rota sem consign
//  var inclusao = require("./app/routes/formulario_inclusao_noticias")(app);
//  var home = require("./app/routes/home")(app);
//  var noticias = require("./app/routes/noticias")(app);

app.listen(3000, function(){
    console.log("Servidor ON");
});



