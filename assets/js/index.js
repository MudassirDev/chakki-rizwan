const app = document.getElementById('application');
const customEvent = new CustomEvent("build");

let intervalId = setInterval(()=>{
    if (window.userLoggedIn != undefined) {
        clearInterval(intervalId);
        intervalId = null;
        
        if (window.userLoggedIn == true) {
            app.innerHTML = `
            <ul>
                <li><a class="active" href="/chakki/">Home</a></li>
                <li><a class="active" href="/chakki/pages/createcustomer.html">Create Customer</a></li>
                <li><a class="active" href="/chakki/createorderforcustomer.html">Create Order (For Customer)</a></li>
                <li><a class="active" href="/chakki/pages/createorder.html">Create Order</a></li>
                <li><a id="logoutBtn" href="#">Logout</a></li>
            </ul>
            `;
            document.dispatchEvent(customEvent);
        } else {
            app.innerHTML = `
            <ul>
                <li><a class="active" href="/chakki/">Home</a></li>
                <li><a href="/chakki/pages/login.html">Login</a></li>
            </ul>
            `;
        }
    }
}, 100);