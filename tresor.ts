import { Gegenstand } from "./gegenstand";
import { GegenstandNichtGefundenError } from "./gegenstandNichtGefundenError";

export class Tresor{

private gegenstaende: Gegenstand[];

constructor(){
this.gegenstaende = new Array();
}

addGegenstand(g: Gegenstand){
  this.gegenstaende.push(g);
}

getGegenstand(id: number): Gegenstand {
  for( let i: number = 0; i < this.gegenstaende.length; i++){
    if(id === this.gegenstaende[i].id){
    return this.gegenstaende[i];
    }
  }
  throw new GegenstandNichtGefundenError(id);
}

getGegenstand_V2(id: number): Gegenstand {
  for(let g of this.gegenstaende) {
    if(id === g.id) {
      return g;
    }
  }
  throw new GegenstandNichtGefundenError(id);
}

getGegenstand_V3(id: number): Gegenstand {
  let gefundenerGegenstand = this.gegenstaende.find(g => g,id === id);
  if(gefundenerGegenstand != undefined) {
    return gefundenerGegenstand;
  }
  throw new GegenstandNichtGefundenError(id);
}

removeGegenstand(gegenstand: Gegenstand) {
  let gegenstandToRemove = this.gegenstaende.find(g => g === gegenstand);
  if(gegenstandToRemove !== undefined) {
    this.gegenstaende = this.gegenstaende.filter(g => g !== gegenstandToRemove);
  }else {
    throw new GegenstandNichtGefundenError(gegenstand.id);
  }
}

berechnegesatwert(): number {
  let summe: number = 0;
  this.gegenstaende.forEach(g => summe += g.wert);
  return summe;
}

toString(): string {
  let text: string = "\n\nTRESORINHALT:";
  this.gegenstaende.forEach(g => text += g.toString());
  return text;
}

}