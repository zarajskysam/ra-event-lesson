export default class PurchaseModel {
    constuctor(id, name, done = false) {
        this.id = id;
        this.name = name;
        this.done = done;
    }
}