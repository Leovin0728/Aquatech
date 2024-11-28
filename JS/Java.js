function handleLogin(event) {
    event.preventDefault(); 

    const role = document.getElementById('role').value;

    if (role === "customer") {
        window.location.href = "/PAGES/CustomerOrderPage.html";  
    } else if (role === "employee") {
        window.location.href = "/PAGES/EmployeeOrdersAccess.html";  
    }
    }