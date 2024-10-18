import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { WarcraftService } from '../warcraft.service';
import { Race } from '../race.type';
import { Class } from '../class.type';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavigationComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  warcraftService = inject(WarcraftService);

  warcraftForm = this.formBuilder.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
    confirm_password: ['', Validators.required],
    race: ['', Validators.required],
    class: ['', Validators.required],
    level: ['', [Validators.required, Validators.min(1), Validators.max(60)]],
    description: ''
  }, { validators: this.passwordMatchValidator });

  races: Race[] = [];
  classes: Class[] = [];

  ngOnInit(): void {
    this.loadRaces();
    this.loadClasses();
  }

  loadRaces(): void {
    this.warcraftService.getAllianceRaces().subscribe((allianceRaces) => {
      this.warcraftService.getHordeRaces().subscribe((hordeRaces) => {
        this.races = [...allianceRaces, ...hordeRaces];
      });
    });
  }

  loadClasses(): void {
    this.warcraftService.getClasses().subscribe((classes) => {
      this.classes = classes;
    });
  }

  passwordMatchValidator(form: any): { [key: string]: boolean } | null {
    return form.get('password').value === form.get('confirm_password').value ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.warcraftForm.valid) {
      console.log(this.warcraftForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  get name() {
    return this.warcraftForm.get('name');
  }
  
  get password() {
    return this.warcraftForm.get('password');
  }
  
  get confirmPassword() {
    return this.warcraftForm.get('confirm_password');
  }
  
  get race() {
    return this.warcraftForm.get('race');
  }
  
  get class() {
    return this.warcraftForm.get('class');
  }
  
  get level() {
    return this.warcraftForm.get('level');
  }
}