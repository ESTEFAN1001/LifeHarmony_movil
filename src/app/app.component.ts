import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Formulario', url: '/form', icon: 'reader' },
    { title: 'Alimentos Permitidos', url: '/permitidos', icon: 'fitness' },
    { title: 'Alimentos Moderados', url: '/moderados', icon: 'heart-half' },
    { title: 'Alimentos Riesgosos', url: '/riesgosos', icon: 'fast-food' },
  ];
  constructor() {}
}
