<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Beschreibung

[Nest](https://github.com/nestjs/nest) ist ein Framework zur Erstellung effizienter und zuverlässiger serverseitiger Anwendungen.

Dazu nutz Nest eine modulare Architektur und die Programmiersprache Typescript von Microsoft&trade;.

## Installation

```bash
$ npm install -g @nestjs/cli
$ nest -v
```

## NestJS Projekt

### Projekt erstellen
```bash
# create project
$ nest new nest-simple-api

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Module, Controller, Service
```bash
# create module
$ nest g module tasks

# create controller (without testfiles)
$ nest g controller tasks --no-spec

# create service (without testfiles)
$ nest g service tasks --no-spec
```

Wird ein Module, Controller oder Service erstellt, werden diese automatisch in der `app.module.ts` aufgenommen.
Es ist jedoch sinnvoll zuerst ein Module zu erstellen. Der erstellte Controller und Service wird dann in dem Module mit integriert.

### DTO (Data Transfer Object)
Um die Arbeit mit Eingaben und Ausgaben zu vereinfachen, wird ein DTO-Objekt erstellt. Dieses enthält alle zu übertragenden Informationen:
```typescript
export class TaskDTO {
    id: string
    title: string
    description: string
}
```

Um die Typensicherheit zu gewährleisten, ist es sinnvoll neben dem DTO ein Interface zu erstellen.
```typescript
export interface ITask {
    id?: string,
    title: string,
    description: string
}
```

### API (Application Programming Interface)
Da hier keine Datenbank angesprochen wird, greift die Schnittstelle auf ein Array im Service zu:
```typescript
Tasks: ITask[] = [
    { id: '1', title: 'Erster Task', description: 'Das ist der erste Task' },
    { id: '2', title: 'Zweiter Task', description: 'Das ist der zweite Task' }
]
```

Das vorgehen ist dabei immer gleich: Der Controller stellt die Schnittstelle zur Verfügung, der Service bindet die Logik zur Verarbeitung.

#### Get-Request
```typescript
// Controller
@Get()
getTasks(): ITask {
    return this.tasksService.getTask()
}
```

```typescript
// Service
getTasks(): ITask[] {
    return this.Tasks
}
```

## License

  Nest is [MIT licensed](LICENSE).
