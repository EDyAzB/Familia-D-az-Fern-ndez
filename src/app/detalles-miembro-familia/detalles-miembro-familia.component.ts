import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Familia, miembrosFamilia } from '../familia/miembrosFamilia.mock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-miembro-familia',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './detalles-miembro-familia.component.html',
  styleUrl: './detalles-miembro-familia.component.css'
})
export class DetallesMiembroFamiliaComponent implements OnInit{

persona?: Familia;
miembrosFamilia1: Familia[] = miembrosFamilia;
loading: boolean = true;

constructor(private _route: ActivatedRoute){}

ngOnInit(): void {
  setTimeout(() => {
    this._route.params.subscribe(params => {
            this.persona = this.miembrosFamilia1.find(persona => persona.id == params['miembroId']);
            this.loading = false

   })
  }, 1500);
}
}

