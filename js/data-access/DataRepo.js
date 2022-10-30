export default class DataRepo{
    constructor(message){
        this.message = message;
    }

    log(){
        console.table(this);
    }
    
}