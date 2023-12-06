$(function () { // quando o documento estiver pronto/carregado

    // tenta obter o login
    var login = localStorage.getItem("login")

    // não está logado?
    if (login == null) {
        // deixa o formulário de login visível
        $("#meuform").removeClass("d-none");
        // mensagem padrão
        var mensagem = "Faça login para iniciar";
    } else {
        // altera a mensagem para boas vindas :-)
        var mensagem = "Bem vindo, " + login;
        // exibe a tela de logout
        $("#logout").removeClass("d-none");
        // exibe o botão de logout
        $("#btLogout").removeClass("d-none");
        // exibe a tabela
        $("#tabela").removeClass("d-none");
        $("#comecar").removeClass("d-none");
    }

    // coloca a mensagem na tela
    $("#mensagem").text(mensagem);

    // console.log("login: ",login);

    // código para mapear click do botão incluir pessoa
    $(document).on("click", "#btLogin", function () {
        //pegar dados da tela
        login = $("#campoNome").val();
        senha = $("#campoSenha").val();

        var rota = `http://localhost:5000/listar`;

        // chamada ajax
        var acao = $.ajax({
            url: rota,
            dataType: 'json', // os dados são recebidos no formato json,
        });
           
        acao.done(function (retorno) {
            if (retorno.resultado == "ok") {
                var funcionou = false
                pessoas = retorno.detalhes;
                for (var i in retorno.detalhes) {
                    if (login == pessoas[i].nome && senha == pessoas[i].senha) {
                        // guarda na sessao de forma mais permanente
                        localStorage.setItem('login', login);
            
                        // atualiza a página
                        window.location = 'login.html';
                        var funcionou = true
                    }        
                }
                if (funcionou == false) {
                    alert("Login ou senha inválido(s)!!");
                }    
            }
        });

    });
    

    // código para mapear click do botão incluir pessoa
    $(document).on("click", "#btLogout", function () {
        // limpar o login do storage
        localStorage.removeItem("login");

        // atualiza a página
        window.location = 'login.html';
    });

}); 