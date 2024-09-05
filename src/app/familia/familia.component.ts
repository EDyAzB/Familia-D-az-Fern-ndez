import { Component, inject, OnInit } from '@angular/core';
import { Familia, miembrosFamilia } from './miembrosFamilia.mock';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-familia',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './familia.component.html',
  styleUrl: './familia.component.css'
})
export class FamiliaComponent implements OnInit{
  familiaList = miembrosFamilia;


 

  ngOnInit(): void {
    
  }
 
}
