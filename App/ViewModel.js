
class ViewModel {
    constructor() {
        this.username = "";
        this.password = "";
        this.FriendListRef;
    }
    

    login(username, password, navigation) {
        navigation.navigate("AppScreens");
    }
}

let ViewModelInstance = new ViewModel();

export default ViewModelInstance;