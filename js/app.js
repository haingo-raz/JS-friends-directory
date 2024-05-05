var friendsList = JSON.parse(localStorage.getItem('friendsList')) || [];

// Save friends to localStorage
function saveFriendsList(friendsList){
    localStorage.setItem('friendsList', JSON.stringify(friendsList));
}

function displayFriendsList() {
    document.getElementById('friend-container').innerHTML = friendsList.map(friend => 
     `
     <div class="card">
         <div class="card-body row">
             <div>
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
                     <button>Edit</button>
                     <button>Delete</button>
                 </div> 
             </div>
         </div>
     </div>
     `
     ) 
 }

function submitFriendForm(){
    const name = document.getElementById('fname').value;
    const birthday = document.getElementById('birthday').value;

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
    saveFriendsList(friendsList)

    console.log(localStorage.getItem('friendsList'))
    displayFriendsList()
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