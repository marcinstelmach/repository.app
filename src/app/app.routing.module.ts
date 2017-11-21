import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {RepositoryComponent} from './components/repository/repository.component';
import {VersionComponent} from './components/version/version.component';
import {FileComponent} from './components/file/file.component';
import {AuthGuard} from './services/authGuard';


const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'detail/:id', component: HeroDetailComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'repository', component: RepositoryComponent, canActivate: [AuthGuard]},
  {path: 'version', component: VersionComponent, canActivate: [AuthGuard]},
  {path: 'file', component: FileComponent, canActivate: [AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
