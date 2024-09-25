const redThemeSwitcher = document.getElementById('theme_switcher_red');
const yellowThemeSwitcher = document.getElementById('theme_switcher_yellow');
const greenThemeSwitcher = document.getElementById('theme_switcher_green');
const blueThemeSwitcher = document.getElementById('theme_switcher_blue');

const hideBlogImages = () => {
    const blogImages = document.querySelectorAll('.blog_image');
    blogImages.forEach( blogImage => { blogImage.classList.add('hidden'); } );
}

const showNewBlogImage = themeColor => {
    const newBlogImage = document.getElementById(`blog_image_${themeColor}`);
    newBlogImage.classList.remove('hidden');
}

const switchDataTheme = themeColor => {
    document.documentElement.setAttribute('data-theme', themeColor);
};

const enableThemeSwitchers = () => {
    const themeSwitchers = document.querySelectorAll('button');
    themeSwitchers.forEach( themeSwitcher => { themeSwitcher.disabled = false; } );
};

const disableNewThemeSwitcher = themeColor => {
    const newThemeSwitcher = document.getElementById(`theme_switcher_${themeColor}`);
    newThemeSwitcher.disabled = true;
};

const switchToNewTheme = themeColor => {
    // Blog images disappear and appear practically simultaneously, allowing for a fairly smooth transition
    hideBlogImages();
    showNewBlogImage(themeColor);
    // The rest of the page color changes are handled here
    switchDataTheme(themeColor);
    // All theme switchers are enabled, and then the appropriate switch is disabled
    enableThemeSwitchers();
    disableNewThemeSwitcher(themeColor);
};

// Event listeners
redThemeSwitcher.addEventListener('click', () => switchToNewTheme('red'));
yellowThemeSwitcher.addEventListener('click', () => switchToNewTheme('yellow'));
greenThemeSwitcher.addEventListener('click', () => switchToNewTheme('green'));
blueThemeSwitcher.addEventListener('click', () => switchToNewTheme('blue'));

// Default theme on page load is yellow
switchToNewTheme('yellow');