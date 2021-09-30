export class GegenstandNichtGefundenError extends Error {

  constructor(private id: number) {
    super("Gesuchter gegenstand mit der ID: " + id + " existiert nicht im Tresor!")
    super.name = "Nicht-gefunden-Error"
  }

}