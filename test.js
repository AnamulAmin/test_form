document
  .getElementById("accessForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = {
      card_no: document.getElementById("card_no").value,
      door: document.getElementById("door").value,
    };

    fetch("http://localhost:8000/api/visitors/get-door-access", {
      // Replace with your server URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error submitting the form.");
      });
  });
