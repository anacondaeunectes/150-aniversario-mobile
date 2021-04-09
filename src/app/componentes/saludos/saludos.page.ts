import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';


@Component({
  selector: 'app-saludos',
  templateUrl: './saludos.page.html',
  styleUrls: ['./saludos.page.scss'],
})
export class SaludosPage implements OnInit {

  

  constructor(private modalController: ModalController, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  async openPreview(img) {
    const modal = await this.modalController.create({
      component: ImageModalPage,
      cssClass: 'transparent-modal',
      componentProps: {
        img
      }
    });
    modal.present();
  }
  
  public saludos = [{
    subtitle: 'Madre Yvonne',
    title: 'Saludo de la Madre Yvonne',
    content: `
    Queridas Hermanas,
      Aquí, delante de nuestra casa, que es la casa de todas ustedes, y bajo la mirada de María Auxiliadora,
      quiero llegar a todas las partes del mundo para desearles una Santa Navidad y un Feliz Año 2017.
      De esta casa, que es la casa de todas las Hijas de María Auxiliadora, también de todos los jóvenes,
      los laicos, las familias que encontramos en los varios países del mundo en los cuales estamos presentes,
      quiero llegar a cada comunidad, a cada casa, a cada una y uno de vosotros en este momento particular de
      alegría en la preparación de la Navidad. Quiero confiar a María, nuestra Madre y Auxiliadora, la misión
      de entrar en sus casas, de estar cerca de cada una y de cada uno para expresarles mis sentimientos de
      alegría y de esperanza que quisiera fueran compartidos con todos. María no tiene problemas para moverse
      de un lado a otro, por lo tanto será Ella mi mensajera para desearles una Navidad de alegría y de esperanza.
      Es un deseo que gustaría que llegue a lo profundo de cada uno. ¿Quién mejor que María nos puede acompañar
      en esta espera para acoger a Jesús con un corazón de alegría y esperanza?
    `,
    img: './../../assets/images/madreyvonne.jpg',
    truncating : true
  },
  {
    subtitle: 'María del Rosario García',
    title: 'Saludo de María del Rosario García',
    content: `
    Queridas Hermanas,
      Aquí, delante de nuestra casa, que es la casa de todas ustedes, y bajo la mirada de María Auxiliadora,
      quiero llegar a todas las partes del mundo para desearles una Santa Navidad y un Feliz Año 2017.
      De esta casa, que es la casa de todas las Hijas de María Auxiliadora, también de todos los jóvenes,
      los laicos, las familias que encontramos en los varios países del mundo en los cuales estamos presentes,
      quiero llegar a cada comunidad, a cada casa, a cada una y uno de vosotros en este momento particular de
      alegría en la preparación de la Navidad. Quiero confiar a María, nuestra Madre y Auxiliadora, la misión
      de entrar en sus casas, de estar cerca de cada una y de cada uno para expresarles mis sentimientos de
      alegría y de esperanza que quisiera fueran compartidos con todos. María no tiene problemas para moverse
      de un lado a otro, por lo tanto será Ella mi mensajera para desearles una Navidad de alegría y de esperanza.
      Es un deseo que gustaría que llegue a lo profundo de cada uno. ¿Quién mejor que María nos puede acompañar
      en esta espera para acoger a Jesús con un corazón de alegría y esperanza?
    `,
    img: './../../assets/images/Chary.jpg',
    truncating : true
  }
  ];

  // Show more/less
  public limit: number = 40;
}