import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SettingsModel } from '../models/settings.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataForm: FormGroup;
  settingsForm: FormGroup;
  formBuilder = inject(FormBuilder);
  settings: SettingsModel = {
    theme: ['light', 'dark'],
    rounded: false,
    roundedSize: 0,
    shadow: false,
    color: '#1890ff',
    fontSize: 14,
    fontFamily: [
      'Arial, sans-serif',
      'Courier New',
      'Georgia',
      'Times New Roman',
      'Verdana',
    ],
    fontWeight: ['normal', 'bold', 'bolder', 'lighter'],
    fontStyle: ['normal', 'italic', 'oblique'],
    pictureShape: ['circle', 'square'],
    pictureSize: ['large', 'medium', 'small'],
  };

  constructor() {
    this.dataForm = this.formBuilder.group({
      nome: [''],
      email: [''],
      telefone: [''],
      cargo: [''],
      departamento: [''],
      empresa: [''],
      site: [''],
      facebook: [''],
      twitter: [''],
      instagram: [''],
      linkedin: [''],
      portfolio: [''],
      youtube: [''],
      github: [''],
      profilePicture: [''],
    });

    this.settingsForm = this.formBuilder.group({
      theme: ['light'],
      rounded: [false],
      shadow: [false],
      color: ['#1890ff'],
      fontSize: ['14px'],
      fontFamily: ['Arial, sans-serif'],
      fontWeight: ['normal'],
      fontStyle: ['normal'],
      pictureShape: ['circle'],
      pictureSize: ['large'],
    });
  }
}
