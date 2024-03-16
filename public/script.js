document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.querySelector("#registrationForm");

  if (registrationForm) {
    registrationForm.addEventListener("submit", async function (event) {
      event.preventDefault();
      console.log("Form submitted");
      const formData = new FormData(registrationForm);

      try {
        const response = await fetch("/", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          alert("Signup successful");
          console.log(registrationForm); // Check if registrationForm is referencing the form element
          clearFormFields(registrationForm); // Clear the form inputs
        } else {
          alert("Failed to register");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred while processing your request");
      }
    });
  } else {
    console.error("Registration form not found");
  }
});

function clearFormFields(form) {
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.value = ""; // Clear input field value
  });
}
