import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { Inicio } from './components/inicio/inicio';
import { GestionLibros } from './components/gestion-libros/gestion-libros';
import { GestionResenas } from './components/gestion-resenas/gestion-resenas';
import { GestionSolicitudes } from './components/gestion-solicitudes/gestion-solicitudes';
import { ComunidadReputacion } from './components/comunidad-reputacion/comunidad-reputacion';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children:[
            {path: '', redirectTo:'Inicio', pathMatch:'full'},
            {path: 'Inicio' ,component: Inicio},
            {path: 'gestion-libros' ,component: GestionLibros},
            {path: 'gestion-resenas' ,component: GestionResenas},
            {path: 'gestion-solicitudes' ,component: GestionSolicitudes},
            {path: 'comunidad-reputacion' ,component: ComunidadReputacion},

        ]
    }
];
