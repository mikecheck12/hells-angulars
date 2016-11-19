export class NewProduct {
    public id: number;
    public userId: string;
    public productName: string;
    public pricePerDay: number;
    public ownerId: number;
    public categoryId: number;
    public location?: string;
    public imageLink?: string;
}
