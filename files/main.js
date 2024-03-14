// Sidebar-open-close
function showSidebar() {
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex';
    console.log(sidebar);
}
function hideSidebar() {
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none';

}


const pagination = document.getElementById('pagination');

const totalPages = 50;
const visiblePages = 3;

function createPagination() {
    pagination.innerHTML = '';

    // Display the first three pages
    for (let i = 1; i <= visiblePages; i++) {
        createPage(i);
    }

    // Display the last page
    createPage(totalPages);
}




// faqs collapsible 

// Get all elements with class "query"
// Get all elements with class "query"
let queries = document.querySelectorAll(".query");

queries.forEach(function (query) {
    // Find the corresponding answer and caretDown elements for each query
    let answer = query.nextElementSibling;
    let caretDown = query.querySelector('.caret-down');

    // Add event listener to each query element
    query.addEventListener('click', function () {
        toggleAnswer(answer, caretDown);
    });
});

document.body.addEventListener('click', function (event) {
    // Check if the click occurred outside the query and answer elements
    if (!event.target.closest('.query') && !event.target.closest('.answers')) {
        hideAllAnswers();
    }
});

function toggleAnswer(answer, caretDown) {
    // Toggle the display of the answer element
    if (answer.style.display === 'flex') {
        answer.style.display = 'none';
        caretDown.style.display = 'block'; // Assuming caretDown is initially hidden
    } else {
        answer.style.display = 'flex';
        caretDown.style.display = 'none';
    }
}

function hideAllAnswers() {
    // Hide all answer elements
    let answers = document.querySelectorAll(".answers");
    let caretDowns = document.querySelectorAll(".caret-down");

    answers.forEach(function (answer) {
        answer.style.display = 'none';
    });

    caretDowns.forEach(function (caretDown) {
        caretDown.style.display = 'block'; // Assuming caretDown is initially hidden
    });
}


// call enter  - contact call form
let contactForm = document.getElementById("contactForm").addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData)
    const formProps = Object.fromEntries(formData);
    console.log(formProps)
});


// open-close modal-content 
function submitBtn() {
    let modalContent = document.querySelector(".modal-content-two");
    modalContent.style.display = 'flex';

};
function closeBtn() {
    let modalContent = document.querySelector(".modal-content-two");
    modalContent.style.display = 'none';

};    