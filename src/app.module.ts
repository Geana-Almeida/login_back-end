import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ProdService } from './data/services/prod.service';


@Module({
  imports: [
    ConfigModule.forRoot(),
      TypeOrmModule.forRootAsync({
        useClass: ProdService,
        imports: [ConfigModule],
  }),
    UsuarioModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
