export abstract class Gegenstand {

constructor(public readonly id: number, public wert: number) {
}

toString(): string {
  let text: string = "\ID:" + "\t" + this.id;
  text += "\nWert: " + "\t" + this.wert;
  return text;
}

}