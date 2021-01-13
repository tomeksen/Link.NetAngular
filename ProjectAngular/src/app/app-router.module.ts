import { importExpr } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import {RouterModule, Router, Routes} from '@angular/router'

//component
import { EntriesComponent } from "./entries/entries.component";


const routes: Routes =[
    { path: '', component: EntriesComponent },
    {path:'entries',component: EntriesComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouterModule{}