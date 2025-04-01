import { Component, inject } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { DataService } from '../../../../../shared/services/data.service';

@Component({
  selector: 'app-signature-view',
  imports: [NzCardModule, NzAvatarModule],
  templateUrl: './signature-view.component.html',
  styleUrl: './signature-view.component.scss',
})
export class SignatureViewComponent {
  dataService = inject(DataService);
  dataForm = this.dataService.dataForm;
  settingsForm = this.dataService.settingsForm;
}
