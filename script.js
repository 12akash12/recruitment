document.addEventListener("DOMContentLoaded", function () {
  const jobListingsContainer = document.querySelector(".job-listings");
  const jobsButton = document.querySelector("#jobs-button");
  const aboutUsButton = document.querySelector("#about-us-button");
  const contactButton = document.querySelector("#contact-button");

  // Sample data for job listings (You can fetch real data from backend)
  const jobListingsData = [
    {
      title: "Software Engineer",
      description: "We are looking for skilled software engineers...",
      location: "Bangalore, India",
    },
    {
      title: "Product Manager",
      description: "Join our dynamic product management team...",
      location: "San Francisco, USA",
    },
    {
      title: "Data Scientist",
      description: "Looking for data scientists with expertise in...",
      location: "New York, USA",
    },
  ];

  // Function to dynamically create job listings HTML elements
  // function createJobListingElement(job) {
  //   const listing = document.createElement("div");
  //   listing.classList.add("job-listing");
  //   listing.innerHTML = `
  //     <img src="job1.jpg" alt="${job.title}">
  //     <h3>${job.title}</h3>
  //     <p>${job.description}</p>
  //     <p><strong>Location:</strong> ${job.location}</p>
  //     <button class="cta-button apply-now">Apply Now</button>
  //   `;
  //   return listing;
  // }

  // Function to display job listings on the page
  function displayJobListings() {
    jobListingsData.forEach((job) => {
      const listingElement = createJobListingElement(job);
      jobListingsContainer.appendChild(listingElement);
    });
  }

  // Call the function to display job listings
  displayJobListings();

  // Function to scroll to the target section smoothly
  function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }

  // Event listeners for buttons
  jobsButton.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToSection("#jobs");
  });

  aboutUsButton.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToSection("#about-us");
  });

  contactButton.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToSection("#contact");
  });

  // Event listener for "Apply Now" buttons
  jobListingsContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("apply-now")) {
      event.preventDefault();
      const jobTitle = event.target.parentElement.querySelector("h3").innerText;
      alert(`You are applying for the position: ${jobTitle}`);
      // Here, you can implement the actual application process or redirect the user to an application form.
    }
  });
});
