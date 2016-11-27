import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BugListComponent } from './bug-list/bug-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'bugs', component: BugListComponent }
        ])
    ],
    exports: [ RouterModule ]
})
export class BugRoutingModule {  }