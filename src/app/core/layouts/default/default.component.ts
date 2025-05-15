import { Component } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormComponent } from './components/form/form.component';
import { SignatureViewTemplate2Component } from './components/signature-view-template-2/signature-view-template-2.component';

@Component({
  selector: 'app-default',
  imports: [
    NzLayoutModule,
    NzFlexModule,
    FormComponent,

    SignatureViewTemplate2Component,
  ],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss',
})
export class DefaultComponent {}
