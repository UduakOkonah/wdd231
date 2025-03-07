const courses = [
    { name: "CSE 110", type: "CSE", completed: true },
    { name: "CSE 111", type: "CSE", completed: false },
    { name: "CSE 210", type: "CSE", completed: false },
    { name: "WDD 130", type: "WDD", completed: false },
    { name: "WDD 131", type: "WDD", completed: true },
    { name: "WDD 231", type: "WDD", completed: false },
];

function displayCourses(filter = "All") {
    const courseContainer = document.getElementById("courses");
    courseContainer.innerHTML = "";

    const filteredCourses = filter === "All" ? courses : courses.filter(course => course.type === filter);
    
    filteredCourses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.textContent = course.name;
        courseDiv.classList.add("course-box");
        
        // Set colors
        courseDiv.style.background = course.completed ? "#D3D3D3" : "#7B3F00"; 
        courseDiv.style.color = "white";
        
        courseContainer.appendChild(courseDiv);
    });
}

// Button event listeners
document.getElementById("all").addEventListener("click", () => displayCourses("All"));
document.getElementById("cse").addEventListener("click", () => displayCourses("CSE"));
document.getElementById("wdd").addEventListener("click", () => displayCourses("WDD"));

// Initial load
displayCourses();
