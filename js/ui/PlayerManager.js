export default class PlayerManager{
    constructor(message){
        this.message = message;
    }

    log(){
        console.table(this);
    }
}