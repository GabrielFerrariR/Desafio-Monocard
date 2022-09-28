# Desafio Monocard

## Proposta

>Criar um mini app que gera um pokemon da geração 1 aleatório e permite nomeá-lo.
>
>Telas:
>Gerador de pokemon
>Lista de pokemons gerados
>
>Api com backend:
>Criar pokemon
>Listar pokemons criados
>
>Api externa:
>https://pokeapi.co/
>- https://pokeapi.co/api/v2/pokemon/[rand 0-151]
>
>DB:
>Pokemons criados [id,timestamp,pokemonid,nome]

<br>

## Resultado
<br><br>

![appgif](./pokeapplication.gif)

## Tecnologias utilizadas

### Front-end

- TypeScript;
- React com componentes funcionais;
- Material UI;
- Axios;
- Nes.css framework;

### Back-end

- Node.js;
- TypeScript;
- Express;
- Mongoose ODM;
- Express-async-erros;
- Programação Orientada a Objetos;
- Arquiterura MSC;
- Padrão API REST;
- Princípios S.O.L.I.D;

### Banco de dados

- MongoDB

### Rodando a aplicação

Clonando o repositório

```bash
git clone git@github.com:GabrielFerrariR/Desafio-monocard.git
#entrar no repositório
cd Desafio-monocard
```

Iniciando o back a partir da raíz do projeto:

```bash
# entrar na pasta da api
cd  api/ 
#  instalar dependências
npm install
# iniciar ambiente de desenvolvimento
npm run dev
```

Iniciando o front a partir da raíz do projeto:

```bash
# entrar na pasta do cliente
cd  client/ 
#  instalar dependências
npm install
# iniciar ambiente de desenvolvimento
npm run dev
```
