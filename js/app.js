var friendsList = JSON.parse(localStorage.getItem('friendsList')) || [];

// Save friends to localStorage
function saveFriendsList(friendsList){
    localStorage.setItem('friendsList', JSON.stringify(friendsList));
}

function displayFriendsList() {
    document.getElementById('friend-container').innerHTML = friendsList.map((friend, index) => 
     `
     <div class="card">
         <div class="card-body row">
            <p>${index + 1})&nbsp;</p>
            <div class="mr-4">
                 <h5 class="card-title">
                     ${friend.name}
                 </h5>
                 <p class="card-text">
                     ${friend.birthday}
                 </p>
            </div>
             
            <div class="row ml-auto">
                <p class="card-text col-12">
                     ${friend.age}
                </p>
                <div class="">
                     <button disabled>Edit</button>
                     <button onclick={deleteCardByName('${friend.name}')}>Delete</button>
                 </div> 
             </div>
         </div>
     </div>
     `
    )
    getTotalNumberOfFriends(); 
    getTotalFriendsAge();
    getMinimumFriendsAge();
    getMaximumFriendsAge();
    getAverageFriendsAge();
    getFriendsWithLongestName();
    getFriendsWithShortestName();
 }

function submitFriendForm(){
    const name = document.getElementById('fname').value;
    const birthday = document.getElementById('birthday').value;
    const createUpdateFeedbackNode = document.getElementById('create-update-feedback');

    if (name !== null && name !== "" && birthday !== "") {
        // Get the age from birthday
        const currentYear = new Date().getFullYear();
        const birthdayYear = new Date(birthday).getFullYear();
        const age = currentYear - birthdayYear;

        // Save the details in a friendsList variable which is also stored in the local storage of the browser
        const newFriend = {
            name: name,
            birthday: birthday,
            age: age
        };

        // Add the new friend as an item in the friendsList []
        friendsList.push(newFriend);
        saveFriendsList(friendsList);

        console.log(localStorage.getItem('friendsList'));
        createUpdateFeedbackNode.innerHTML = "";

        displayFriendsList()
    } else {
        createUpdateFeedbackNode.innerHTML = "Please fill out all the fields.";
    }
}

displayFriendsList()

let nameSorted = false

// Sort the friends by name
function sortByStringDescription(arrayToSort) {
    if (nameSorted === true) {
        arrayToSort.sort((a, b) => b.name.localeCompare(a.name))
    }
    else arrayToSort.sort((a, b) => a.name.localeCompare(b.name)) // string comparison
    nameSorted = !nameSorted
    displayFriendsList()
}

let ageSorted = false

// Sort the friend member by age
function sortByAge(arrayToSort){
    ageSorted? arrayToSort.sort((a, b) => b.age - a.age) : arrayToSort.sort((a, b) => a.age - b.age)
    ageSorted = !ageSorted
    displayFriendsList()
}

function getTotalNumberOfFriends() {
    let total = friendsList.length;
    const friendsTotalNode = document.getElementById("total-friend");
    friendsTotalNode.innerHTML = total;
}

function getTotalFriendsAge() {
    try {
        const friendsTotalAgeNode = document.getElementById("total-age");

        const totalAge = friendsList.reduce((prevVal, currVal) => {
            return prevVal + currVal.age;
        }, 0);
        friendsTotalAgeNode.innerHTML = totalAge;
    } catch(error) {
        console.error(error);
    }
}

function getMinimumFriendsAge() {
    try {
        const friendsMinimumAgeNode = document.getElementById("minimum-age");

        // Return only the smallest age from friendsList
        const minimumAge = friendsList.reduce((prevVal, currVal) => {
            return Math.min(prevVal, currVal.age);
        }, Infinity);
        friendsMinimumAgeNode.innerHTML = minimumAge;
    }
    catch(error){
        console.error(error);
    }
}

function getMaximumFriendsAge() {
    try {
        const friendsMaximumAgeNode = document.getElementById("maximum-age");

        // Return only the smallest age from friendsList
        const maximumAge = friendsList.reduce((prevVal, currVal) => {
            return Math.max(prevVal, currVal.age);
        }, 0);
        friendsMaximumAgeNode.innerHTML = maximumAge;
    }
    catch(error){
        console.error(error);
    }
}

function getAverageFriendsAge() {
    try {
        const friendsAverageAgeNode = document.getElementById("average-age");

        // Divide the total age by the number of friends in the friendsList
        const averageAge = friendsList.reduce((prevVal, currVal) => {
            return prevVal + currVal.age;
        }, 0) / friendsList.length;
        friendsAverageAgeNode.innerHTML = averageAge;
    }
    catch(error){
        console.error(error);
    }
}

function getFriendsWithLongestName() {
    try {
        const friendsLongestNameNode = document.getElementById("longest-name");

        // Return the friend with the longest name
        const friendDetails = friendsList.reduce((prevVal, currVal) => {
            return prevVal.name.length > currVal.name.length ? prevVal : currVal;
        });
        friendsLongestNameNode.innerHTML = friendDetails.name;
    }
    catch(error){
        console.error(error);
    }
}

function getFriendsWithShortestName() {
    try {
        const friendsShortestNameNode = document.getElementById("shortest-name");

        // Return the friend with the shortest name
        const friendDetails = friendsList.reduce((prevVal, currVal) => {
            return prevVal.name.length < currVal.name.length ? prevVal : currVal;
        });
        friendsShortestNameNode.innerHTML = friendDetails.name;
    }
    catch(error){
        console.error(error);
    }
}

