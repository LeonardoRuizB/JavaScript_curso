// ---------------- Exercício 1) ----------------

function pegar_paises(callback) {

    $.ajax({
        url: "https://restcountries.com/v3.1/all",
        type: "GET",
        dataType: "json",
    }).done(function(data) {
        callback(data);
    }).fail(function() {
        console.log("Erro na requisição");
    })

}

function popular_paises(paises) {
    for(var a=0; a < paises.length; a++) {
        document.getElementById("paises").innerHTML += "<option value='"+ paises[a].cca3 + "'>" + paises[a].name.common + "</option>";
    }
}

pegar_paises(popular_paises);

// ---------------- Exercício 2) ----------------

var cursos = [
    {
        "titulo": "PHP",
        "aval": []
    },
    {
        "titulo": "Javascript",
        "aval": [5,5,4.5,4,5,5,5,4.5]
    },
    {
        "titulo": "Python",
        "aval": [5,5,4,4,5,3,5,4,4,5]
    },
    {
        "titulo": "Machine Learning",
        "aval": [5,5,4.5]
    }
];

function media_aval(lista_cursos) {
    for (var a=0; a < lista_cursos.length; a++) {
        try {
            if (lista_cursos[a].aval.length == 0) {
                throw "Curso " + lista_cursos[a].titulo + " não possui avaliações.";
            } else if (lista_cursos[a].aval.length < 5) {
                throw "Curso " + lista_cursos[a].titulo + " possui menos de 5 avaliações.";
            }

            var soma = 0;
            for (var b=0; b < lista_cursos[a].aval.length; b++) {
                soma += lista_cursos[a].aval[b];
            }

            var media = soma / lista_cursos[a].aval.length;

            console.log("Curso " + lista_cursos[a].titulo + " tem média de avaliações: " + media.toFixed(2));
        } catch(err) {
            console.log(err);
        }
    }
}

media_aval(cursos);

// ---------------- Exercício 3) ----------------

var theUserNamespace = {
    'usuarios': {
        "33884h": "João Gomes",
        "43585f": "Maria Luisa",
        "93661h": "Pedro Henqrique",
        "23172g": "Paula Carvalho",
    },
    'acessos': [
        {
            "usuario": "33884h",
            "data": "10/07/18"
        },
        {
            "usuario": "33884h",
            "data": "11/07/18"
        },
        {
            "usuario": "43585f",
            "data": "19/07/18"
        },
        {
            "usuario": "93661h",
            "data": "24/07/18"
        },
        {
            "usuario": "23172g",
            "data": "13/08/18"
        },
        {
            "usuario": "93661h",
            "data": "14/08/18"
        }
    ],

    'imprimir_acessos': function() {
        for (var a=0; a < this.acessos.length; a++) {
            $("#acessos").append('<li>Acesso de ' + this.usuarios[this.acessos[a].usuario] + ', no dia ' + this.acessos[a].data + '</li>');
        }
    }
}

theUserNamespace.imprimir_acessos();

// ---------------- Exercício 4) ----------------

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function pegar_pergunta(callback) {

    $.ajax({
        url: "https://opentdb.com/api.php?amount=1&category=11",
        type: "GET",
        dataType: "json",
    }).done(function(data) {
        callback(data.results[0]);
    }).fail(function() {
        console.log("Erro na requisição");
    })

}

$("#nova_pergunta").click(function() {
    $("#opcoes").html("");
    $("#erro_acerto").html("");
    $("#pergunta").html("");
    $("#nova_pergunta").hide();
    pegar_pergunta(gerar_pergunta);
})

function gerar_pergunta(pergunta) {
    $("#pergunta").html(pergunta.question);
    var resposta_correta = pergunta.correct_answer;
    var respostas = pergunta.incorrect_answers;
    respostas.push(resposta_correta);
    respostas = shuffle(respostas);

   for (var a=0; a < respostas.length; a++) {
        $("#opcoes").append('<input type="radio" name="opcao" value="' + respostas[a] + '"> ' + respostas[a] + '<br>');
   }

   $("#opcoes input[name='opcao']").change(function() {
        $("#submeter").show();
   });

   $("#submeter").click(function() {
    
    var resposta_escolhida = $("#opcoes input[name='opcao']:checked").val();
    $("#submeter").hide();

    if (resposta_escolhida == resposta_correta) {
        $("#erro_acerto").html("<span style='color: green; font-weight: bold'>Parabéns, você acertou! A resposta é: " + resposta_correta + "</span>");
    } else {
        $("#erro_acerto").html("<span style='color: red; font-weight: bold'>Você errou! A resposta é: " + resposta_correta + "</span>");
    }

    $("#opcoes input[name='opcao']").attr('disabled', true);

    $("#nova_pergunta").show();

   });
}

pegar_pergunta(gerar_pergunta);