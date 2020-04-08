window.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector("#submit-button");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const visitorData = {
      name: document.querySelector("#name-input").value,
      email: document.querySelector("#email-input").value,
      message: document.querySelector("#message-input").value
    };
    fetch("http://localhost:3000/api/subscribers", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(visitorData)
    })
      .then(res => res.json())
      .then(response => alert(response.message))
      .catch(err => {
        alert(`Error Sending Data: ${err.message}`)
      });
  })
});