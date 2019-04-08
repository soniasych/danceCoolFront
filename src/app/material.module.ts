import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
    imports: [MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatButtonToggleModule],
    exports: [MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatButtonToggleModule]
})
export class MaterialModule {

}