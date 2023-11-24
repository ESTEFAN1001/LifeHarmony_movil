import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alimentos-r',
  templateUrl: './alimentos-r.page.html',
  styleUrls: ['./alimentos-r.page.scss'],
})
export class AlimentosRPage implements OnInit {

  constructor(private route: ActivatedRoute) { }
  lacteos = [
    { title: 'Leche Entera', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Flacteos%2Fleche%20entera.jpg?alt=media&token=c26027df-df2e-4482-a3b1-01d90cd8abf8' },
    { title: 'Yogur', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Flacteos%2Fyogur%20entero.jpg?alt=media&token=02995b7d-0a53-4dbc-bc57-6c206e481ab2' },
    { title: 'Quesos amarillos', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Flacteos%2Fquesos%20amarillos.jpg?alt=media&token=463dc187-684d-4695-85eb-31aec523349b' },
    { title: 'Leche condensada', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Flacteos%2Fleche%20condensada.jpg?alt=media&token=2cc1250f-8e64-4090-b723-cd97d246286c' },
    { title: 'Crema de leche', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Flacteos%2Fcrema%20de%20leche.jpg?alt=media&token=5dceee0b-58a9-44ff-bc59-68dc90a936f3' },
    { title: 'Helado', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Flacteos%2Fhelado.jpg?alt=media&token=fbb76f38-0e65-4c66-b9dc-903c01cc53b4' },
    { title: 'Queso crema', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Flacteos%2Fqueso%20crema.jpg?alt=media&token=fc07d26b-d491-45c8-b711-1fc3718dcef5' },
  ];
  carnes = [
    { title: 'Tocino', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fcarnes%2Ftocino.jpg?alt=media&token=2570629a-4378-4122-9e09-6b3d6e6ca009' },
    { title: 'Chorizo', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fcarnes%2Fchorizo.jpg?alt=media&token=346313b1-88a4-45ca-99a6-8aec653df94d' },
    { title: 'Mortadela', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fcarnes%2Fmortadela.jpg?alt=media&token=f637897b-4fdb-445d-a320-d7592ac676d8' },
    { title: 'Jamon', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fcarnes%2Fjamon.jpg?alt=media&token=28e23566-332b-4f97-bd87-21e7db4ea895' },
  ];
  cereales = [
    { title: 'Arroz', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fcereales%2Farroz.jpg?alt=media&token=808a19db-e0d2-4bcb-a636-57f73017ec0f' },
    { title: 'Pan', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fcereales%2Fpan.jpg?alt=media&token=561f8a7f-26f4-4057-a59b-eb6745408ab8' },
    { title: 'Maicena', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fcereales%2Fmaicena.jpg?alt=media&token=b939294f-62b7-4f54-ba6d-96b1ea585ef5' },
  ];
  bebidas = [
    { title: 'Bebidas alcoholicas', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fbebidas%2Falcoholicas.jpg?alt=media&token=5c32e657-392c-4cd4-94cb-a5eef765c896' },
    { title: 'Jugos', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fbebidas%2Fjugos.jpg?alt=media&token=574630e6-c680-4322-a7eb-acb9c49504be' },
    { title: 'Gaseosas', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fbebidas%2FGaseosas.jpg?alt=media&token=e3b9e942-2ed5-4f88-b3da-a38afbf356ad' },
    { title: 'Energizantes', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fbebidas%2Fenergeticas.jpg?alt=media&token=9a19778c-aaea-451f-a48e-32831cbd03c9' },
  ];
  verduras = [
    { title: 'Papa', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fverduras%2Fpapa.jpg?alt=media&token=a02515e8-55eb-413a-8c81-ddd6d511d3bf' },
    { title: 'Pure de papa', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fverduras%2Fpure%20de%20pap.jpg?alt=media&token=977e265a-1c85-479e-8be7-a7059d468b50' },
  ];
  frutas = [
    { title: 'Melon', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Ffrutas%2Fmelon.jpg?alt=media&token=b197728f-e8bc-4115-a5ab-17d49b5bf98a' },
  ];
  grasas = [
    { title: 'Frituras', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fgrasas%2Ffritura.jpg?alt=media&token=32fb1208-6874-4315-b66b-43264a95f8ca' },
    { title: 'Aceite vegetal', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fgrasas%2Faceite.jpg?alt=media&token=70ed4eb4-0abb-48c1-be3b-5d510c40afd8' },
    { title: 'Mantequilla', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fgrasas%2Fmantequilla.jpg?alt=media&token=94596e08-c81d-4c1e-831d-90bcd553478d' },
    { title: 'Manteca', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fgrasas%2Fmanteca.jpg?alt=media&token=f404c2b5-ca0f-4528-90e3-c0b96012b684' },
  ];
  azucares = [
    { title: 'Azucar', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fazucares%2Fazucar.jpg?alt=media&token=c750e657-0b86-4886-baaa-0d5fa0348488' },
    { title: 'Miel', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fazucares%2Fmiel.jpg?alt=media&token=7b18c2a9-81c4-4d30-bd82-4a84fe3361ec' },
    { title: 'Mermelada', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fazucares%2Fmermelada.jpg?alt=media&token=c2d1c452-44aa-4e97-b46f-8f74b0ce686e' },
    { title: 'Caña de azucar', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fazucares%2Fcania%20azucar.jpg?alt=media&token=f393a018-262a-4106-b2b1-9aaee005ab8f' },
    { title: 'Chocolates', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fazucares%2Fchocolates.jpg?alt=media&token=3546ca09-7c6e-4d20-b69a-6e313694d448' },
    { title: 'Caramelos', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/riesgosos%2Fazucares%2Fcaramelos.jpg?alt=media&token=4e9830ee-42ca-4781-a5b3-eb965c3b79c0' },
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
    }else if (tipo === 'bebidas') {
      this.info = this.bebidas;
      this.data = this.gbebidas;
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
