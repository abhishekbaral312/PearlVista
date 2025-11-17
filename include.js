document.querySelectorAll("[data-include]").forEach(async el => {
    const file = el.getAttribute("data-include");
    try {
        const response = await fetch(file);
        const html = await response.text();
        el.innerHTML = html;
        
        if (file.includes("header.html")) {
        setActiveNav();
    }
        // Apply dynamic banner data if available
        const title = el.getAttribute("data-title");
        const sub = el.getAttribute("data-sub");
        const breadcrumb = el.getAttribute("data-breadcrumb");

        if (title) el.querySelector("#banner-title").textContent = title;
        if (sub) el.querySelector("#banner-sub").textContent = sub;
        if (breadcrumb) el.querySelector("#banner-breadcrumb").textContent = breadcrumb;
    } catch (err) {
        console.error("Include failed:", file, err);
    }
});

function setActiveNav() {
    const currentPage = window.location.pathname.split("/").pop(); 
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}
