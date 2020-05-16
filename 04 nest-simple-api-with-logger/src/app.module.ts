import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

import { MongooseModule } from '@nestjs/mongoose'
import { LoggerMiddleware } from './shared/middleware/logger.middleware';

@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost/tasks', { useNewUrlParser: true }), 
        TasksModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    /*configure(consumer: import("@nestjs/common").MiddlewareConsumer) {
        throw new Error("Method not implemented.");
    }*/
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('tasks')
    }
}
