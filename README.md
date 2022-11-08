<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Este projeto tem como objetivo, apresentar um fluxo simples de compra (sem método de pagamento) de um game. As funcionalidades são criar cadastro/login com geração e validação de token, rotas para criação de produto e categoria via GraphQL, bem como quote e order. O banco utilizado foi o MongoDB. Todas as mutations ou Queries podem ser acessadas no link http://localhost:5000/graphql. Esse projeto tem seu funcionamento exclusivamente via backend, não existe sua versão front-end e nem testes unitários com Jest.

Abaixo, é possívle ver alguns exemplos de mutation e query:
```
{
  product(name: "Cyberpunk 2077") {
    name
    custom_price
    original_price
  }
}

mutation{
  createProductGraphQL(data: {
    name: "Halo 5",
    brand: "Microsoft",
    url_key: "halo.url",
    original_price: 200.00,
    custom_price: 180.00
  }) {
    original_price
    name
    brand
  }
}

{
  cateogry(url_key: "root.url") {
    parent_id
    name
    url_key
    children_url
    description
  }
}

mutation{
  createCategoryGraphQL(data:{
    name: "Computer",
    description: "Jogos para computador",
    url_key: "pc.url",
    parent_id: "root.url",
    children_url: [
      "steam.url",
      "epic.url"
    ],
    products: []
  }){
    name
    description
    url_key
    children_url
    products {
      name
      url_key
    }
  }

}

mutation {
  deleteCategoryByUrlKey(data: {
    url_key: "console.url"
  }) {
    url_key
  }
}

mutation {
  createQuote(
    data: {
      products: ["residentevil.url"]
      price_total: 100.00
      discount_amount: 20.00
      cart_key: "teste5"
      user: "joaoureliofrancisco"
    }
  ) {
    products
    price_total
    discount_amount
    cart_key
    user
  }
}

```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
