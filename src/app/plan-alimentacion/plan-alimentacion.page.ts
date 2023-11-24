import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'https://localhost:7150/api/PlanAlimentacion';

  constructor(private http: HttpClient) {}
  getDietaFiltrada(restricciones: string[], peso: number, talla: number, edad: number, tipoDiabetes: string) {
    // Preparar los parámetros para la solicitud
    let params = new HttpParams();
    if (restricciones && Array.isArray(restricciones)) {
      restricciones.forEach((restriccion) => {
        params = params.append('restricciones', restriccion);
      });
    }
    params = params
      .append('peso', peso.toString())
      .append('talla', talla.toString())
      .append('edad', edad.toString())
      .append('tipo_diabetes', tipoDiabetes);

    return this.http.get<PlanAlimentacion[]>(`${this.apiUrl}/SelectDieta`, { params });
  }
}

interface DietaSemanal {
  dia: string;
  alimentos: string[];
  porciones: string[];
}

interface PlanAlimentacion {
  id: string;
  nombre: string;
  recomendacion: string;
  icon: string;
  tipo_diabetes: string;
  edad_min: number;
  edad_max: number;
  peso_min: number;
  peso_max: number;
  talla_min: number;
  talla_max: number;
  alimentos: DietaSemanal[];
}


@Component({
  selector: 'app-plan-alimentacion',
  templateUrl: './plan-alimentacion.page.html',
  styleUrls: ['./plan-alimentacion.page.scss'],
})
export class PlanAlimentacionPage implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, private apiService: ApiService) { }
  info: PlanAlimentacion[] = [];
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const formDataParam = params.get('formData');

      if (formDataParam) {
        const formData = JSON.parse(formDataParam);
        alert('Datos del formulario en la otra página: ' + JSON.stringify(formData));
        
        this.apiService.getDietaFiltrada(
          formData.restricciones, 
          formData.peso, 
          formData.talla, 
          formData.edad, 
          formData.tipoDiabetes
        ).subscribe(
          (data) => {
            this.info = data;
            console.log(data);
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        alert('No se encontraron datos del formulario en la URL.');
      }
    });
  }

}

