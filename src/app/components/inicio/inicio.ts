import { Component, computed, inject, signal } from '@angular/core';
import { Libro } from '../../models/Libro';
import { InicioService } from '../../services/InicioService';

@Component({
  imports: [],
  selector: 'app-inicio',
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio {
  private inicioService = inject(InicioService);
  ListaLibros = signal<Libro[]>([]);


  LibrosDestacados = computed(()=> this.ListaLibros().slice(0,4));

  ngOnInit():void{
    this.inicioService.getLibros().subscribe((data: Libro[])=>{
      this.ListaLibros.set(data);
    })
  }
}
