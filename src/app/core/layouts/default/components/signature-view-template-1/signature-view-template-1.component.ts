import { Component, inject } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DataService } from '../../../../../shared/services/data.service';

@Component({
  selector: 'app-signature-view-template-1',
  imports: [NzCardModule, NzAvatarModule, NzIconModule, NzDividerModule],
  templateUrl: './signature-view-template-1.component.html',
  styleUrl: './signature-view-template-1.component.scss',
})
export class SignatureViewTemplate1Component {
  dataService = inject(DataService);
  dataForm = this.dataService.dataForm;
  settingsForm = this.dataService.settingsForm;
}
