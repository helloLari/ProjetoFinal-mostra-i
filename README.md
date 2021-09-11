# Mostra-í
## Sobre o Projeto:

Mostra-í é uma plataforma de dados sobre
Bootcamps, Voltada ao público LGBTQIAP+, mulheres e outras minorias.
Com a finalidade de agrupar informações de bootcamps ativos em um
único local, incluindo valores, faixa etária, tempo de
duração, como funcionam os processos seletivos,
materiais e equipamentos, empregabilidade, etc.;
Disponibilizar avaliações dos cursos com notas e

O usuário poderá:
- cadastrar novos Boostcamps
- buscar as bootcamps por meio de ID
- modificar algumas informação
- deletar algum bootcamp

_______________________________
Tecnologias que vamos usar:

|Ferramenta |	Descrição |
|-|-|
| javascript |	Linguagem de programação
|nodejs	| Ambiente de execução do javascript
|express	|Framework NodeJS
|mongoose|	Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections
|nodemon	|Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente
|npm |Gerenciador de pacotes
|MongoDb	|Banco de dado não relacional orietado a documentos
|Robo 3T	|Interface gráfica para verificar se os dados foram persistidos
|Postman	|Interface gráfica para realizar os testes

__________________________


       📁 Arquitetura
        📁 ProjetoFinal-mostra-i
          |
          |-  📁 src
          |    |
          |    |- 📁 data
          |         |- 📄 database.js
          |
          |    |- 📁 controllers
          |         |- 📄 listacursos.js
          |         |- 📄 createcursos.js
          |         |- 📄 updatecursos.js
          |         |- 📄 deletarcursos.js
          |         
          |
          |    |- 📁 models
          |         |- 📄 cursosjs
          |       
          |
          |    |- 📁 routes
          |         |- 📄 cursosRoutes.js 
          |       
          |
          |- 📄 package-lock.json
          |- 📄 node_modules
          |- 📄 .gitignore
          |- 📄 package.json
          |- 📄 server.js


## Requisitos:

⭐ "/curso" Deverá retornar todos os cursos
⭐ "/curso/{:id}" Deverá retornar as cursos por id
⭐ "/curso" Deverá cadastrar novas cursos
⭐ "/curso/{:id}/update" Deverá alterar os cursos por id
⭐ "/curso/{:id}/delete" Deverá deletar bootcamp por id
______________________________________________________
Regras de negócio:

✅ Não deverá ser possível criar bootcamps com o mesmo nome

____________________________________
Dados para Collection curso
id: autogerado e obrigatório


titulo : texto e obrigatório
criadoEm: data gerada automaticamente e obrigatório
API deve retornar seguinte JSON:

        [
             Curso: {
            
                
                _id: '55354bb8f1df34507398fae2',
            titulo: 'Reprograma',
            categoria:'Backend',
            tempo: '16 semanas aos Sabádos',
            publico: 'Especifico para o público feminino',
            observacao:'Processo seletivo feito via inscrição e workshop',
            empregabilidade:'Parceria com empresas',
            valor:'Grátis',
            inscricao:'2021-10-04T23:59:31.775Z',
            }
        ]
_______________________     

Desenvolvida por: Larisse Rodrigues 
Contato: https://www.linkedin.com/in/hello-lari/


Agradecimento: Equipe Reprograma e Turma On12 :heart: 
