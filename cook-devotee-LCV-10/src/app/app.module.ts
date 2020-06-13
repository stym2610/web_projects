import { CanActivateTeam } from './shared/components/reusable-component/canActivateTeam/canActivateTeam';
import { ScrollToComponent } from './shared/components/reusable-component/scroll-to/scroll-to.component';
import { RegisterDevoteeComponent } from './register-devotee/register-devotee.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CouraselComponent } from './courasel/courasel.component';
import { SectionComponent } from './section/section.component';
import { RankComponent } from './rank/rank.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { RegistrationService } from './shared/services/registration.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { StorageFirebaseService } from './shared/services/storage.firebase.service';
import { DevoteeRegistrationService } from './shared/services/devotee.registration.service';
import { SearchCookService } from './shared/services/search-cook.service';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoaderService } from './shared/services/loader.service';
import { WindowService } from './shared/services/window.service';
import { UtilityService } from './shared/services/utility.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment.prod';
import { ProfileLoaderModule } from './profile-loader/profile-loader.module';
import { RegisterFormComponent } from './shared/components/reusable-component/register-form/register-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EmailVerificationComponent } from './shared/components/reusable-component/email-verification/email-verification.component';
import { MobileVerificationComponent } from './shared/components/reusable-component/mobile-verification/mobile-verification.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalPopUpComponent } from './shared/components/reusable-component/modal-pop-up/modal-pop-up.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CategoryBoxesComponent } from './category-boxes/category-boxes.component';
import { SlideContentComponent } from './slide-content/slide-content.component';
import { FooterComponent } from './footer/footer.component';
import { LatestFromBlogComponent } from './latest-from-blog/latest-from-blog.component';
import { ArticleComponent } from './article/article.component';
import { DirectorBlogComponent } from './director-blog/director-blog.component';
import { GuideComponent } from './guide/guide.component';
import { RegisteredCookListComponent } from './registered-cook-list/registered-cook-list.component';
import { AdminComponent } from './admin/admin.component';
import { RatingBarComponent } from './shared/components/reusable-component/rating-bar/rating-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    RegisterDevoteeComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CouraselComponent,
    SectionComponent,
    RankComponent,
    AboutComponent,
    ContactComponent,
    LoaderComponent,
    RegisterFormComponent,
    EmailVerificationComponent,
    MobileVerificationComponent,
    ModalPopUpComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    ScrollToComponent,
    CategoryBoxesComponent,
    SlideContentComponent,
    FooterComponent,
    LatestFromBlogComponent,
    ArticleComponent,
    DirectorBlogComponent,
    GuideComponent,
    RegisteredCookListComponent,
    AdminComponent,
    RatingBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    ReactiveFormsModule,
    FormsModule,
    ProfileLoaderModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [AngularFirestore, RegistrationService, 
    StorageFirebaseService, DevoteeRegistrationService,
  SearchCookService, LoaderService, WindowService, UtilityService, AngularFireStorage, CanActivateTeam],
  bootstrap: [AppComponent]
})
export class AppModule { }
