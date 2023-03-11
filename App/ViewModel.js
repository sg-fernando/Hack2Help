import { Users, modalOptions , Events, Organizations} from './constants';

class ViewModel {
    constructor() {
        this.user;
        this.firstname;

        this.friends;
        this.organizations
        this.otherUsers;
        this.events;
        this.upcomingEvents;
        this.organizations;

        this.searchFriendsResults;
        this.searchOrganizationsResults;
        this.modalVisible = false;
        this.modalOptions;
        this.friendRequests;
        
        this.FriendListRef;
        this.followingIndex = 0;


        this.updateCalendarEvents = () => {};
        this.updateHomeEvents = () => {};
    }

    updateAllEvents() {
        this.updateCalendarEvents();
        this.updateHomeEvents();
    }

    getAttending() {
        return this.events;
    }
    getOrganizations() {
        return this.organizations;
    }
    getSuggested() {
        return this.events;
    }

    getUpcomingEvents() {
        let events = []
        for (let date = 0; date < this.events.length; date++) {
            if (date < 23) {
                events.push(...this.events[date]);
            }
        }
        console.log(events)
        this.upcomingEvents = events;
        return events;
    }

    login(username, password, navigation) {
        // const user = Users.find((user) => user.username.toLowerCase() === username.toLowerCase() && user.password === password);

        // if (user) {
            this.user = Users[0];
            this.otherUsers = this.user.others;
            this.friends = this.user.friends;
            this.organizations = this.user.organizations;
            this.searchFriendsResults = this.user.friends;
            this.firstname = this.user.firstname;
            this.friendRequests = this.user.requests;
            this.modalVisible = false;
            this.events = Events;
            this.modalOptions = modalOptions;
            navigation.navigate('AppScreens');
            console.log("User: " + this.user.username + " logged in");
        // } else {
        //     alert("Invalid username or password");
        // }
    }

    newEvent(friends, hour, min, ampm, title, description){
        let event = {
            id: (friends.length+1)/2*hour*min,
            title: title,
            description: description,
            time: hour + ":" + min + " " + ampm,
            date: "March 6",
            host: this.user,
            attendees: friends,
            image: this.user.image,
            location: "Location TBD"
        }
        // console.log(this.AgendaRef.state.renderRow());
        this.events[17].push(event);
    }

    searchFollowing(value) {
        console.log(this.followingIndex);
        if (this.followingIndex === 1) {
            this.searchFriends(value);
        } else if (this.followingIndex === 0) {
            this.searchOrganizations(value);
        }
    }

    searchOrganizations(value) {
        if (!value.length) {
            this.searchOrganizationsResults = this.organizations;
            return;
        }

        const filteredData = this.organizations.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase()));

        if (filteredData.length) {
            this.searchOrganizationsResults = filteredData;
        } else {
            this.searchOrganizationsResults = this.organizations;
        }
    }

    searchFriends(value) {
        console.log(value);
        if (!value.length) {
            this.searchFriendsResults = this.friends;
            return;
        }

        const filteredData = this.friends.filter((item) =>
            item.firstname.toLowerCase().includes(value.toLowerCase()));

        const filteredData2 = this.friends.filter((item) =>
            item.firstname.toLowerCase().includes(value.toLowerCase()));

        const filteredData3 = this.otherUsers.filter((user) =>
            user.username.toLowerCase().includes(value.toLowerCase()));

        const finalFiltered = [...new Set([...filteredData, ...filteredData2, ...filteredData3])];

        if (finalFiltered.length) {
            this.searchFriendsResults = finalFiltered;
        } else {
            this.searchFriendsResults = this.friends;
        }
    }

    setModal(boolVal) {
        this.modalVisible = boolVal;
    }

    acceptRequest(person) {
        this.friends.push(person);
        this.friendRequests = this.friendRequests.filter((item) => item.username !== person.username);
    }

    declineRequest(person) {
        this.friendRequests = this.friendRequests.filter((item) => item.username !== person.username);
    }
}

let ViewModelInstance = new ViewModel();

export default ViewModelInstance;