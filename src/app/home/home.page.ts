import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  constructor() {}
  images = [
    {icon:'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/alimentos%2Fpermitidos.jpg?alt=media&token=fd9bd470-2fb7-4b09-add3-085f1695c8c2'},
    {icon:'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/alimentos%2Fmoderados.jpg?alt=media&token=6a04262c-f9f0-4cfc-9cae-354a9aa1177f'},
    {icon:'https://firebasestorage.googleapis.com/v0/b/lifeharmony-bd5eb.appspot.com/o/alimentos%2Friesgosos.jpg?alt=media&token=a4fae9be-b71b-41d0-9a3d-80458006248d'},
  ];
  ngOnInit() {
  }
  openFacebook() {
    // Lógica para abrir enlace de Facebook
  }
  openInstagram() {
    // Lógica para abrir enlace de Instagram
  }
}
