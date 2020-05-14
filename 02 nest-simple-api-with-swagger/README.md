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

[Swagger](https://swagger.io) ist ein Tool, welches die Arbeit mit API stark vereinfacht.
Nach der Implementierung bietet der Server unter `//localhost:3000/api` alle verfügbaren API-Schnittstellen an.

## Installation

```bash
$ npm i @nestjs/swagger swagger-ui-express
```

## NestJS Projekt anpassen

### Swagger implementieren
Swagger wird einfach in der `main.ts` zum Server-Startpunkt mit integriert:
```typescript
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    // Swagger integration
    const options = new DocumentBuilder()
        .setTitle('Task API')
        .setDescription('Task API Description')
        .setVersion('1.0')
        .addTag('Task')
        .build()
    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup('api', app, document)

    await app.listen(3000);
}
```
Allein diese Einstellungen reichen aus, um alle Schnittstellen anzuzeigen.

### API
Jeder Controller erhält durch einen eigenen Decorator einen eigenen Abschnitt in Swagger:
```typescript
@ApiTags('tasks') // Swagger Tag Decorator
```
Durch dieses werden alle sich darin befindlichen Requests in Swagger zusammengefasst.

Werden an der API Parameter übergeben, so können diese durch den Parameter-Decorator benannt werden.
```typescript
@ApiParam({name: 'id'})
@Get(':id')
```

Wird ein Body in Form des DTO übergeben, werden alle Properties mit dem Property-Decorator versehen:
```typescript
import { ApiProperty } from '@nestjs/swagger'

export class CreateTaskDto {
    @ApiProperty()
    readonly title: string

    @ApiProperty()
    readonly author: string
}
```

## License

  Nest is [MIT licensed](LICENSE).
