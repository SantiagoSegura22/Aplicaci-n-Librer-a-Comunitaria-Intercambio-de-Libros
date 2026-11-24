import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { libro } from "../models/Libro";


@Injectable({
    providedIn:'root',
})

export class InicioService{
    private LibreriaInicioUrl =  'http://localhost:3000/libros'

    constructor(private http: HttpClient){}

    getComestibles(): Observable<libro[]>{
        return this.http.get<libro[]>(this.LibreriaInicioUrl);
    }
}