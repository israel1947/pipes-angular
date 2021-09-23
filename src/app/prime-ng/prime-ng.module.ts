import { NgModule }    from '@angular/core';
//primeNg
import {ButtonModule}  from 'primeng/button';
import {CardModule}    from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {MenubarModule} from 'primeng/menubar';




@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNgModule { }
