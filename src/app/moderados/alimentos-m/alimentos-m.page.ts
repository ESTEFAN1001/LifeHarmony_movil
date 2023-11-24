import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alimentos-m',
  templateUrl: './alimentos-m.page.html',
  styleUrls: ['./alimentos-m.page.scss'],
})
export class AlimentosMPage implements OnInit {

  constructor(private route: ActivatedRoute) { }
  lacteos = [
    { title: 'Leche descremado', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Flacteos%2Fleche.jpg?alt=media&token=ab8dca38-cbbf-4446-8404-163a0d144721' },
    { title: 'Yogur descremado', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Flacteos%2Fyogur.jpg?alt=media&token=5c5a7554-ec37-4ced-921d-83b13b716583' },
  ];
  carnes = [
    { title: 'Carnes rojas', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Fcarnes%2Fcarnes.jpg?alt=media&token=79e7d07a-6830-428c-8863-4064f0384f7a' },
  ];
  cereales = [
    { title: 'Arroz integral', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Fverduras%2Farroz%20integral.jpg?alt=media&token=b075ab08-d6f5-4cc9-9920-65620b0140ac' },
    { title: 'Harina de maiz', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Fverduras%2Fharina%20maiz.jpg?alt=media&token=69998495-550f-405d-8d9d-4c1bdea2c1b6' },
  ];
  /*bebidas = [
    { title: 'Agua', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fbebidas%2Fagua.jpg?alt=media&token=0248f182-34cd-4a76-aee6-c1a0102bed1a' },
    { title: 'Te', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fbebidas%2Fte.jpg?alt=media&token=314b16da-0f2b-4926-9473-af6ea19dcffd' },
  ];*/
  verduras = [
    { title: 'Remolacha', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Fverduras%2Fremolacha.jpg?alt=media&token=5b2db8dd-ca86-4dea-8057-f36cfaea1bac' },
    { title: 'Nabo', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Fverduras%2Fnabo.jpg?alt=media&token=19396d97-7c83-4e7c-b348-956c80d4844d' },
    { title: 'Guisantes', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Fverduras%2Fguisantes.jpg?alt=media&token=a6f6ac42-6a18-43cc-9bb5-cec26d69f72b' },
    { title: 'Camote', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Fverduras%2Fcamote.jpg?alt=media&token=37ef4842-0b50-4831-beec-c134b8ee01a6' },
    { title: 'Yuca', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Fverduras%2Fyuca.jpg?alt=media&token=fb35b0cd-1113-4f2f-ab5a-44df9f040f14' },
  ];
  frutas = [
    { title: 'Papaya', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Ffrutas%2Fpapaya.jpg?alt=media&token=4546a2dd-4a06-43c5-9277-8d451b2162a9' },
    { title: 'Piña', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Ffrutas%2Fpi%C3%B1a.jpg?alt=media&token=1e2efd91-8881-42eb-8c15-f6464a054825' },
    { title: 'Uva', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Ffrutas%2Fuva.jpg?alt=media&token=6625c47e-192c-4010-8cac-93924183e4c8' },
    { title: 'Cereza', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Ffrutas%2Fcereza.jpg?alt=media&token=4736227d-b75f-4a33-9ed4-2942bb363136' },
    { title: 'Sandia', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Ffrutas%2Fsandoa.jpg?alt=media&token=dcf1ae0e-5559-4541-95a4-14560dae21b2' },
  ];
  grasas = [
    { title: 'Aceite de oliva', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Fgrasas%2Faceite%20oliva.jpg?alt=media&token=27c8aa5a-8bf2-4165-8a01-2219d1a202c1' },
    { title: 'Aceite de linaza', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Fgrasas%2Faceite%20linaza.jpg?alt=media&token=b6917fb4-c090-4864-9b17-b3b937e4fa04' },
    { title: 'Aceite de coco', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Fgrasas%2Faceite%20coco.jpg?alt=media&token=960ce84c-b056-4a49-8f9d-83b6447147bf' },
  ];
  azucares = [
    { title: 'Sacarina', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Fazucares%2Faspartame.jpg?alt=media&token=976ae48b-f2f0-4807-9643-a3f5568a3498' },
    { title: 'Aspartame', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/moderados%2Fazucares%2Faspartame.jpg?alt=media&token=976ae48b-f2f0-4807-9643-a3f5568a3498' },
  ];
  

  glacteos = [
    {
      title: 'Lacteos',
      description: 'Ricos en calcio y vitaminas, los lácteos como la leche, el queso y el yogur son fundamentales para el desarrollo y mantenimiento de huesos fuertes.', 
    },
    ];
    gcarnes = [
      { 
        title: 'Carnes', 
        description: 'Fuente esencial de proteínas y hierro, las carnes, incluyendo aves, pescado y carnes rojas, contribuyen a la reparación muscular y al transporte de oxígeno en la sangre.', 
      },
    ];
    gcereales = [
      { 
          title: 'Cereales y otros', 
          description: 'Los cereales son la base de la alimentación diaria proporcionando energía a través de carbohidratos complejos, fibra dietética y una variedad de vitaminas del complejo B.', 
      },
    ];
    gbebidas = [
      { 
          title: 'Bebidas', 
          description: 'Alimentos como la papa, el camote y la yuca ofrecen una alta densidad de nutrientes, son ricos en almidones y una buena fuente de energía.',  
      },
    ];
    gverduras = [
      { 
          title: 'Verduras y legumbres', 
          description: 'Las verduras son una fuente rica de vitaminas, minerales, fibra y antioxidantes, necesarios para el correcto funcionamiento del organismo y la prevención de enfermedades.', 
      },
    ];
    gfrutas = [
      { 
          title: 'Frutas', 
          description: 'Dulces y nutritivas, las frutas aportan una amplia gama de nutrientes esenciales como vitamina C, potasio y fibra dietética, junto con una variedad de fitoquímicos beneficiosos.', 
      },
    ];
    ggrasas = [
      { 
          title: 'Aceites y Grasas', 
          description: 'Aunque se deben consumir con moderación, los aceites y las grasas son importantes para la salud del cerebro y el corazón, y son necesarios para la absorción de vitaminas liposolubles.', 
      },
    ];
    gazucares = [
      { 
          title: 'Azucares', 
          description: 'Los azúcares proporcionan energía rápida al cuerpo, pero su consumo debe ser limitado para evitar el aumento de peso y el riesgo de enfermedades crónicas como la diabetes tipo 2.', 
      },
    ];
  info: any[] = [];
  data: any[] = [];
  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      const tipo = queryParams['tipo'];
      this.cargarDatos(tipo);
    });
  }
  cargarDatos(tipo: string) {
    this.info = [];
    this.data = [];
    if (tipo === 'lacteos') {
      this.info = this.lacteos;
      this.data = this.glacteos;
    } else if (tipo === 'carnes') {
      this.info = this.carnes;
      this.data = this.gcarnes;
    } else if (tipo === 'cereales') {
      this.info = this.cereales;
      this.data = this.gcereales;
    }else if (tipo === 'verduras') 
    {this.info = this.verduras;
      this.info = this.verduras;
      this.data = this.gverduras;
    } else if (tipo === 'frutas') {
      this.info = this.frutas;
      this.data = this.gfrutas;
    }else if (tipo === 'grasas') {
      this.info = this.grasas;
      this.data = this.ggrasas;
    } else if (tipo === 'azucares') {
      this.info = this.azucares;
      this.data = this.gazucares;
    }
  }
}
