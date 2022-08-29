import { Routes } from '@angular/router'

const routes: Routes = []

/**
 * Base app routing module
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
