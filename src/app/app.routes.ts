import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ResumeComponent } from './resume-component/resume.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'resume', component: ResumeComponent},
  // {path: 'projects', component: ProjectsComponent},


  // Redirects/404 page
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];