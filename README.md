# :rocket: Quickstart NodeJS + Typescript

Esse projeto foi criado utilizando o framework [express]('https://expressjs.com/pt-br/').

Esse projeto contém todos os scripts do [express]('https://expressjs.com/pt-br/') com configurações adicionais de [typescript]('https://www.typescriptlang.org/'), [eslint](https://eslint.org/), [prettier](https://prettier.io/), e [husky](https://typicode.github.io/husky/#/).

### :wink: Antes de iniciar o projeto

Verifique se o NodeJS instalado em sua máquina está na versão 14 ou superior. Digite no terminal o seguinte comando:

`$ node -v`

Caso não tenha ou esteja desatualizado, navegue até o site do nodeJS e baixe a versão mais recente.

Mais informações: [site oficial](https://nodejs.org/en/).

### :fire: Iniciando o projeto

`$ npm i`

Quando concluir a instalação das dependências, abra o projeto no seu editor, crie um arquivo `.env` com as mesmas informações do `.env.example` e peça as infomações com alguém da sua equipe para popular as variáveis.

Digite no seu terminal `$ npm run postgres:up` para criar o container do Docker.

Digite no seu terminal `$ npm run typeorm:run` para executar as migrations da API.
Se ocorrer algum erro dizendo que o database {nomeQueVoceColocouNaEnv} não existe, mude a porta POSTGRES_PORT da .env, delete o container do docker e crie-o novamente

Após realizar essas alterações, digite no seu terminal `$ npm run dev` e aguarde o seu projeto iniciar :smile:

### :computer: Configurações VSCode

- Atualmente existe uma pasta **.vscode** de configurações para o editor visual studio code, nela se encontram as configurações para debugar códigos nodeJS direto pela IDE e também um formatador de códigos ao salvar.

Instalar as extensões no seu **visual studio code**:

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig).

- [ENV](https://marketplace.visualstudio.com/items?itemName=IronGeek.vscode-env).

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens).
