const redThemeSwitcher = document.getElementById('theme-switcher-red');
const yellowThemeSwitcher = document.getElementById('theme-switcher-yellow');
const greenThemeSwitcher = document.getElementById('theme-switcher-green');
const blueThemeSwitcher = document.getElementById('theme-switcher-blue');

const hidePreviousBlogImage = () => {
    blogImages = document.querySelectorAll('.blog_image');
    blogImages.forEach( blogImage => { blogImage.classList.add('hidden'); } );
}

const showNewBlogImage = themeColor => {
    const newBlogImage = document.getElementById(`blog-image-${themeColor}`);
    newBlogImage.classList.remove('hidden');
}

const switchDataTheme = themeColor => {
    document.documentElement.setAttribute('data-theme', themeColor);
};

const enableThemeSwitchers = () => {
    document.querySelectorAll('button').forEach( button => { button.disabled = false; } );
};

const disableNewThemeSwitcher = themeColor => {
    const newThemeSwitcher = document.getElementById(`theme-switcher-${themeColor}`);
    newThemeSwitcher.disabled = true;
};

const switchToNewTheme = themeColor => {
    hidePreviousBlogImage();
    showNewBlogImage(themeColor);
    switchDataTheme(themeColor);
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