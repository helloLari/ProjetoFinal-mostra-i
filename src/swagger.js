const swaggerAutogen=require('swagger-autogen')()

const outputFile='./src/swagger_output.json'
const endpointFile=['./src/app.js']

const doc={
    info:{

        version:"1.0.0",
        title:"mostrai",
        description:"API para consumir informações sobre Bootcamps"
    },
    host:"localhost:8080",
    basePath:"/",
    schemes:['http','https'],
    consumes:['application/json'],
    produces:['application/json'],
    tags:[{
            "name":"Bootcamps",
            "description":"Endpoints relacionados aos recursos do Mostraí "

    }],
    definitions: {
        Predefinições: {
            _id: '55354bb8f1df34507398fae2',
            titulo: 'Reprograma',
            categoria:'Backend',
            tempo: '16 semanas aos Sabádos',
            publico: 'Especifico para o público feminino',
            observacao:'Processo seletivo feito via inscrição e workshop',
            empregabilidade:'Parceria com empresas',
            valor:'Grátis',
            inscricao:'2021-10-04T23:59:31.775Z',
            __v: 0

        },
        NovoCurso: {
            $titulo: 'Laboratória Brasil',
            categoria:'Front-end',
            $tempo: 'Integral',
            $publico: 'Apresentar-se e identificar-se como mulher',
            observacao:'Ter disponibilidade para frequentar o curso 5x por semana. O bootcamp é um programa intensivo. As aulas acontecem de segunda a sexta das 13h às 18h.',
            empregabilidade:'Parceria com empresas',
            valor:'As estudantes recebem uma bolsa durante o curso e só pagam uma parte quando conseguirem um emprego na área de tecnologia após terminarem o bootcamp. O valor do bootcamp para as estudantes é de R$ 17.500 (dezessete mil e quinhentos reais) e poderá ser pago em até 24 vezes quando você iniciar a sua jornada como programadora e após receber seu primeiro salário integral.',
        }
    }
}

swaggerAutogen(outputFile,endpointFile,doc)