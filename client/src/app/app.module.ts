import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthInterceptor } from './auth/services/authinterceptor.service';
import { BoardsModule } from './boards/boards.module';
import { BoardModule } from './board/board.module';
import { SocketService } from './shared/types/services/socket.service';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    HomeModule, 
    BoardsModule, 
    BoardModule,  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    SocketService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}