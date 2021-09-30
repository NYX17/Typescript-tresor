import { Gegenstand } from "./gegenstand";

export class Aktie extends Gegenstand{

constructor(id:number, wert:number, public unternehmen: string, public nennwert: number) {
  super(id,wert);
}

toString(): string {
  let text: string = "\n\nAktie: ";
  text += super.toString();
  text += "\nUnternehmen: " + "\t" + this.unternehmen;
  text += "\nNennwert: " + "\t" + this.nennwert;
  return text;
}

}