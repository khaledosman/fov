import { Location } from './Location';

export class Customer {
    public id: string
    public location: Location

    constructor(id: string, location: Location) {
        this.id = id
        this.location = location
    }
}