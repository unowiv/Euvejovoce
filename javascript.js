function enviarResposta(numero_desafio) {
    alert("letras minusculas e sem acento");
    const resposta = prompt("????")

    if (numero_desafio == 1){

        if (resposta == "let the games begin"){
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
                content = "0 ; url = tela2.html"/>
            `;
        } else {
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = erro.html"/>
            `;
        }
    } else if (numero_desafio == 2){
        if (resposta == "ser humano"){
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
                content = "0 ; url = tela3.html"/>
            `;
        } else {
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = erro1.html"/>
            `;
        }
    } else if (numero_desafio == 3){
        if (resposta == "abril"){
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = tela4.html"/>
            `;
        } else {
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = erro2.html"/>
            `;
        }
    } else if (numero_desafio == 4){
        if (resposta == "leonardo da vinci"){
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = tela5.html"/>
            `;
        } else {
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = erro3.html"/>
            `;
        }
    }else if (numero_desafio == 5){
        if (resposta == "rousseau e maquiavel"){
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = tela6.html"/>
            `;
        } else {
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = erro4.html"/>
            `;
        }
    }else if (numero_desafio == 6){
        if (resposta == "paris"){
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = tela7.html"/>
            `;
        } else {
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = erro5.html"/>
            `;
        }
    }else if (numero_desafio == 7){
        if (resposta == "sete"){
                document.getElementById("main").innerHTML = `
                <meta http-equiv="refresh" 
                content = "0 ; url = tela8.html"/>
                `;
        } else {
                document.getElementById("main").innerHTML = `
                <meta http-equiv="refresh" 
                content = "0 ; url = erro6.html"/>
                `;
        }
    }else if (numero_desafio == 8){
        if (resposta == "aravipac"){
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = tela9.html"/>
            `;
        } else {
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = erro7.html"/>
            `;
        }
    }else if (numero_desafio == 9){
            if (resposta == "continue a nadar"){
                document.getElementById("main").innerHTML = `
                <meta http-equiv="refresh" 
                content = "0 ; url = tela10.html"/>
                `;
            } else {
                document.getElementById("main").innerHTML = `
                <meta http-equiv="refresh" 
                content = "0 ; url = erro8.html"/>
                `; 
            }
    }else if (numero_desafio == 10){
        if (resposta == "renascença italiana."){
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = telafinal.html"/>
            `;
        } else {
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = erro9.html"/>
            `;
        }
    }else if (numero_desafio == 11){
        if (resposta == "LV"){
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = telafinal.html"/>
            `;
        } else {
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = erro9.html"/>
            `;
        }
    }else if (numero_desafio == 12){
        if (resposta == "eu sou genial"){
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = telafinal.html"/>
            `;
        } else {
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = erro9.html"/>
            `;
        }
    }else if (numero_desafio == 13){
        if (resposta == "profecia cassandra"){
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = telafinal.html"/>
            `;
        } else {
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = erro9.html"/>
            `;
        }
    }else if (numero_desafio == 14){
        if (resposta == "lisa gherardini"){
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = telafinal.html"/>
            `;
        } else {
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = erro9.html"/>
            `;
        }
    }else if (numero_desafio == 15){
        if (resposta == "Οιδίπους"){
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = telafinal.html"/>
            `;
        } else {
            document.getElementById("main").innerHTML = `
            <meta http-equiv="refresh" 
            content = "0 ; url = erro9.html"/>
            `;
        }
}    }