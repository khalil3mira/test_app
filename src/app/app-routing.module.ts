import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {SearchResultsComponent} from "./search-results/search-results.component";
import {AppComponent} from "./app.component";

const routes: Routes = [

  // Redirect empty path to '/search'
  {path: '', pathMatch: 'full', redirectTo: 'search'},

  // Search route
  {path: 'search', component: SearchComponent},

  // Search results route
  {path: 'results', component: SearchResultsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
