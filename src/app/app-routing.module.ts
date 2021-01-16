import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import{canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from "@angular/fire/auth-guard"

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);

const redirectLoggedInToChat = () => redirectLoggedInTo(['/home']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./services/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToChat)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'preview',
    loadChildren: () => import('./preview/preview.module').then( m => m.PreviewPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
