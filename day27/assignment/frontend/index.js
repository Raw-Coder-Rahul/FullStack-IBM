document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:1000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    });

    console.log(res)

    const data = await res.json();
    console.log(data)
    alert(data.message);
    window.location.href="login.html"
});

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:1000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    console.log(data)
    if (data.token) {
        localStorage.setItem('token', data.token);
        Toastify({
            text: "You logged Succesfully",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: { background: "green" }
        }).showToast();
        window.location.href = 'dashboard.html'
        ;
    } else {
        alert('Login failed');
        Toastify({
            text: "Invalid Credintial",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: { background: "red" }
        }).showToast();
    }
});

document.getElementById('forgotPasswordLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'forgot-password.html';
});




let currentPage = 1; // Current page for pagination
const limit = 5; // Number of jobs per page

function displayJobs(jobs) {
    showSkeleton(limit); // Show skeleton loaders while loading

    setTimeout(() => {
        const jobContainer = document.getElementById("job-container");
        jobContainer.innerHTML = ""; // Clear skeleton loaders

        // Display job postings
        jobs.forEach((job) => {
            const jobBox = document.createElement("div");
            jobBox.className = "job-box";

            // Job Title
            const title = document.createElement("h3");
            title.className = "job-title";
            title.innerText = job.title || "Job Title Not Available";

            // Company Name
            const company = document.createElement("p");
            company.className = "company-name";
            company.innerText = `Company: ${job.company || "Not Specified"}`;

            // Job Description
            const description = document.createElement("p");
            description.className = "job-description";
            description.innerText = `Description: ${job.description || "Not Specified"}`;

            // Job Location
            const location = document.createElement("p");
            location.className = "location";
            location.innerText = `Location: ${job.location || "Not Specified"}`;

            // Stipend
            const stipend = document.createElement("p");
            stipend.className = "stipend";
            stipend.innerText = `Stipend: ${job.stipend || "Not Specified"}`;

            // Apply Button
            const button = document.createElement("button");
            button.innerText = "Apply";
            button.addEventListener("click", () => {
                alert(`You applied for: ${job.title} at ${job.company}`);
            });

            // Append all elements to the job box
            jobBox.append(title, company, description, location, stipend, button);
            jobContainer.append(jobBox);
        });
    }, 1000); // Simulated loading time for smoother UX
}

function showSkeleton(count) {
    const jobContainer = document.getElementById("job-container");
    jobContainer.innerHTML = ""; // Clear existing content

    for (let i = 0; i < count; i++) {
        const skeletonBox = document.createElement("div");
        skeletonBox.className = "skeleton-job-box";
        jobContainer.append(skeletonBox);
    }
}

// Example Job Data for Initial Display
const dummyJobs = [
    {
        title: "Software Engineer",
        company: "Tech Corp",
        description: "Develop and maintain scalable software solutions.",
        location: "Bangalore",
        stipend: "₹25,000",
    },
    {
        title: "Frontend Developer",
        company: "Webify",
        description: "Design and implement intuitive user interfaces.",
        location: "Pune",
        stipend: "₹30,000",
    },
    {
        title: "Data Analyst",
        company: "DataWorks",
        description: "Analyze data and generate actionable insights.",
        location: "Delhi",
        stipend: "₹20,000",
    },
    {
        title: "Backend Engineer",
        company: "CodeHive",
        description: "Build robust backend systems and APIs.",
        location: "Hyderabad",
        stipend: "₹28,000",
    },
    {
        title: "DevOps Engineer",
        company: "CloudTech",
        description: "Streamline deployment and manage cloud infrastructure.",
        location: "Mumbai",
        stipend: "₹35,000",
    },
];

// Initial Display of Jobs
displayJobs(dummyJobs);

document.getElementById("loadMoreBtn").addEventListener("click", async () => {
    try {
        // Simulated API call to fetch new jobs
        const newJobs = [
            {
                title: "QA Engineer",
                company: "Testify",
                description: "Ensure high-quality testing and validation of products.",
                location: "Chennai",
                stipend: "₹22,000",
            },
            {
                title: "Product Manager",
                company: "Innovate",
                description: "Lead product development and strategy execution.",
                location: "Noida",
                stipend: "₹40,000",
            },
            {
                title: "AI Specialist",
                company: "NeuralNet",
                description: "Design AI models and solutions for business challenges.",
                location: "Bangalore",
                stipend: "₹50,000",
            },
            {
                title: "UI/UX Designer",
                company: "DesignHub",
                description: "Create user-friendly designs and experiences.",
                location: "Pune",
                stipend: "₹25,000",
            },
            {
                title: "Cloud Architect",
                company: "SkyHigh",
                description: "Design and optimize cloud solutions for enterprise systems.",
                location: "Delhi",
                stipend: "₹45,000",
            },
        ];

        // Append new jobs to the existing list
        displayJobs([...dummyJobs, ...newJobs]);
        currentPage++;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        alert("Failed to load more job postings. Please try again.");
    }
});
document.getElementById("loadMoreBtn").addEventListener("click", async () => {
    currentPage++; // Increment the page number for pagination
    await fetchProducts(); // Fetch the next set of jobs
});


async function fetchProducts() {
    try {
        const response = await fetch(`http://localhost:1000/api/products?page=${currentPage}`,{
            method:"GET"
        });
        const data = await response.json();

        console.log(data)

        displayProducts(data.products);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}


fetchProducts();

