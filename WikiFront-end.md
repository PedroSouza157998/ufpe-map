## .next
Esta é uma página de configurações do next.

## cypress 
Pasta da nossa ferramenta de testes, em que dentro delas temos as pastas:
* **compontent**, para testes de componente
* **e2e**, para testes ent-to-ent

## node_modules
Pasta que contêm todas as dependências instaladas do nosso projeto.

## src
Pasta onde está o source do nosso projeto frontend, é o código bruto antes da compilação. Dentro dela temos as respectivas pastas:

#### app
  * Dentro desta pasta estão as páginas da aplicação.
  * Nela temos a pasta de components, onde fica os arquivos da nossa pagina de Maps e arquivos png usados no app.
  * Temos também a pasta modules que relaciona o código em si de todas as páginas da nossa aplicação, dentro dela encontramos as pastas login, map e new-user.
  * Além desses, temos o arquivo layout.tsx que seria o layoutroot da aplicação.

#### global
Pasta de de configuração do CSS com o tailwind (arquivo globals.css) e um arquivo de configuração da api usando axios.

#### pages
Os componentes Pages no Next.js são elementos que residem dentro de uma pasta específica, e suas rotas são automaticamente determinadas com base nos nomes dos arquivos presentes nessa pasta. Dentro da nossa pasta "pages" da aplicação, você encontrará os seguintes arquivos:
  * **_app.tsx:** que seria o "index.js" da aplicação, configurando aspectos globais e layout.
  * **login.tsx:** este arquivo corresponde à página de login do site.
  * **map.tsx:** este arquivo representa a página principal do nosso site, que exibe o mapa da Universidade Federal de Pernambuco (UFPE) e apresenta pontos de eventos no campus.
