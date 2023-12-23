import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
{ path: 'about', component: AboutMeComponent },
{ path: 'education', component: EducationComponent },
{ path: 'experience', component: ExperienceComponent },
{ path: 'more', component: ProjectsComponent },
{ path: 'stack', component: TechStackComponent },
{ path: 'aboutMe', component: MobileComponent },
{ path: ' ', component: AboutMeComponent },
{ path: '**', component: AboutMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
