import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage {
  nombre: string = '';
  genero: string = '';
  fechaNacimiento: string = '';
  edad:number = 0;
  peso: number = 0;
  talla: number = 0;
  tipoDiabetes: string = '';
  alergias: string = '';
  actividadFisica: string = '';
  nivelMotivacion: number = 0;
  form: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private alertController: AlertController) {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      genero: ['', Validators.required],
      fechaNacimiento: ['', [Validators.required, this.fechaNacimientoValidator]],
      edad: [0, [Validators.required]],
      peso: [0, [Validators.required, pesoValidator]],
      talla: [0, [Validators.required, tallaValidator]],
      tipoDiabetes: ['', Validators.required],
      alergias: [''],
      actividadFisica: ['', Validators.required],
      nivelMotivacion: [0, Validators.required],
    });
  }
  fechaNacimientoValidator(control: AbstractControl) {
    const fechaNacimiento = new Date(control.value);
    const fechaMinima = new Date('1960-01-01');
    const fechaMaxima = new Date();
    fechaMaxima.setFullYear(fechaMaxima.getFullYear() - 11);
  
    if (fechaNacimiento < fechaMinima || fechaNacimiento > fechaMaxima) {
      return { fechaNacimientoInvalida: true, mensaje: 'La fecha de nacimiento está fuera de rango.' };
    }
  
    return null;
  }
  onSubmit() {
    this.calcularEdad();
    const formData = {
      nombre: this.nombre,
      genero: this.genero,
      fechaNacimiento: this.fechaNacimiento,
      edad:this.edad,
      peso: this.peso,
      talla: this.talla,
      tipoDiabetes: this.tipoDiabetes,
      alergias: this.alergias,
      actividadFisica: this.actividadFisica,
      nivelMotivacion: this.nivelMotivacion,
    };
    console.log(this.form)
    if (this.form.valid) {
      this.calcularEdad();
      console.log('Formulario enviado:', formData);
      this.router.navigate(['/plan-alimentacion', { formData: JSON.stringify(formData) }]);
      this.resetForm();
    } else {
      const fechaNacimientoError = this.form.get('fechaNacimiento')?.hasError('fechaNacimientoInvalida')
        ? this.form.get('fechaNacimiento')?.getError('mensaje')
        : '';
      const pesoError = this.form.get('peso')?.hasError('pesoInvalido')
      ? this.form.get('peso')?.getError('mensaje')
      : '';
      const tallaError = this.form.get('talla')?.hasError('tallaInvalida')
      ? this.form.get('talla')?.getError('mensaje')
      : '';
      this.mostrarAlerta('Formulario Inválido', 'Por favor, completa los campos requeridos.');
    }
  }
  calcularEdad() {
    if (this.fechaNacimiento) {
      const fechaNacimiento = new Date(this.fechaNacimiento);
      const fechaActual = new Date();
      const diferencia = fechaActual.getTime() - fechaNacimiento.getTime();
      const edadEnAnios = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
      this.edad = edadEnAnios;
      console.log(edadEnAnios)
    }
  }
  resetForm() {
    this.nombre = '';
    this.genero = '';
    this.fechaNacimiento = '';
    this.peso = 0;
    this.talla = 0;
    this.tipoDiabetes = '';
    this.alergias = '';
    this.actividadFisica = '';
    this.nivelMotivacion = 0;
  }
  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
  
}
export function pesoValidator(control: AbstractControl): ValidationErrors | null {
  const peso = control.value;

  if (peso < 30 || peso > 200) {
    return { pesoInvalido: true, mensaje: 'El peso debe estar entre 0 y 200 kg.' };
  }

  return null;
}

export function tallaValidator(control: AbstractControl): ValidationErrors | null {
  const talla = control.value;

  if (talla < 1.30 || talla > 2.8) {
    return { tallaInvalida: true, mensaje: 'La talla debe estar entre 0 y 2.5 metros.' };
  }

  return null;
}
