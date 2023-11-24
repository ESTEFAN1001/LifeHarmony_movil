import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.page.html',
  styleUrls: ['./alimentos.page.scss'],
})

export class AlimentosPage implements OnInit {
  constructor(private route: ActivatedRoute) { }
  lacteos = [
    { title: 'Leche descremada', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Flacteos%2Fleche.jpg?alt=media&token=b0f3ee67-36a2-4a54-ae5d-d45c4492e2b4' },
    { title: 'Yogur descremado', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Flacteos%2Fyogur%20descremado.jpg?alt=media&token=f27b3be5-3070-4173-94ea-a1cf1c1cf5a9' },
    { title: 'Queso blanco', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Flacteos%2Fqueso%20blanco.jpg?alt=media&token=4dff3229-810c-4318-ba11-931500424f7c' },
  ];
  carnes = [
    { title: 'Pollo sin piel', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fcarnes%2Fpollo%20sin%20piel.jpg?alt=media&token=26e0670b-c3fd-4fda-a2c5-46e5b856becb' },
    { title: 'Pescados', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fcarnes%2Fpescados.jpg?alt=media&token=78fb79cb-aac7-4635-987f-a839e920f6a8' },
    { title: 'Mariscos', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fcarnes%2Fmariscos.jpg?alt=media&token=726a6265-7458-48c1-a854-d33a6e52bbde' },
    { title: 'Huevo', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fcarnes%2Fhuevo.jpg?alt=media&token=e2ac6598-fbb7-4cbf-8f48-7e52a4e41e5b' },
  ];
  cereales = [
    { title: 'Avena', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fcereales%2Favena.jpg?alt=media&token=4b874510-7c11-4390-9cb0-f5390285a87c' },
    { title: 'Quinua', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fcereales%2Fquinua.jpg?alt=media&token=9fd17446-10b0-4de5-9cea-e232b8ef6dfd' },
    { title: 'Cebada', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fcereales%2Fcebada.jpg?alt=media&token=3c676614-02e4-463b-b5f6-140c72abc861' },
    { title: 'Pan Integral', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fcereales%2Fpan%20integral.jpg?alt=media&token=5902137e-a76d-4eb1-9475-4b18f6ca6f8c' },
  ];
  bebidas = [
    { title: 'Agua', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fbebidas%2Fagua.jpg?alt=media&token=0248f182-34cd-4a76-aee6-c1a0102bed1a' },
    { title: 'Te', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fbebidas%2Fte.jpg?alt=media&token=314b16da-0f2b-4926-9473-af6ea19dcffd' },
  ];
  verduras = [
    { title: 'Lechuga', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fverduras%2Flechuga.jpg?alt=media&token=da851509-8b43-4a93-a250-325b03e93fb1' },
    { title: 'Brocoli', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fverduras%2Fbrocoli.jpg?alt=media&token=c6b7db49-ca9b-49ed-a7fc-c787b7405ce7' },
    { title: 'Hongos', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fverduras%2Fhongos.jpg?alt=media&token=f52a9a63-6fd3-4d8b-b7d6-58d5a708a6fd' },
    { title: 'Cebolla', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fverduras%2Fcebolla.jpg?alt=media&token=c61bfa9e-fa66-4b61-bf93-277eee14b8c0' },
    { title: 'Tomate', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fverduras%2Ftomate.jpg?alt=media&token=ded25b07-6b83-45a1-9d06-69faca05681c' },
    { title: 'Espinaca', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fverduras%2Fspinaca.jpg?alt=media&token=02f5ba94-fd53-4264-9edd-c433cdc1b487' },
    { title: 'Zanahoria', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fverduras%2Fzanahoria.jpg?alt=media&token=fcf82191-c9a6-4881-a504-369c20b6efd7' },
    { title: 'Pimenton', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fverduras%2Fpimenton.jpg?alt=media&token=f58bf0ba-aab7-45ff-ba21-78355ff1909a' },
    { title: 'Maiz', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fverduras%2FMaiz.jpg?alt=media&token=33f0dede-7d26-4378-ab95-c0f67b3ed77e' },
    { title: 'Soya', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fverduras%2Fsoya.jpg?alt=media&token=251f6da8-3701-48d5-b9a5-08920ed13ae4' },
    { title: 'Lenteja', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fverduras%2Flenteja.jpg?alt=media&token=0fbe76e4-231c-42cc-b44a-f8e8575c7b42' },
  ];
  frutas = [
    { title: 'Manzana', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Ffrutas%2Fmanzana.jpg?alt=media&token=ebc36894-cfa4-4d2d-a035-00260162685d' },
    { title: 'Pera', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Ffrutas%2Fpera.jpg?alt=media&token=ab09a9c9-ad10-4d48-af6e-62a1322c7485' },
    { title: 'Naranja', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Ffrutas%2Fnaranja.jpg?alt=media&token=3a3f38c1-861e-46fa-9310-bd0703431527' },
    { title: 'Durazno', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Ffrutas%2Fdurazno.jpg?alt=media&token=4834ffe5-5d8b-4c51-a670-e1a8897aa942' },
    { title: 'Frutilla', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Ffrutas%2Ffrutilla.jpg?alt=media&token=0854012b-a695-4e71-8374-43bc8234769b' },
    { title: 'Platano', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Ffrutas%2Fplatano.jpg?alt=media&token=96a8605a-2bc1-4ce2-b40c-5c1f1cb4e2aa' },
    { title: 'Mandarina', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Ffrutas%2Fmandarina.jpg?alt=media&token=5bcacc32-36a8-4571-8b3e-02c06f2ac375' },
  ];
  grasas = [
    { title: 'Semillas de girasol', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fgrasas%2Fsemillas%20de%20girasol.jpg?alt=media&token=64a3d4f0-18ab-4e5a-90fc-420ab7bdefb5' },
    { title: 'Linaza', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fgrasas%2Flinaza.jpg?alt=media&token=fb78cdb5-1367-4cbc-bd0a-a84b6a077916' },
    { title: 'Chia', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fgrasas%2Fchia.jpg?alt=media&token=16b3fbfd-2f8a-4a8c-986e-cfe93d5789ac' },
  ];
  azucares = [
    { title: 'Stevia', icon: 'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/permitidos%2Fazucares%2Festevia.jpg?alt=media&token=f44183c3-dabc-4b36-8aad-3858cee9645a' },
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
