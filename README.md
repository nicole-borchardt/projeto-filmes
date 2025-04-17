# ProjetoFilmes

Este projeto foi desenvolvido com [Angular CLI](https://github.com/angular/angular-cli) versão 17.3.3, como parte de um desafio técnico para consumir uma API e apresentar as informações de forma estruturada e interativa.

## Funcionalidades

A aplicação apresenta duas views principais:

- **Dashboard**
- **Lista de Filmes**

Cada view pode ser acessada pelo menu de navegação da aplicação.

---

## 📊 Dashboard

A view de Dashboard exibe:

1. **Anos com mais de um vencedor**
2. **Top 3 estúdios com mais vitórias**
3. **Produtores com maior e menor intervalo entre vitórias**
4. **Vencedores por ano**, com seleção dinâmica via campo de busca.

---

## 🎞 Lista de Filmes

A view de Lista de Filmes apresenta:

- Todos os filmes da base de dados.
- Paginação.
- Filtros por:
  - **Ano**
  - **Vencedor (sim/não)**

---

## 🧪 Testes Unitários

Foram implementados testes unitários para todas as funcionalidades principais, cobrindo:

- Criação de componentes
- Comportamento de filtros e paginação
- Requisições à API
- Comportamentos de inicialização e interação do usuário

Os testes foram criados utilizando o `TestBed` do Angular com mocks e spies.

---

### Rodando a aplicação

Rode `ng serve` para executar o servidor de desenvolimento. Acesso o link `http://localhost:4200/` no navegador. 

### Rodando os testes

Rode `ng test` para executar os teste unitários via [Karma](https://karma-runner.github.io).

