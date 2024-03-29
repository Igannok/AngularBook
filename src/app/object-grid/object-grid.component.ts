import { Component, signal } from '@angular/core';
import { MaterialModule } from '../material.module';

interface StoreObject {
  name: string;
  description: string;
  height: number;
  width: number;
  diameter: number;
  articleType: string;
  displayStatus: string;
  stock: string;
  imgURL: string;
}

@Component({
  selector: 'app-object-grid',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './object-grid.component.html',
  styles: `
  .container{
    padding: 24px;
  }

  img{
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .responsive-grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
    gap: 24px;
  }

  .zoom{
    transition: transform 0.2s;

  }
  .zoom:hover{
    transform: scale(1.5);
    z-index: 10;
  }

  `
})
export class ObjectGridComponent {

  gridObjects: StoreObject[] = [];


  constructor() {


    const dummyData: StoreObject[] = [];

    //generate dummy data
    for (let i = 0; i < 10; i++) {
      const articleTypes = ['pl', 'sl', 'bl', 'lu', 'gi', 'ka', 'ap', 'ob', 'cr'];
      const randomArticleType = articleTypes[Math.floor(Math.random() * articleTypes.length)];
      const dummyObject: StoreObject = {
        name: `Object ${i + 1}`,
        description: `This is the description ${i + 1}`,
        height: Math.round(Math.random() * 100 + 50),
        width: Math.round(Math.random() * 100 + 50),
        diameter: Math.round(Math.random() * 50 + 20),
        articleType: randomArticleType,
        displayStatus: Math.random() < 0.5 ? 'In Stock' : 'Andere winkel',
        stock: Math.random() < 0.7 ? 'Ja' : 'Neen',
        imgURL: `https://picsum.photos/300?random` + i //picsum is random image genaration
      };
      this.gridObjects.push(dummyObject);
    }


  }
}
