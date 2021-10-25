import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.page.html',
  styleUrls: ['./cartera.page.scss'],
})
export class CarteraPage implements OnInit {
  Cliente: Clientes[] = [
    {	name: '		ANDRADE BAMONDE PATRICIO ALEXANDER',	phone: '	2346910',	cel: '	0987781647',	email: '	patriciocheo@hotmail.com	'},
{	name: '		ARIAS ARIAS LEANDRO JAVIER',	phone: '	2628161',	cel: '	0992945652',	email: '	leo-conan@hotmail.com	'},
{	name: '		BASANTES PANCHI LUIS MARCELO',	phone: '	2694676',	cel: '	0999278702',	email: '	marcelo17_@hotmail.es	'},
{	name: '		BRIONES LAICA RICHARD FABRICIO',	phone: '	022604472',	cel: '	(09) 98448946',	email: '	elfabo.10@gmail.com	'},
{	name: '		CAIZA TAPIA LUIS MIGUEL',	phone: '	2316403',	cel: '	0989062492',	email: '	luis_caiza1234@hotmail.com	'},
{	name: '		CELI VIVANCO WALTER PATRICIO',	phone: '	2683484',	cel: '	0992024158',	email: '	`patogrim_45@hotmail.com	'},
{	name: '		CHÁVEZ GARCIA CARLOS ALBERTO',	phone: '	022694855',	cel: '	0996337111',	email: '	charlyg003@hotmail.com	'},
{	name: '		COBO VALLE FRANCISCO JAVIER',	phone: '	022532635',	cel: '	0990317476',	email: '	javi_cobo96@hotmail.com	'},
{	name: '		DIAZ RAZO RICARDO MIGUEL',	phone: '	42564785',	cel: '	(09)4845666',	email: '	ricardo2035@hotmail.com	'},
{	name: '		ERAS LALANGUI KARINA ELIZABETH',	phone: '	022676563',	cel: '	(09) 87890212',	email: '	karinita.2505@hotmail.com	'},
{	name: '		FAJARDO ESCOBAR GIOVANNY MAURICIO',	phone: '	3014335',	cel: '	0980126187',	email: '	niac07geo@hotmail.com	'},
{	name: '		GUANOLEMA YAUTIBUG DIEGO ISAAC',	phone: '	2281691',	cel: '	(09)4564122',	email: '	pantera_ngn@hotmail.com	'},
{	name: '		HIDALGO ANCHALIQUIN WILMAN STEVEN',	phone: '	3072495',	cel: '	0983945870',	email: '	washo_cr29@hotmail.com	'},
{	name: '		LOAIZA HUANCAS JUAN GABRIEL',	phone: '	023100129',	cel: '	0987932541',	email: '	gabrieloaiza@gmail.com	'},
{	name: '		MALDONADO ATIENCIA EDWIN WLADIMIR',	phone: '	022331938',	cel: '	0994191871',	email: '	edwinwla13@hotmail.com	'},
{	name: '		MÁRQUEZ ENRIQUEZ CARLOS ANIBAL',	phone: '	3035160',	cel: '	(09) 94370220',	email: '	carlosmr961@gmail.com	'},
{	name: '		PACHECO COYAGUILLO ENMA MARCELA',	phone: '	5147520',	cel: '	(09) 84833058',	email: '	marcemap22@hotmail.com	'},
{	name: '		PANEZO GUERRERO  BORYS ALEXY',	phone: '	0959581163',	cel: '	(09) 59581163',	email: '	65geminis@hotmail.es	'},
{	name: '		PEREZ SALAS LUZ PATRICIA',	phone: '	095981950',	cel: '	0984075154',	email: '	miflakitalinda93@yahoo.es	'},
{	name: '		PRUNA AYALA HENRY GEOVANY',	phone: '	022963617',	cel: '	0998951101',	email: '	hpelcien_2987@hotmail.com	'},
{	name: '		QUIROZ ORTIZ  BRAYAN PATRICIO',	phone: '	022393894',	cel: '	(09) 84264705',	email: '	brayanpato97@outlook.es	'},
{	name: '		RENDON HERNANDEZ DIANA CAROLINA',	phone: '	087980824',	cel: '	0987980824',	email: '	teyhy1@gmail.com	'},
{	name: '		SACANCELA CHICHARRON LUIS FERNANDO',	phone: '	3806884',	cel: '	0984508457',	email: '	luizfer94@hotmail.com	'},
{	name: '		SUAREZ IZA KEVIN DAVID',	phone: '	3160324',	cel: '	(09) 84527086',	email: '	ksuarezi@est.ups.edu.ec	'},
{	name: '		TELLO AYALA XAVIER ANDRES',	phone: '	2323393',	cel: '	0987976302',	email: '	javier_1133@hotmail.es	'},
{	name: '		ALDAZ GARCIA EDUARDO DAVID',	phone: '	2674423',	cel: '	0984038130',	email: '	edual1584@hotmail.com	'},
{	name: '		ASITIMBAY MORALES ROMMEL DAVID',	phone: '	2520045',	cel: '	0984571859',	email: '	rum_dav@hotmail.com	'},
{	name: '		GUANOCHANGA GUZMAN ANA LUCIA',	phone: '	2731191',	cel: '	0987484714',	email: '	anyluzg@hotmail.com	'},
{	name: '		LEON MUÑOZ ANDRES FELIPE',	phone: '	2664715',	cel: '	0998649501',	email: '	andrew8679@hotmail.com	'},
{	name: '		ACONDA ANALUIZA CARLOS RUBEN',	phone: '	3380020',	cel: '	(09) 68710942',	email: '	deathsslider@hotmail.es	'},
{	name: '		MARTÍNEZ SAN ANDRÉS GISELA FERNANDA',	phone: '	2235781',	cel: '	(09) 98355944',	email: '	gmartine17@yahoo.com	'},
{	name: '		MOLINA VEINTIMILLA JUAN RODOLFO',	phone: '	3120494',	cel: '	0992509843',	email: '	rodol_molin@hotmail.com	'},
{	name: '		TAIPE MORALES SANTIAGO JOSE',	phone: '	022954143',	cel: '	(09) 98901867',	email: '	santiago.taipe@gmail.com	'},
{	name: '		VASQUEZ CLAVIJO JENNY ELIZABETH',	phone: '	682174',	cel: '	0984592291',	email: '	jeneli_flak@yahoo.es	'},
{	name: '		ACHIG GUACHAMIN KAREN VANESSA',	phone: '	264900',	cel: '	0985516677',	email: '	karenchis14@hotmail.com	'},
{	name: '		BRIONEZ PINZON MIGUEL CRISTÓBAL',	phone: '	3072850',	cel: '	(09) 80468139',	email: '	miguel_brionez@hotmail.com	'},
{	name: '		SANANGO JIMENEZ CARLA MIREYA',	phone: '	022606462',	cel: '	0998723543',	email: '	carlasanango@gmail.com	'},
{	name: '		VILLAMARÍN ACUÑA JACQUELINE ESTEFANIA',	phone: '	3041426',	cel: '	(09) 99293315',	email: '	estefania.villamarin.ev@gmail.com	'},
{	name: '		DANIEL GABRIEL ANTITA TULPEZ',	phone: '	2564584',	cel: '	(09) 97458744',	email: '	danielantita@gmail.com	'},
{	name: '		BRYANNA AYLIN ORTIZ CISNEROS',	phone: '	3519227',	cel: '	(09) 94499285',	email: '	brylin@yahoo.com	'},
  ];
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async Info_Cliente(name, phone, cel, email) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: name,
      inputs: [
        {
          value: 'Telefono:' + phone
        },
        {
          value: 'Celular:' + cel
        },
        {
          value: 'Email:' + email
        }
      ],
      buttons: ['OK']
    });

    await alert.present();
  }

}

interface Clientes{
  name: string;
  phone: string;
  cel: string;
  email: string;
}
