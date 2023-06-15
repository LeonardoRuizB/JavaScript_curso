$("document").ready(function() {
    // ------------------------ AULA 3 - VARIÁVEIS ------------------------
    var latitude = 40.87663;
    var longitude = -8.08373;
    
    console.log(latitude);
    console.log(longitude);
    
    // ------------------------ AULA 4 - STRINGS ------------------------
    var nome = "João";  // podem ser usadas aspas duplas
    var sobrenome = 'Gomes';  // ou aspas simples
    var cpf = '111.111.111-11';  
    var telefone = "998887655";
    var ddd = '21';
    var email = 'joao@gmail.com';
    var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";
    
    console.log("Nome completo: " + nome + " " + sobrenome); 
    
    console.log("(" + ddd + ")" + telefone);
    
    console.log("Primeira letra do nome: " + nome[0]);
    console.log("Ultima letra do nome: " + nome[3]);
    
    console.log("Número de caracteres do telefone: " + telefone.length);
    
    // ------------------------ AULA 5 - NÚMEROS ------------------------
    var num1 = 20;
    var num2 = 3;
    
    var soma = num1 + num2;
    var subtracao = num1 - num2;
    var divisao = num1 / num2;
    var multiplicacao = num1 * num2;

    var media = (num1 + num2) / 2;

    console.log("A média é: " + media);

    console.log(Math.pow(num1,4));

    var potencia = Math.pow(2,4);  // Neste caso usamos o método pow do objeto Math, que faz potenciação.
    // Este método requer duas informações separadas por vírgula entre parênteses: o número base, e a potência.
    // Isso significa que temos 24, que dá 16.

    var arredonda = Math.round(2.7); // Arredondamento. Resultado: 3

    var arredonda_cima = Math.ceil(4.3) // Arredondamento para cima. Resultado: 5

    var arredonda_baixo = Math.floor(4.6) // Arredondamento para baixo. Resultado: 4

    var raiz = Math.sqrt(36) // Raiz quadrada. Resultado: 6

    var increment = 20;
    increment += 5; // redefinimos o valor dela, para o valor que ela já possuía, mais 5.
    console.log(increment); // O console mostrará 25

    // esta estrutura variável = variável + valor, pode ser simplificada com o operador incremental +=

    increment = 1;
    increment += 5;
    console.log(increment); // O console mostrará 6

    // podemos também usar *=, /= e -= para multiplicação, divisão e subtração

    var ddd = 21;
    var telefone = 99887655;

    // conversão para STRING
    var ddd_string = ddd.toString();
    var tel_string = telefone.toString();

    console.log(ddd_string + tel_string);

    // conversão para int
    var idade = "17";

    idade = parseInt(idade);
    idade++;
    console.log(idade);

    //------------------------ AULA 6 - TIPOS DADOS BOOLEANS ------------------------
    var teste = 65 < 60;
    var idade = "65";
    var teste2 = idade == 65;

    console.log(teste2);

    var vtype = "teste";

    console.log(typeof vtype == "number");

    // ------------------------ AULA 7 - TIPOS DE DADOS NULL E UNDEFINED ------------------------
    var undf;

    console.log(typeof undf);

    var nome = "Pedro";
    console.log(nome[5]);

    var temperatura = 35;
    console.log(temperatura);

    temperatura = null;
    console.log(temperatura);

    console.log(typeof temperatura);

    // ------------------------ AULA 10 - TRABALHANDO COM DOM ------------------------
    document.getElementById("caixa_amarela").innerHTML = "<h1>" + "Caixa amarela" + "</h1>";

    // Pega o que tem dentro da variável
    var conteudo = document.getElementById("caixa_azul").innerHTML;

    document.getElementById("caixa_azul").innerHTML = "<h1>" + conteudo + "</h1>";

    // ------------------------ AULA 11 - FUNÇÕES ------------------------
    function soma_numeros() {
        var x = 5;
        var y = 2;
        var soma = x + y;
        console.log(soma);
    }

    soma_numeros();

    function soma_args(num1, num2) {
        var soma = num1 + num2;
        return soma;
    }

    console.log("Resultado da Soma: " + soma_args(10, 25));
    var soma_f = soma_args(10, 25);

    function valor_imc(peso,altura) {
        var imc = peso / (altura * altura);
        return imc;
    }

    var meu_peso = parseFloat(document.getElementById("peso").innerHTML);

    var minha_altura = parseFloat(document.getElementById("altura").innerHTML);

    var meu_imc = valor_imc(meu_peso, minha_altura);

    document.getElementById("imc").innerHTML = meu_imc.toFixed(2);

    // ------------------------ EXERCICIO ------------------------
    function KMtoMiles(km) {
        var milhas = km * 0.621;
        return milhas;
    }

    console.log(KMtoMiles(122));

    // ------------------------ AULA 12 - ARRAYS ------------------------

    var alunos = [ "João" , "Maria", "José" ];
    var num_primos = [ 2, 3, 5, 7, 11, 13 ];

    console.log(alunos.length); //vai retornar 3
    console.log(num_primos[2]); // vai retornar 5

    var grupos = [ 
        [ "João" , "Maria" ],
        [ "Pedro" , "Joana", "André", "Júlio" ],
        [ "Carolina" , "Helena", "Marcelo" ]
    ];

    console.log(grupos.length);
    console.log(grupos[1][1]);

    var cursos2 = [ "HTML", "Python", "PHP" ];

    cursos2.push("Javascript");

    console.log(cursos2);  // O console mostrará [ "HTML", "Python", "PHP", "Javascript" ]

    cursos2.unshift("Bootstrap");

    console.log(cursos2);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]

    cursos2.pop();

    console.log(cursos2);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP" ]

    cursos2.shift();

    console.log(cursos2);  // O console mostrará [ "HTML", "Python", "PHP" ]

    var ingredientes = [ "pão branco", "Queijo", "Presunto" ];

    ingredientes[3] = "Maionese";

    console.log(ingredientes);

    var alunos2 = [ "João" , "Maria", "José", "Fernanda", "Pedro", "Elisa" ];
    console.log(alunos2.slice(0, -2));

    // O console mostrará [ "João" , "Maria", "José" ]

    // ------------------------------- AULA 13 - ARRAYS ------------------------

    var funcionario = {
        'nome': 'Pedro Souza Gomes',
        'ano_nasc': 1972,
        'cpf': '111.111.111.11',
        'cargo': 'Analista de Sistemas'
    };

    console.log(funcionario['nome']);
    console.log(funcionario.ano_nasc);

    funcionario['cargo'] = "Gerente de T.I.";
    funcionario.cnh = "1982736455";

    console.log(funcionario);

    var cursos = [
        {
            'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
            'avaliacoes': 680,
            'alunos': 2300,
            'categorias': ['programacao', 'tecnologia']
        },
        
        {
            'titulo': 'Aprenda PHP e faça sites dinâmicos',
            'avaliacoes': 180,
            'alunos': 350,
            'categorias': ['desenvolvimento web', 'programacao']
        },
        
        {
            'titulo': 'Excel do Zero ao Avançado',
            'avaliacoes': 420,
            'alunos': 1800,
            'categorias': ['produtividade', 'gestão']
        }
        
    ];
    console.log(cursos[1].categorias[0]);

    cursos[2].categorias[1] = "Administração de empresas";
    console.log(cursos);

    // ------------------------ AULA 14 - MÉTODOS DE OBJETOS ------------------------

    var aluno = {
        'nome': 'Maria',
        'sobrenome': 'Pereira',
        'ano_nasc': 1992,
        'nome_completo': function () {
            var n_completo = this.nome + " " + this.sobrenome;
            return n_completo;
        },
        'idade_aluno': function () {
            var idade = 2023 - this.ano_nasc;
            return idade;
        }
    };

    console.log(aluno.nome_completo());
    console.log("A idade do aluno(a) é: " + aluno.idade_aluno());

    // ------------------------ AULA 16 - EVENTOS ------------------------

    document.getElementById("click-me").onclick = function () {
        alert("Você clicou no botão");
    };

    document.getElementById("hover-me").onmouseover = function () {
        alert("Você passou com o cursor no botão");
    };

    document.getElementById("leave-me").onmouseout = function () {
        alert("Você saiu com o cursor do botão");
    };

    document.onkeydown = function() {
        alert('Você apertou a tecla: ' + event.keyCode);
    };

    function button_clicked() {
        alert("Você clicou no botão");
    };

    // ------------------------ AULA 17 - MANIPULAÇÃO DO CSS ------------------------

    document.getElementById("botao_cor").onclick = function () {
        this.style['background-color'] = "purple";
        this.style.transform = "translateX(100px)";
    };

    // ------------------------ AULA 18 - OUTROS MÉTODOS getElement ------------------------

    var exemplo = document.getElementsByClassName("exemplo");

    exemplo[0].innerHTML = "teste1";

    console.log(exemplo);

    var exemplo = document.getElementsByTagName("p");

    console.log(exemplo);

    // ------------------------ AULA 19 - LOOPS FOR E FOR/IN ------------------------

    for (var a=0; a < 5; a++) {
        console.log(a);
    }

    // FOR quando são arrays
    var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

    for (var b=0; b < alunos.length; b++) {
        console.log(alunos[b]);
    }

    // FOR/IN quando são objetos
    var carro = {
        'Ano': 2018,
        'Modelo': 'Fox',
        'Cilindradas': '1.8',
        'Combustível': 'Gasolina'
    }

    for (var prop in carro) {
        console.log(prop + ': ' + carro[prop]);
    }

    var elementos = document.getElementsByClassName("exemplo");

    for (var c=0; c<elementos.length; c++) {
        elementos[c].style.color = "red";
        elementos[c].style['font-weight'] = "bold";
        elementos[c].innerHTML = "teste " + (c+1);
    }

    var elementos2 = document.getElementsByTagName("p");

    for (var d=0; d<elementos2.length; d++) {
        elementos2[d].style.color = "orange";
        elementos2[d].style['font-weight'] = "bold";
    }

    var elementos3 = document.getElementsByTagName("h4");

    for (var e=0; e < elementos3.length; e++) {
        elementos3[e].style.color = "pink";
        elementos3[e].style['font-weight'] = "bold";
        elementos3[e].style['font-size'] = "20px";
    }

    var elementos4 = document.getElementsByTagName("h3");

    for (var e=0; e < elementos4.length; e++) {
        elementos4[e].style.color = "blue";
        elementos4[e].style['font-weight'] = "bold";
    }

    // ------------------------ EXERCÍCIO DE PROGRAMAÇÃO 3 ------------------------

    var contas = ["EX_983746", "US_233478", "UK_098765", "EX_098777", "PT_002544"];

    function printEXAccounts(teste) {
        for (var i=0; i < teste.length; i++) {
            if (teste[i].slice(0, 2) === "EX") {
                console.log(teste[i]);
            }
        }
    }

    printEXAccounts(contas);

    // ------------------------ AULA 20 - LOOPS WHILE E DO/WHILE ------------------------

    // O While só roda se enquanto é verdadeiro.
    var count = 0;

    while (count < 5) {
        console.log(count);
        count++;
    }

    var elementos = document.getElementsByTagName("p");

    var a = 0;
    while (a < elementos.length) {
        elementos[a].style.color = "orange";
        elementos[a].style['font-weight'] = 'bold';
        a++;
    }

    // O Do While roda e depois ele confirmar se é verdadeiro, caso seja verdadeiro ele volta
    // caso não seja verdadeiro ele pula para próxima

    var count2 = 10;

    do {
        console.log(count2);
        count2++;
    } while (count2 < 5);

    // ------------------------ AULA 21 - CONDICIONAIS ------------------------

    var idade = 18;

    if (idade < 18) {
        console.log("Menor de idade");
    } else if (idade  == 18) {
        console.log("Tem 18 anos");
    } else {
        console.log("Maior de idade");
    }

    var nota = 8;
    var faltas = 4;

    // Operador AND (E)
    if (nota >= 7 && faltas <= 4) {
        console.log("Aluno aprovado");
    } else {
        console.log("Aluno reprovado");
    }

    // Operador OR (ou)
    if (nota < 7 || faltas > 4) {
        console.log("Aluno reprovado");
    } else {
        console.log("Aluno aprovado");
    }

    var nome = "Ivan";

    if (nome) {
        console.log("Nome: " + nome);
    } else {
        console.log("Nome não informado");
    }

    // ------------------------ AULA 22 - ANINHAMENTO DE LOOPS E CONDICIONAIS ------------------------

    var socio = true;
    var idade = 25;

    if (socio == true || idade >= 65) {
        console.log("O ingresso é grátis");
    } else {
        if (idade < 18) {
            console.log("Preço a pagar R$6,00");
        } else {
            console.log("Preço a pagar R$12,00");
        }
    }

    var funcionarios = [
        
        {
            'nome': 'Carlos Henrique da Silva',
            'idade': 45,
            'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
            
        },
        
        {
            'nome': 'Maria Helena Pereira',
            'idade': 32,
            'filhos': undefined
            
        },
        
        {
            'nome': 'José Feliciano Maia',
            'idade': 39,
            'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
            
        }
        
    ];

    var list_element = document.getElementById("filhos");
    list_element.innerHTML = "";

    for (var a=0; a < funcionarios.length; a++) {
        if (funcionarios[a].filhos) {
            var lista_filhos = funcionarios[a].filhos
            for (var b=0; b < lista_filhos.length; b++) {
                list_element.innerHTML += '<li>' + lista_filhos[b] + ' - filho de ' + funcionarios[a].nome +'</li>';
            }
        }
    }

    // ------------------------ AULA 24 - BOM Browser Object Model ------------------------

    window.onmousemove = function(e) {
        if (e.pageY < 5) {
            alert('Não perca os descontos exclusivos na seção de promoções');
        }
    };

    // ------------------------ AULA 25 - LOCAL STORAGE ------------------------

    document.getElementById("enviar-nome").onclick = function() {
        // Guardar o nome digitado em local Storage
        var nome = document.getElementById("nome-usuario").value;
        localStorage.setItem("nome", nome);
        
        // Esconder o formulário
        document.getElementById("name-field").style.display = "none";

        // Atualizar e mostrar mensagem de boas vindas
        document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem?";
        document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
        document.getElementById("welcome-area").style.display = "initial";
    };

    if (localStorage.nome) {
        // Esconder o formulário
        document.getElementById("name-field").style.display = "none";
        
        // Atualizar e mostrar mensagem de boas vindas
        document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem?";
        document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
        document.getElementById("welcome-area").style.display = "initial";
    }

    document.getElementById("not-me").onclick = function() {
        // Remover chave nome do local storage
        localStorage.removeItem("nome");
        
        // Esconder mensagem de boas vindas
        document.getElementById("welcome-area").style.display = "none";
        
        // Mostrar formulário
        document.getElementById("name-field").style.display = "initial";
    }

    // ------------------------ AULA 26 - Data e Hora ------------------------

    var data_hoje = new Date();

    console.log(data_hoje.getDate());

    var data_nascimento = "1980-03-01";

    var ano_nascimento = new Date("1980-03-01").getFullYear();
    var ano_atual = new Date().getFullYear();
    var idade = ano_atual - ano_nascimento;
    console.log(idade);

    var data = new Date();

    console.log(data.getTime() / 31536000000);

    var envio = new Date("2018-03-20");
    envio = envio.getTime();

    var entrega = new Date("2018-04-06");
    entrega = entrega.getTime();

    var tempo = (entrega - envio) / 86400000;
    document.getElementById("dias_entrega").innerHTML = tempo + " Dias.";

    // ------------------------ Exercício 4 ------------------------

    var data = new Date();

    document.getElementById("horas").innerHTML = data.getHours();
    document.getElementById("minutos").innerHTML = data.getMinutes();

    // ------------------------ AULA 27 - MÉTODOS DE TEMPO ------------------------

    console.log('Mensagem 1');

    window.setTimeout(function() {
        console.log('Mensagem 2');
    }, 3000);

    document.getElementById("mostrar-loader").onclick = function() {
        document.getElementById("spinner-loader").style.display = "initial";
        
        setTimeout(function() {
            document.getElementById("spinner-loader").style.display = "none";
        }, 5000);
    };

    var count = 0;

    var inter = window.setInterval(function() {
        console.log(count);
        count++;
        if (count >= 10) {
            window.clearInterval(inter);
        }
    }, 1000);

    // Desafio Relógio

    window.setInterval(function() {
        var hora_atual = new Date();
        
        var horas = hora_atual.getHours();
        var minutos = hora_atual.getMinutes();
        var segundos = hora_atual.getSeconds();
        
        function format_time(time) {
            if (time >= 0 && time <= 9) {
                var formatted_time = time.toString();
                formatted_time = "0" + formatted_time;
            } else {
                var formatted_time = time.toString();
            }
            return formatted_time;
        }
        
        document.getElementById("relogio").innerHTML = format_time(horas) + ":" + format_time(minutos) + ":" + format_time(segundos);
    }, 1000);

    // ------------------------ AULA 28 - SWITCH ------------------------

    function valor_pedagio(categoria) {
        
        switch(categoria) {
            case '1':
                return 11.22;
                break;
                
                case '2':
                    return 22.45;
                    break;
                    
                    case '3':
                        return 16.88;
                        break;
                        
            case '4':
                return 33.65;
                break;
                
                default:
                    return "Categoria não encontrada";
                }
            }
            
            var categoria_veiculo = "3";
            
            console.log(valor_pedagio(categoria_veiculo));
            
            categoria_veiculo = "2";
            
            console.log(valor_pedagio(categoria_veiculo));
            
            categoria_veiculo = "5";
            
            console.log(valor_pedagio(categoria_veiculo));
            
            // ------------------------ AULA 29 - BREAK E CONTINUE ------------------------
            
            var x = 0;
            
            while (x < 10) {
                console.log(x);
                x++;
                
                if (x == 5) {
                    break;
                }
            }
            
            var lista = [1,5,9,33,56,89,100,122,145,189,190,199,205,290];
            
            for (var a=0; a < lista.length; a++) {
                if (lista[a] == 33) {
                    console.log("Valor encontrado");
                    break;
                }

        console.log('Tentativa: ' + a);
    }

    var num = 0;

    while (num < 20) {
        
        if (num == 3) {
            num++;
            continue;
        }
        
        console.log(num);
        num++;
    }

    num = 0;

    while (num < 20) {
        num++;
        
        if (num % 2 == 0) {
            console.log(num);;
        }
        
        continue;
    }

    // ------------------------ AULA 30 - FORMULÁRIOS ------------------------

    // Select Box
    document.getElementById("mostrar_opcao").onclick = function() {
        // var campo_select = document.getElementById("options");
        // var indice_selecionado = campo_select.options.selectedIndex;
        // var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
        // document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;
        
        var valor_selecionado = document.getElementById("options").value;
        document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;
    }

    // Radio Buttons

    document.getElementById("mostrar_radio").onclick = function() {
        var radio = document.getElementsByName("genero");
        
        var radio_selected;
        
        for (var a=0; a < radio.length; a++) {
            if (radio[a].checked) {
                radio_selected = radio[a].value;
                break;
            }
        }
        
        document.getElementById("radio_selecionado").innerHTML = radio_selected;
    }

    // Check Boxes

    document.getElementById("mostrar_check").onclick = function () {
        document.getElementById("check_selecionado").innerHTML = "";
        
        var check = document.getElementsByName("interesse");

        for (var b=0; b < check.length; b++) {
            if (check[b].checked) {
                document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
            }
        }
    };

    // Date

    document.getElementById("mostrar_data").onclick = function () {
        
        var data_select = document.getElementById("data_evento").value;
        var data_completa = new Date(data_select);
        document.getElementById("data_selecionada").innerHTML = data_completa; 
        
    };

    // ------------------------ AULA 31 - EVENTO ONCHANGE ------------------------

    // ONCHANGE é sempre que tiver uma alteração
    document.getElementById("escolaridade").onchange = function () {
        
        var campo_select = document.getElementById("escolaridade");
        var indice_selecionado = campo_select.options.selectedIndex;
        var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
        document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;
        
    };

    var check = document.getElementsByName("lanche");

    for (var a=0; a < check.length; a++) {
        
        check[a].onchange = function () {
            
            document.getElementById("check_selecionado").innerHTML = "";
            
            for (var b = 0;  b < check.length; b++) {
                
                if (check[b].checked) {
                    document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
                }
            }
        }  
    }

    // ------------------------ AULA 34 - JQUERY SINTAXE ------------------------

    $("#esconder").click(function() {
        $(".exemplo").hide();
    });

    // ------------------------ AULA 35 - JQUERY / MANIPULAÇÃO DO CONTEÚDO HTML ------------------------

    var conteudo_html = $("#paragrafo-html").html();
    console.log(conteudo_html);

    $("#paragrafo-html").html("Mudar o <i><b>conteúdo</i></b> do parágrafo");

    conteudo_html = $("#paragrafo-html").html();
    console.log(conteudo_html);

    var url_link = $("#paragrafo-link").attr("href");
    console.log(url_link);

    $("#paragrafo-link").attr("href", "http://www.udemy.com");

    var url_link = $("#paragrafo-link").attr("href");
    console.log(url_link);

    $("#mudar_imagem").click(function(){
        $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
        $("#mudar_imagem").hide();
    });

    $("#paragrafo-empty").empty();

    $("#paragrafo-empty").remove();

    // ------------------------ AULA 36 - JQUERY / LOOP EACH ------------------------

    var lista = ["HTML","CSS","Javascript", "jQuery", "PHP"];

    $.each(lista, function(indice, valor) {
        console.log("O elemento de índice [" + indice + "] tem o valor de: " + valor);
    });

    var pessoa = {
        'nome': 'João Pedro',
        'DN': '20/01/1990',
        'CPF': '111.111.111-11'
    };

    $.each(pessoa, function(chave, valor) {
        console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
    });

    var interesses = $("#interesses li");

    // Sempre faz o LOG com o que você tem para saber se está funcionando certinho.
    //console.log(interesses);

    $.each(interesses, function(chave, valor) {
        console.log($(valor).text());
    });

    // ------------------------ AULA 37 - JQUERY / FORMULÁRIOS ------------------------

    var conteudo_input = $("#campo_nome").val();

    console.log(conteudo_input);


    $("#options").change(function(){
        var novo_selecionado = $('#options').find(":selected").text();
        console.log(novo_selecionado);
    });

    $("input[name='interesse']").change(function() {
        
        var checkboxes_selecionados = $("input[name='interesse']:checked");
        var textos = [];
        
        $.each(checkboxes_selecionados, function( index, value ) {
            
            textos.push($(value).parent("span").text());
            
        });
        
        console.log(textos);
        
    });

    // ------------------------ AULA 38 - JQUERY / MANIPULAÇÃO DE CSS ------------------------

    $("#adicionar_classe").click(function() {
        $("#paragrafo-classes").addClass("styling");
    });

    $("#remover_classe").click(function() {
        $("#paragrafo-classes").removeClass("styling");
    });

    $("#alternar_classe").click(function() {
        $("#paragrafo-classes").toggleClass("styling");
    });

    // ------------------------ AULA 39 - JQUERY / EVENTOS ------------------------

    $("#nome").keyup(function() {
        var conteudo = $("#nome").val();

        if (conteudo) {
            $("#confirmar").css("display", "initial");
        } else {
            $("#confirmar").css("display", "none");
        }
    });

    // ------------------------ AULA 40 - JQUERY / EFEITOS ------------------------

    $("#botao-esconder").click(function() {
        $(this).hide(1000, function() { 
            $("#texto-escondido").show();
        });
        
    });

    $("#toggle-tab").click(function() { 
        $("#tab-content").slideToggle();
        $("#toggle-tab").toggleClass("flip");
    });

    // ------------------------ AULA 41 - JQUERY / ANIMATE ------------------------

    $("#animar").click(function() {
        
        $("#quadrado").animate({
            width: "+=100px"
        }, 5000);

        $("#quadrado").animate({
            height: "+=100px"
        }, 5000);
    });

    // ------------------------ AULA 42 - JQUERY / MÉTODOS EM CADEIA ------------------------

    $("#animar").click(function() {
        
        $("#quadrado")
            .animate({
                paddingLeft: "+=100px"
            }, 800)
            .animate({
                height: "+=100px"
            }, 800, function() {
              $("#quadrado").css("background-color", "green");
            });
    });

    // ------------------------ AULA 43 - FUNÇÕES CALLBACK ------------------------

    function pegar_usuario(callback){
        window.setTimeout(function() {
            
            var u = {
                'nome': 'João'
            };
            
            callback(u);

        }, 2000);
    }
            
    pegar_usuario(function(user) {
        console.log('Olá ' + user.nome + ', como vai?');
    });

    // ------------------------ AULA 44 - LIDANDO COM ERROS ------------------------
    

    function pegar_usuario(){

        var u = {
            'nome': 'João'
        };
        return u;
        
    }
            
    function saudar_usuario(user) {
        console.log('Olá ' + user.nome + ', como vai?');
    }

    var user = {'nome': ''};
       
    try {

        if (user.nome == '') {
            throw 'Nome em branco';
        }

        saudar_usuario(user);

    } catch(err) {
        console.log(err);
    }
        
    // FINALLY executa você tendo erro ou não

    // ------------------------ AULA 45 - OPERADOR IF TERNÁRIO ------------------------

    var nome = "";
    // if (nome) {
    //     var mensagem = "Olá " + nome;
    // } else {
    //     var mensagem = "Nome não informado";
    // }

    // IF TERNÁRIO com 1 condição
    var mensagem;
    mensagem = nome ? "Olá " + nome : "Nome não informado";
    console.log(mensagem);


    // IF TERNÁRIO com várias condições
    nome = "Leonardo";
    idade = 20;

    mensagem = (nome && idade) ? "Olá " + nome + ", você tem " + idade + " anos." 
    : (!nome && !idade) ? "Nome e idade não informados" 
    : (!idade) ? "Idade não informada"
    : "Nome não informado";

    console.log(mensagem);

    // ------------------------ AULA 46 - ESCOPO ------------------------

    function criar_nome() {
           // se você não colocar VAR, essa variável fica global
        nome = 'Maria';
        console.log(nome); // O console mostrará 'Maria'
    }

    criar_nome();

    console.log(window.nome);

    var x = 0;

    if (x == 0) {
        // LET cria uma variável local
        let nome = "Mariana";
    }

    console.log(nome);

    // sempre use VAR dentro das funções (FUNCTION) e LET dentro das estruturas de bloco (IF, FOR, etc.)

    for (let a=0; a < 5; a++) {
        console.log(a);
    }

    for (let a=0; a < 10; a++) {
        console.log(a);
    }

    // com const você não consegue alterar o valor como exemplo abaixo:
    const PI = "3.14159";

    PI = 0;

    // ------------------------ AULA 47 - NAMESPACES ------------------------

    // Método 1
    var meuWebApp = {
        'nome': "Felipe",

        'ver_nome': function() {
            console.log(meuWebApp.nome);
        }
    };

    // Método 2
    var meuWebApp = (function() {

        var nome = "Felipe";

        return {
            'ver_nome': function() {
                return nome;
            },
            'mudar_nome': function(novo_nome){
                nome = novo_nome;
            },
            'apagar_nome': function() {
                nome = null;
            }
        }
    })();

    meuWebApp.mudar_nome("João");
    console.log(meuWebApp.ver_nome());

    meuWebApp.apagar_nome();
    console.log(meuWebApp.ver_nome());

    // ------------------------ AULA 48 - JSON ------------------------

    var funcionario = {
        'nome': "Fernanda Costa",
        'd_nascimento': '1988-10-01',
        'CPF': '111.111.111-11'
    };

    // transforma de Objeto ou Array (JavaScript) para JSON
    var funcionario_json = JSON.stringify(funcionario);
    
    // transforma de JSON para Objeto ou Array (JavaScript)
    var funcionario_obj = JSON.parse(funcionario_json);
    console.log(funcionario_obj);

    // ------------------------ AULA 50 - AJAX / REQUEST ------------------------

    var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };

    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=London&appid=894f6f5402daff831f3acae434e70925&units=metric");
    xhttp.send();

    // ------------------------ AULA 51 - AJAX / RESPONSE ------------------------

    function mostrar_temperatura(dados) {
        var dados_obj = JSON.parse(dados);
        console.log("A temperatura em Londres é de " + (dados_obj.main.temp - 273.15).toFixed(1) + " graus Celsius.");
    }

    function mostrar_dados(dados) {
        var dados_obj = JSON.parse(dados);
        console.log(dados_obj);
    }

    function tempo_londres(callback) {
        var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                        
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);
            } 
        };
        xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=London&appid=894f6f5402daff831f3acae434e70925&units=metric");
        xhttp.send();
    }

    tempo_londres(mostrar_dados);

    // ------------------------ AULA 52 - AJAX COM JQUERY ------------------------

    // Padrão
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=London&appid=894f6f5402daff831f3acae434e70925&units=metric",
        type: "GET",
        dataType: "json"
    }).done(function(data) {
        console.log(data.main.temp);
    }).fail(function() {
        console.log("Erro na requisição");
    });

    // Jeito que eu fiz
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=London&appid=894f6f5402daff831f3acae434e70925&units=metric",
        type: "GET",
        dataType: "json"
    }).done(function(data) {
        $("#temp_atual").html(data.main.temp);
        $("#temp_max").html(data.main.temp_max);
        $("#temp_min").html(data.main.temp_min);
    }).fail(function() {
        console.log("Erro na requisição");
    });

    // Jeito que o professor fez
    function apresentar_dados(data) {
        $("#temp_atual").html(data.main.temp);
        $("#temp_max").html(data.main.temp_max);
        $("#temp_min").html(data.main.temp_min);
    }

    function pegar_dados(callback) {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=London&appid=894f6f5402daff831f3acae434e70925&units=metric",
            type: "GET",
            dataType: "json"
        }).done(function(data) {
            callback(data);
        }).fail(function() {
            console.log("Erro na requisição");
        });
    }

    pegar_dados(apresentar_dados);

});