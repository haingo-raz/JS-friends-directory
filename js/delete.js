function deleteByName() {
    try {
        const nameToDel = document.getElementById("delname").value;
     
        // delete the friend with the specified name from friendsList
        let remainingFriends = friendsList.filter(friend => friend.name !== nameToDel);
    
        saveFriendsList(remainingFriends);
        // Reload friendsList from localStorage with updated data
        friendsList = JSON.parse(localStorage.getItem('friendsList')) || [];
        displayFriendsList();

        const deleteFeedbackNode = document.getElementById("delete-feedback");
        deleteFeedbackNode.innerHTML = `${nameToDel} deleted successfully.`;

        setTimeout(() => {
            deleteFeedbackNode.innerHTML = "";
        }, 2500);
    } catch(error) {
        console.error(error);
    }
}