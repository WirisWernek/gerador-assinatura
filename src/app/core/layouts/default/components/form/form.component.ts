import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule, NzSelectSizeType } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { DataService } from '../../../../../shared/services/data.service';

@Component({
  selector: 'app-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzStepsModule,
    NzSelectModule,
    NzColorPickerModule,
    NzSliderModule,
    NzSwitchModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  dataService = inject(DataService);
  current = 0;

  dataForm = this.dataService.dataForm;
  settingsForm = this.dataService.settingsForm;

  settingsOptions = this.dataService.settings;

  size: NzSelectSizeType = 'default';

  back() {
    if (this.current > 0) {
      this.current -= 1;
    }
  }
  next() {
    if (this.current < 3) {
      this.current += 1;
    }
  }
}
