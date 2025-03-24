document.getElementById("submit-job").addEventListener("click", async () => {
    // Capture values from input fields
    const companyName = document.getElementById("companyName").value.trim();
    const jobTitle = document.getElementById("jobTitle").value.trim();
    const jobDescription = document.getElementById("jobDescription").value.trim();
    const location = document.getElementById("location").value.trim();
    const stipend = document.getElementById("stipend").value.trim();

    // Input validation
    if (!companyName || !jobTitle || !jobDescription || !location || !stipend) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // Create the payload object
    const jobData = {
        companyName,
        jobTitle,
        jobDescription,
        location,
        stipend: `₹${stipend}`, // Format stipend with the currency symbol
    };

    try {
        // Send a POST request to the API
        const response = await fetch("http://localhost:1000/api/create-product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jobData),
        });

        // Parse the JSON response
        const res = await response.json();

        // Provide user feedback based on the server response
        if (response.ok) {
            console.log("Job Data Submitted:", res);
            alert("Job posting created successfully!");

            // Optionally clear form inputs
            document.getElementById("companyName").value = "";
            document.getElementById("jobTitle").value = "";
            document.getElementById("jobDescription").value = "";
            document.getElementById("location").value = "";
            document.getElementById("stipend").value = "";
        } else {
            alert(`Failed to create job post: ${res.message || "Unknown error occurred"}`);
        }
    } catch (error) {
        console.error("Error occurred:", error);
        alert("Failed to connect to the server. Please try again later.");
    }
});
