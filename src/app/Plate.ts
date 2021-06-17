import { Dish } from './dish'
import { DishListComponent } from './dish-list/disl-list.component';

export let Plate: Dish[] = [
    { id: 1, name: 'Kiselo-ljuta supa', type: 'kineska hrana - predjelo', price: 250, imageUrl: './assets/kiselo-ljutasupa.jpg' },
    { id: 9, name: 'Prolecne rolnice', type: 'kineska hrana - predjelo', price: 150, imageUrl: './assets/prolecnerolnice.jpg' },
    { id: 10, name: 'Beli pirinac', type: 'kineska hrana - prilog', price: 100, imageUrl: './assets/belipirinac.jpg' },
    { id: 2, name: 'Kung pao piletina sa kikirikijem', type: 'kineska hrana - glavno jelo', price: 800, imageUrl: './assets/kungpaopiletinasakikirikijem.jpg' },
    { id: 3, name: 'Nudle sa gamborom', type: 'kineska hrana - glavno jelo', price: 550, imageUrl: './assets/nudlesagamborom.jpg' },
    { id: 4, name: 'Paciji bataci', type: 'kineska hrana - glavno jelo', price: 1200, imageUrl: './assets/pacijibataci.jpg' },
    { id: 5, name: 'Secuan govedina', type: 'kineska hrana - glavno jelo', price: 750, imageUrl: './assets/secuangovedina.jpg' },
    { id: 6, name: 'Slatko-kisela piletina', type: 'kineska hrana - glavno jelo', price: 650, imageUrl: './assets/slatko-kiselapiletina.jpg' },
    { id: 7, name: 'Djozle', type: 'kineska hrana - glavno jelo', price: 400, imageUrl: './assets/djozle.jpg' },
    { id: 8, name: 'Sushi', type: 'kineska hrana - glavno jelo', price: 1500, imageUrl: './assets/sushi.jpg' },
]

export function deteleDishByID(id: number) {
    Plate = Plate.filter(x => x.id != id);
}
// to do more funcitons...

export function addDishById(inpime: string, inptip: string, inpcena: number) {
    let newPLate = new Dish();
    newPLate.name = inpime;
    newPLate.type = inptip;
    newPLate.price = inpcena;
    Plate.push(newPLate);
    console.log(Plate)
}