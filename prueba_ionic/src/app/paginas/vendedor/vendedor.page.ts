import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.page.html',
  styleUrls: ['./vendedor.page.scss'],
})
export class VendedorPage implements OnInit {

  Vendedores: Vendedor[] = [
    {
      name: 'Ricardo Patricio Romo Mejia',
      url: '/assets/fot.jpg',
      code: '1234',
      email: 'rromom@est.ups.edu.ec',
      phone: '0979216418'
    },
  ];
  constructor() { }

  ngOnInit() {
  }


}

interface Vendedor{
  name: string;
  url: string;
  code: string;
  email: string;
  phone: string;
}
