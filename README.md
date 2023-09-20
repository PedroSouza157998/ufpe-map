# ufpe-map-node
## Membros
Nossa equipe é composta pelos seguintes desenvolvedores

1. Pedro Souza(gp) - pams@cin.ufpe.br
2. Caio Elias - cerp@cin.ufpe.br  
3. Evandro Junior - essj2@cin.ufpe.br
4. Luana Cristina - lccb@cin.ufpe.br
5. Demetriu Gabriel - dgas@cin.ufpe.br

### Nosso Projeto:
O UFPE Map é uma solução de intercomunicação entre centros da UFPE, com ele será possível que alunos de diferentes centros tenham uma comunicação fácil quando o assunto são eventos e acontecimentos ao redor de nosso campus.

Nosso grupo é dividido em 5 pessoas, onde fizemos duplas, Caio e Evandro são responsáveis pelo Back-end, Luana e Demetriu pelo Front-end e Pedro é o responsável pelo gerenciamento do projeto e ajuda na parte geral.

Utilizamos métodos ágeis como Kanban, scrum e etc, para melhor organização do projeto, e para a comunicação utilizamos o discord e o whatsapp, como praticamente todos os integrantes do grupo são estagiários a conciliação para reuniões era mais difícil, então utilizamos o whatsapp para comunicação geral e decisões.

Algo que fizemos muito durante o projeto foi o pair programming, as duplas sempre trabalhavam juntas para resolver os problemas e isso ajudou bastante na produtividade e na resolução de problemas.

Fizemos testes unitários ao finalizar cada task, além de verificar a integridade do código com o que já havia sido feito, dividimos branchs para as principais features e iamos fazendo merge conforme as tarefas eram finalizadas.

#### Design e Arquitetura:
Para a arquitetura de nosso projeto escolhemos utilizar a MVC que é um padrão de arquitetura de software que separa uma aplicação em três componentes principais: Model (Modelo), View (Visualização) e Controller (Controlador), para melhor organização e manutenção do código.

#### Passo a passo para o funcionamento do projeto:
- Usuário deve possuir o node.js v19 em sua máquina
- Em seguida deve ser feito o download do repositório
- No terminal use o comando `npm install` ou `yarn`
- Para abrir o projeto em sua máquina local utilize o comando `npm run dev` 

## Guia de Uso

### Cadastro de Usuário

- Ao acessar a tela de login, caso não possua uma conta, clique na opção 'Criar Novo Usuário'.
- Complete o formulário de cadastro com seus dados.

### Cadastro de Eventos no Mapa

- Após o cadastro, você será direcionado para a tela do mapa.
- Para adicionar um novo evento, clique com o botão direito no local desejado no mapa.
- Preencha o formulário de cadastro do evento.

### Visualização de Detalhes

- Ao clicar em uma seta de localização no mapa, serão exibidos a descrição e detalhes do evento correspondente.

Aproveite a nossa aplicação e explore os recursos disponíveis!

#### Acontecimentos do projeto e lições aprendidas
- Um dos maiores problemas que tivemos durante o projeto foi com as rotas do next v13, ficamos impossibilitados de utilizar as rotas como planejávamos, e para resolver esse problema não encontramos outra solução além de regredir o next para sua versão 12, com isso conseguimos seguir adiante com o projeto
- Outra falha que deu dor de cabeça durante a implementação do projeto foi um erro que acontecia quando utilizavamos um middleware, batemos um pouco de cabeça e a solução era relativamente simples
- Também nos arrependemos de não utilizar migration, ajudaria bastante no versionamento do banco de dados
- Fizemos todo o código do middleware mas a utilização dele não foi feita pois com o deploy dava um erro que não conseguimos corrigir

#### features incompletas ou que não conseguimos implementar
- gostaríamos de ter implementado um filtro para ver todos os eventos e filtrá-los de acordo com a necessidade
- a tela de troca de email foi finalizada mas não conseguimos junta-la ao resto do projeto
- uma das nossas ideias era ter um cardapio do RU sempre marcado no mapa para informar os alunos, por causa de alguns problemas com o deploy não conseguimos colocar, mesmo com parte do código pronto e funcionando
- a tela de troca de senha foi finalizada mas não conseguimos junta-la ao resto do projeto


#### Aqui você tem acesso as wiki´s sobre nosso código
[WikiBack-end](wikiBack.md)
[WikiFront-end](WikiFront-end.md)

#### modelo er do projeto
![image](https://github.com/PedroSouza157998/ufpe-map-node/assets/78317354/a6fad4b3-364a-4efb-adb3-9fc767d742b8)

