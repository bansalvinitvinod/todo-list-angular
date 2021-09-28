export class Todo {

    serial_number: number;
    title: string;
    description: string;
    active: boolean;

    constructor(serial_number: number,title: string, description: string, active: boolean) {
        this.serial_number = serial_number;
        this.title = title;
        this.description = description;
        this.active = active;
    }

}
