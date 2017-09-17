import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import {Ng2CloudinaryModule} from "ng2-cloudinary";
import {FileUploadModule} from "ng2-file-upload";
import {Ng2FileDropModule} from "ng2-file-drop";
import {AuthService} from "./components/auth/auth.service";
import {AuthModule} from "./components/auth/auth.module";
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import {ConfirmComponent} from "./components/header/confirm.component";
import {ConfirmModalComponent} from "./components/admin/confirm-modal/confirm-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BootstrapModalModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    Ng2FileDropModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmComponent
  ]
})
export class AppModule { }
