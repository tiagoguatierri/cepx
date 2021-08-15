
# CEPX

Consulta de CEP em tempo real em multiplos serviços (BrasilAPI, Viacep, Widenet).

## Features

* Dados sempre atualizados por fazer consulta em tempo real.

* Alta disponibilidade por utilizar vários serviços como fallback.

* Sempre retorna a resposta mais rápida por fazer consulta de forma concorrente.

* Não depende de Backend. Pode ser usado diretamente no seu projeto Frontend.

* Utiliza programação reativa por meio da biblioteca RxJs.

* 100% escrito em Typescript

  

## Como instalar

`npm install --save cepx`
ou
`yarn add cepx`

## Como usar

Por padrão, o método irá buscar nos 3 serviços (BrasilAPI, Viacep e Widenet), e retornar a resposta mais rápida.
~~~javascript
// import { findByCep } from 'cepx'
// ou
import findBycep from 'cepx'

// cep deve ser string com ou sem pontuação
const cep = '85814-740'

findByCep(cep).subscribe(console.log)

// Se encontrado
{
  "cep": "85814740",
  "street": "Avenida Uirapuru",
  "district": "Floresta",
  "city": "Cascavel",
  "state": "PR",
  "service": "viacep"
}

// ou null se não encontrar
~~~

## Options
* `services`: Lista de serviçoes `AvaliableService[]` para consulta. Padrão são todos.

~~~javascript
import { AvaliableService, findByCep } from 'cepx'

// cep deve ser string com ou sem pontuação
const cep = '85814-740'

findByCep(cep, { services: [AvaliableService.Viacep] }).subscribe(console.log)

// Se encontrado
{
  "cep": "85814740",
  "street": "Avenida Uirapuru",
  "district": "Floresta",
  "city": "Cascavel",
  "state": "PR",
  "service": "viacep"
}

// ou null se não encontrar
~~~

**Biblioteca em versão inicial, não recomento ainda o uso em produção**

#### Questões em abeto

* Escrever testes unitários
* Tratar erros de entrada (validar o número de cep fornecido)
* Tratar erros de cada serviço