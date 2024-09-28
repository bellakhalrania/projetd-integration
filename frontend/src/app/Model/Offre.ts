export class Offre {
  constructor(
    public NomOffre: string,
    public descriptionOffre: string,
    public PrixOffre: number,
    public DateDebut: Date,
    public DateFin: Date
  ) {}
}
