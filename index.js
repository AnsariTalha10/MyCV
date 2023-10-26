function handleLogin() {
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value

    if (username === 'ansaritalha' && password === 'ansari13579') {
        localStorage.setItem("authentication", true)
        window.location.href = "resume.html"
    }
    else {
        const errorBox = document.querySelector("#error")
        errorBox.classList.add("active")
    }
}
