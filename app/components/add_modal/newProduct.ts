export class NewProduct {
  constructor(
    public id: number,
    public productName: string,
    public pricePerDay: number,
    public ownerId: number,
    public category_id: number,
    public location?: string
  )
}
