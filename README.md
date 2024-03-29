## Nginode Rocks

<p align="center">
  <img src="https://nodejs.org/static/logos/nodejsStackedDark.svg" width="30%"/>
</p>

Desafio de conclusão do modulo de Docker do curso Full Cycle 3.0.

### Stack

- Docker 
- NodeJs
- Mysql

### O que será executado?

Servidor Nginx rodando como proxy em `localhost:8080` que redireciona para aplicação NodeJs. A cada acesso a aplicação salva um novo nome a lista exibida na pagina inicial. 

#### Executando 

```sh
$ docker-compose up --build
```

*Aplicação disponível em [localhost:8080](localhost:8080)*


