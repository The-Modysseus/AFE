import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { WarcraftService } from '../warcraft.service';
import { Race } from '../race.type';
import { Class } from '../class.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  warcraftService = inject(WarcraftService);

  warcraftForm = this.formBuilder.group({
    name: '',
    password: '',
    confirm_password: '',
    race: '',
    class: '',
    level: '',
    description: ''
  });

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

  onSubmit(): void {
    console.log(this.warcraftForm.value);
  }
}