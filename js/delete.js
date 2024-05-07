function deleteCardByName(nameToDel) {
    try {  
        // delete the friend with the specified name from friendsList
        let remainingFriends = friendsList.filter(friend => friend.name !== nameToDel);
    
        saveFriendsList(remainingFriends);
        // Reload friendsList from localStorage with updated data
        friendsList = JSON.parse(localStorage.getItem('friendsList')) || [];
        displayFriendsList();
    } catch(error) {
        console.error(error);
    }
}

function deleteByName() {
    try {
        const nameToDel = document.getElementById("delname").value;
        const deleteFeedbackNode = document.getElementById("delete-feedback");
        
        // Only procede with deletion if the name to delete was found in friendsList
        isNameInList = friendsList.find(friend => friend.name === nameToDel);

        if (isNameInList) {
            // delete the friend with the specified name from friendsList
            let remainingFriends = friendsList.filter(friend => friend.name !== nameToDel);
        
            saveFriendsList(remainingFriends);
            // Reload friendsList from localStorage with updated data
            friendsList = JSON.parse(localStorage.getItem('friendsList')) || [];
            displayFriendsList();

            deleteFeedbackNode.innerHTML = `${nameToDel} deleted successfully.`;
        } else {
            deleteFeedbackNode.innerHTML = `${nameToDel} was not found in your friends list.`;
        }
        

        setTimeout(() => {
            deleteFeedbackNode.innerHTML = "";
        }, 2500);
    } catch(error) {
        console.error(error);
    }
}

function deleteByIndex() {
    try{
        const indexToDel = document.getElementById("delindex").value;
        const deleteByIndexFeedbackNode = document.getElementById("delete-feedback-index");
        
        // Only procede with deletion if the index is within the length of the friendsList
        if (indexToDel < friendsList.length + 1 && indexToDel > 0) {
            friendsList.splice(indexToDel - 1, 1)
            saveFriendsList(friendsList);
        
            // Reload friendsList from localStorage with updated data
            friendsList = JSON.parse(localStorage.getItem('friendsList')) || [];
            displayFriendsList();
            deleteByIndexFeedbackNode.innerHTML = `Friend number ${indexToDel} deleted successfully.`;
        } else {
            deleteByIndexFeedbackNode.innerHTML = `The index ${indexToDel} was not found in your friends list.`;
        }
        
        setTimeout(() => {
            deleteByIndexFeedbackNode.innerHTML = "";
        }, 2500);
    } catch(error) {
        console.log(error);
    }
}

function deleteLastFriend(){
    try{
        const deleteLastIndexFeedbackNode = document.getElementById("delete-feedback-last");
        if(friendsList.length > 0 ) {
            friendsList.pop();
            saveFriendsList(friendsList);
            friendsList = JSON.parse(localStorage.getItem('friendsList')) || [];
            displayFriendsList();
            deleteLastIndexFeedbackNode.innerHTML = 'Last added friend deleted successfully.';
        } else {
            deleteLastIndexFeedbackNode.innerHTML = 'Friends list is empty.';
        }

        setTimeout(() => {
            deleteLastIndexFeedbackNode.innerHTML = "";
        }, 2500);
    } catch(error){
        console.error(error)
    }
}

function deleteFirstFriend() {
    try{
        const deleteFirstIndexFeedbackNode = document.getElementById("delete-feedback-first");
        if(friendsList.length > 0 ) {
            friendsList.shift();
            saveFriendsList(friendsList);
            friendsList = JSON.parse(localStorage.getItem('friendsList')) || [];
            displayFriendsList();
            deleteFirstIndexFeedbackNode.innerHTML = 'First added friend deleted successfully.';
        } else {
            deleteFirstIndexFeedbackNode.innerHTML = 'Friends list is empty.';
        }

        setTimeout(() => {
            deleteFirstIndexFeedbackNode.innerHTML = "";
        }, 2500);
    } catch(error){
        console.error(error)
    }
}