import { NgModule } from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card"
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon"

@NgModule({
    exports:[
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatIconModule
    ]
})
export class MaterialModule{

}