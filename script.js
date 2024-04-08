let slideIndex; // Declare slideIndex variable
let slideInterval; // Declare slideInterval variable for automatic slideshow
// Ensure the slideshow is initialized after the functions are defined
showSlides(1);

// Start automatic slideshow when the page loads
startSlideShow();
// Rest of the code

//pagination
function generatePagination(currentPage, totalPages, pageURLs) {
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  // Previous Page Link
  const prevLi = document.createElement('li');
  const prevA = document.createElement('a');
  prevA.href = currentPage > 1 ? pageURLs[currentPage - 2] : '#';
  prevA.textContent = 'Previous';
  prevLi.appendChild(prevA);
  paginationContainer.appendChild(prevLi);

  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  for (let i = startPage; i <= endPage; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = pageURLs[i - 1]; // Adjust index since pages start from 1
    a.textContent = i;
    if (i === currentPage) {
      li.classList.add('active');
     
    }
    // a.addEventListener('click', function(event) {
      
    //   event.preventDefault(); // Prevent the default behavior of the link
    //   generatePagination(i, totalPages, pageURLs);
    // });
    
    li.appendChild(a);
    paginationContainer.appendChild(li);
  }

  // Next Page Link
  const nextLi = document.createElement('li');
  const nextA = document.createElement('a');
  nextA.href = currentPage < totalPages ? pageURLs[currentPage] : '#';
  nextA.textContent = 'Next';
  nextLi.appendChild(nextA);
  paginationContainer.appendChild(nextLi);
}

// Example usage:
// Assuming current page is 3 and total pages is 10
// and pageURLs is an array of URLs for each page
const pageURLs = [
  '/HTML/index.html',
  '/HTML/mp/2.html',
  '/HTML/mp/3.html',
  '/HTML/mp/4.html',
  '/HTML/mp/5.html',
  '/HTML/mp/6.html',
  '/HTML/mp/7.html',
  '/HTML/mp/8.html',
  '/HTML/mp/9.html'

  // Add URLs for other pages here
];
generatePagination(1, 10, pageURLs);




document.addEventListener("DOMContentLoaded", function() {
    updateTimeAgo();
    setInterval(updateTimeAgo, 60000); // Update every minute
  });
  
  function updateTimeAgo() {
    const timeElements = document.getElementsByClassName("time-ago");
    for (let i = 0; i < timeElements.length; i++) {
      const timestamp = new Date(timeElements[i].getAttribute("data-timestamp"));
      const timeAgo = timeSince(timestamp);
      timeElements[i].textContent = timeAgo;
    }
  }
  
  function timeSince(date) {
    // Adjust for CDT timezone (UTC -5 hours)
    const offsetHours = 5;
    date.setHours(date.getHours() + offsetHours);
  
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = Math.floor(seconds / 31536000);
  
    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // You can add code here to handle form submission, like sending data to a server or showing a success message.
    alert('Form submitted successfully!');
});

function toggleDropdown() {
    var dropdownContent = document.getElementById("aboutDropdown");
    dropdownContent.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function plusSlides(n) {
    // Initialize slideIndex to 1 if it's currently undefined
    slideIndex = slideIndex === undefined ? 1 : slideIndex;
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    // Initialize slideIndex to 1 if it's currently undefined
    slideIndex = slideIndex === undefined ? 1 : slideIndex;

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    }
}

// Function to start automatic slideshow
function startSlideShow() {
    slideInterval = setInterval(function() {
        plusSlides(1); // Advance to the next slide
    }, 5000); // Change slide every 2 seconds (adjust as needed)
}

// Function to stop automatic slideshow
function stopSlideShow() {
    clearInterval(slideInterval);
}



