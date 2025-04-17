document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = [
        { title: 'Kidocode Internship Project', 
            desc: 'Joined as a web developer, a project was assigned to develop an e-commerce website from sketch. With the use of Figma as the wireframe, HTML, CSS, JavaScript and Bootstrap as the frontend framework, Flask Python and SQLAlchemy as the backend framework. For the deployment we used Amazon Web Service EC2 that has been successfully hosted at <a href="https://13.250.38.106/">https://13.250.38.106</a>.',
            images: [
            'images/project_kidocode/project_kidocode(1).jpg',
            'images/project_kidocode/project_kidocode(2).JPEG',
            'images/project_kidocode/project_kidocode(3).jpg'
        ]},
        { title: 'MSU Final Year Project', 
            desc: 'For my final year project in Management and Science University (MSU), .',
            images: [
            'images/project_fyp/project_fyp(1).png',
            'images/project_fyp/project_fyp(2).JPEG',
            'images/project_fyp/project_fyp(3).JPEG'
        ]},
        { title: 'MSU Microprocessor Project', 
            desc: 'The final project for "Microprocesser" subject assignment is to develop .',
            images: [
            'images/msu_microprocesser/msu_microprocesser(1).JPEG',
            'images/msu_microprocesser/msu_microprocesser(2).JPEG',
            'images/msu_microprocesser/msu_microprocesser(3).JPEG'
        ]},
        { title: 'MSU Wellness Activity', 
            desc: "Wellness Management is a Personal Enrichment Competency subject offered by Management and Science University (MSU), designed to promote students' overall well-being. This course emphasizes the importance of maintaining both mental and physical health through a variety of activities conducted weekly throughout the semester. Its primary objective is to educate students on how to reduce health risks, build healthy habits, and foster a balanced lifestyle. One of the core assignments in this subject was to choreograph and perform a group dance routine by the end of the semester. This performance required collaboration, discipline, and creativity, allowing me to enhance not only my physical fitness but also key soft skills. Throughout this process, I developed stronger organizational and communication abilities by coordinating practice sessions, ensuring team participation, and contributing to the creative direction of the routine. This experience was instrumental in helping me become a more effective team player and a confident communicator.",
            images: [
            'images/msu_wellness/msu_wellness(1).jpg',
            'images/msu_wellness/msu_wellness(2).jpg',
            'images/msu_wellness/msu_wellness(3).jpg'
        ]},
        { title: "MSU Entrepreneurship Activity", 
            desc: "Another Personal Enrichment Competences subject by Management and Science University is entrepreneurship skills, .",
            images: [
            "images/msu_entrepreneurship/msu_entrepreneurship(1).JPEG",
            "images/msu_entrepreneurship/msu_entrepreneurship(2).JPEG",
            "images/msu_entrepreneurship/msu_entrepreneurship(3).JPEG"
        ]},
        { title: "SG Academy Final Year Project", 
            desc: "During my diploma years, for my final year project was to develop a hardware system the compentency profile chart on server configuration and computer system security control.",
            images: [
            "images/project_sga/project_sga(1).jpg",
            "images/project_sga/project_sga(2).jpg",
            "images/project_sga/project_sga(3).jpg"
        ]}
    ];
    
    document.querySelectorAll('.gallery-item').forEach((item) => {
        item.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            updateModal(index);
        });
    });
    
    function updateModal(index) {
        const modalTitle = document.getElementById('galleryModalLabel');
        const modalDesc = document.getElementById('modalDesc');
        const carouselInner = document.querySelector(".carousel-inner");

        const project = galleryImages[index];

        modalTitle.textContent = project.title;
        modalDesc.innerHTML = project.desc;

        carouselInner.innerHTML = "";

        // Add images to the carousel
        project.images.forEach((imgSrc, i) => {
            const activeClass = i === 0 ? "active" : "";
            carouselInner.innerHTML += `
                <div class="carousel-item ${activeClass}">
                    <img src="${imgSrc}" class="d-block mx-auto" alt="${project.title}" style="width: 500px; height: 500px; object-fit: cover;">
                </div>
            `;
        });
    }

    const navbar = document.querySelector(".nav-container");
    const navLinks = document.querySelectorAll(".nav-link"); // Select all nav links
    const sections = document.querySelectorAll("section"); // Select all sections

    // Function to handle scroll behavior
    function handleScroll() {
        if (window.scrollY > 10) {
            navbar.classList.add("scrolled"); // Add class when scrolled
        } else {
            navbar.classList.remove("scrolled"); // Remove class at top
        }

        // Detect current section in viewport
        let currentSection = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100; // Adjust for better accuracy
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        // Remove 'active' from all links and add to current section
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    }

    // Smooth scrolling when clicking nav links
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);

            if (targetId === "home") {
                // Scroll to the very top
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                // Scroll to the respective section
                const targetSection = document.getElementById(targetId);
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for fixed navbar
                    behavior: "smooth"
                });
            }
        });
    });

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
});
