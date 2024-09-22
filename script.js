const blogImage = document.getElementById("blog-image");
const redThemeSwitcher = document.getElementById("theme-switcher-red");
const yellowThemeSwitcher = document.getElementById("theme-switcher-yellow");
const greenThemeSwitcher = document.getElementById("theme-switcher-green");
const blueThemeSwitcher = document.getElementById("theme-switcher-blue");

function switchToRedTheme() {
    blogImage.src = "./assets/images/illustration-article-red.svg";
    document.documentElement.setAttribute('data-theme', 'red');
}

function switchToYellowTheme() {
    blogImage.src = "./assets/images/illustration-article-yellow.svg";
    document.documentElement.setAttribute('data-theme', 'yellow');
}

function switchToGreenTheme() {
    blogImage.src = "./assets/images/illustration-article-green.svg";
    document.documentElement.setAttribute('data-theme', 'green');
}

function switchToBlueTheme() {
    blogImage.src = "./assets/images/illustration-article-blue.svg";
    document.documentElement.setAttribute('data-theme', 'blue');
}

redThemeSwitcher.addEventListener('click', switchToRedTheme);
yellowThemeSwitcher.addEventListener('click', switchToYellowTheme);
greenThemeSwitcher.addEventListener('click', switchToGreenTheme);
blueThemeSwitcher.addEventListener('click', switchToBlueTheme);