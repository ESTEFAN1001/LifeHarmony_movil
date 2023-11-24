import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moderados',
  templateUrl: './moderados.page.html',
  styleUrls: ['./moderados.page.scss'],
})
export class ModeradosPage implements OnInit {

  constructor() { }
  grupo_alimenticio = [
    { 
      title: 'Lacteos',
      tipo: 'lacteos', 
      description: 'Ricos en calcio y vitaminas, los lácteos como la leche, el queso y el yogur son fundamentales para el desarrollo y mantenimiento de huesos fuertes.', 
      icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/lacteos.jpg?alt=media&token=1cd1b7c2-b59f-456e-ac67-22aa889158b5', 
      link:'/alimentos-m' 
    },
    { 
      title: 'Carnes', 
      tipo: 'carnes', 
      description: 'Fuente esencial de proteínas y hierro, las carnes, incluyendo aves, pescado y carnes rojas, contribuyen a la reparación muscular y al transporte de oxígeno en la sangre.', 
      icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/carnes.jpg?alt=media&token=3c5c3908-d323-45ef-9830-0a947404f713', 
      link:'/alimentos-m'
    },
    { 
      title: 'Cereales y otros', 
      tipo: 'cereales', 
      description: 'Los cereales son la base de la alimentación diaria proporcionando energía a través de carbohidratos complejos, fibra dietética y una variedad de vitaminas del complejo B.', 
      icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/cereales.jpg?alt=media&token=1f5dc9b4-c25e-4685-aa16-43f03793836a', 
      link:'/alimentos-m'
    },
    { 
      title: 'Verduras y legumbres', 
      tipo: 'verduras', 
      description: 'Las verduras son una fuente rica de vitaminas, minerales, fibra y antioxidantes, necesarios para el correcto funcionamiento del organismo y la prevención de enfermedades.', 
      icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/verduras.jpg?alt=media&token=430cb2c7-ca3d-4d68-b334-c47940ba982f', 
      link:'/alimentos-m'
    },
    { 
      title: 'Frutas', 
      tipo: 'frutas', 
      description: 'Dulces y nutritivas, las frutas aportan una amplia gama de nutrientes esenciales como vitamina C, potasio y fibra dietética, junto con una variedad de fitoquímicos beneficiosos.', 
      icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/frutas.jpg?alt=media&token=b8144c70-63ad-4970-8b36-2609e8ce132e', 
      link:'/alimentos-m'
    },
    { 
      title: 'Aceites y Grasas', 
      tipo: 'grasas', 
      description: 'Aunque se deben consumir con moderación, los aceites y las grasas son importantes para la salud del cerebro y el corazón, y son necesarios para la absorción de vitaminas liposolubles.', 
      icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/grasas.jpg?alt=media&token=97c3cab1-cb04-4529-b7e7-3de43eb94b23', 
      link:'/alimentos-m'
    },
    { 
      title: 'Azucares', 
      tipo: 'azucares', 
      description: 'Los azúcares proporcionan energía rápida al cuerpo, pero su consumo debe ser limitado para evitar el aumento de peso y el riesgo de enfermedades crónicas como la diabetes tipo 2.', 
      icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/azucares.jpg?alt=media&token=248ad753-4163-450f-a10d-8b5ebb6da01d', 
      link:'/alimentos-m' 
    },
  ];
  ngOnInit() {
  }

}
