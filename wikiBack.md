# Geral 💻🌐
Para usos gerais utilizamos bibliotecas como: express, body-parser, cors, jsonwebtoken, SQLite3, dotenv, jest, axios


### Middleware 🔐	
Nessa parte do código iremos verificar em rotas específicas se o usuário que está tentando acessar possui o Token JWT, este token é entregue ao usuário ao fazer o login, a lógica é bem simples:
Pegamos o header do requerimento e retiramos o token, caso o token seja correspondente com o que é necessário para acessar aquela rota o usuário recebe a autorização para acessá-lá, caso o token não exista ou seja diferente do que o servidor possui o usuário receberá o erro 401.
Esta função será introduzida dentro das rotas com funcionalidades importantes e que precisam de uma camada extra de segurança.

### Controller💡
O Controller, intermediará as requisições e respostas entre o front-end(View) e o back-end(Model), toda requisição feita deverá passar pelo Controller, ele vai receber e tratar a requisição de acordo com suas regras de negócio, acessar a Model (banco de dados, serviços, etc) para verificar ou modificar dados, e então retornar a resposta apropriada para a View.
Importante destacar que é dentro do controller do login, que é repassado ao usuário o token JWT, token importante para adicionar mais segurança ao projeto.

### Models 🗂️
Na nossa arquitetura MVC, o Models é a camada responsável por representar os dados, separando a lógica da manipulação dos dados da interface com o usuário e do manuseio dos processos da aplicação. Os models definem as propriedades e métodos para operações como inserir, editar, remover e consultar registros no banco de dados, na tabela de cada entidade.

### Routes 🗺️
As rotas são responsáveis por mapear URLs para ações específicas em controladores. Elas são configuradas em um arquivo central e direcionam as solicitações HTTP para os controladores apropriados. As URLs são analisadas, permitindo que o sistema determine qual controlador e ação devem ser invocados. Isso promove a organização, separação de responsabilidades e facilita a manutenção. também é nele que pode ser determinado em que rotas o middleware será usado

### Services 🛠️
A pasta services serve para o controller são, os serviços que o back-end irá utilizar, como o banco de dados e as respostas http.

### App ⌨️
O arquivo app.ts representa a camada central do projeto, que controla o fluxo principal da aplicação de forma coesa e organizada, seguindo os princípios da arquitetura MVC. É responsável por definir as rotas da aplicação e direcionar as requisições e respostas entre as camadas. Ele configura o servidor HTTP(Express) e mapeia as rotas aos métodos dos controllers específicos, Cada rota é vinculada a um Controller, que por sua vez interage com os models para manipulação dos dados e gera a resposta apropriada.

