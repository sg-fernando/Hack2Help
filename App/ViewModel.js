import {observable} from 'mobx';

class ViewModel {
    constructor() {
        this.username = "";
        this.password = "";
    }
    

    login(username, password, navigation) {
        
    }
}

let ViewModelInstance = new ViewModel();

export default {ViewModelInstance};