import { Gegenstand } from "./gegenstand";

export class Schmuck extends Gegenstand {

constructor(id: number, wert: number, public bezeichnung: string) {
  super(id, wert);
}

toString(): string {
  let text: string = "\n\nSchmuck: ";
  text += super.toString();
  text += "Bezeichnung: " + "\t" + this.bezeichnung;
  return text;
}

}