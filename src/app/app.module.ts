import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"frontendexam-c8c0f","appId":"1:992813250466:web:b084f6253a379291fd24fb","databaseURL":"https://frontendexam-c8c0f-default-rtdb.firebaseio.com","storageBucket":"frontendexam-c8c0f.appspot.com","apiKey":"AIzaSyCEn1_SdvEh7g4uLU6-Yfp5DuNDTYNOkJY","authDomain":"frontendexam-c8c0f.firebaseapp.com","messagingSenderId":"992813250466"})),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
