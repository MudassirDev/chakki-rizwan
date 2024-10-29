firebase.onAuthStateChanged(firebase.auth, (user) => {
    if (user) {
        console.log("User is signed in");
        window.userLoggedIn = true;
    } else {
        console.log("No user is signed in.");
        window.userLoggedIn = false;
        if (window.location.pathname != "/" && window.location.pathname != "/pages/login.html") {
            window.location.href = "/pages/login.html"
        }
    }
});