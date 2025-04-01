import { Component } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormComponent } from "./components/form/form.component";
import { SignatureViewComponent } from "./components/signature-view/signature-view.component";

@Component({
  selector: 'app-default',
  imports: [NzLayoutModule, NzFlexModule, FormComponent, SignatureViewComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {

}
