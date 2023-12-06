$(function () {

    $(document).on("click", "#btIncluir", function () {

        inserePessoaNoBanco();

        function inserePessoaNoBanco() {

            //pegar dados da tela
            nome = $("#campoNome").val();
            senha = $("#campoSenha").val();

            // preparar dados no formato json
            var dados = JSON.stringify({ nome: nome, senha: senha});
            // fazer requisição para o back-end
            $.ajax({
                url: 'http://localhost:5000/incluir_pessoa',
                method: 'POST',
                dataType: 'json', // os dados são recebidos no formato json
                //contentType: 'application/json', // dados enviados em json
                data: dados, // estes são os dados enviados
                success: pessoa_incluida, // chama a função listar para processar o resultado
                error: erroAoIncluirPessoa
            });
            function pessoa_incluida(retorno) {
                if (retorno.resultado == "ok") { // a operação deu certo?
                    // informar resultado de sucesso
                    alert("pessoa cadastrada com sucesso!");
                    $("#campoNome").val();
                    $("#campoSenha").val();
                } else {
                    // informar mensagem de erro
                    alert(retorno.resultado + ":" + retorno.detalhes);
                }
            }
            function erroAoIncluirPessoa(retorno) {
                // informar mensagem de erro
                alert("ERRO: " + retorno.resultado + ":" + retorno.detalhes);
            }
        }

    });
});