const redThemeSwitcher = document.getElementById("theme-switcher-red");
const yellowThemeSwitcher = document.getElementById("theme-switcher-yellow");
const greenThemeSwitcher = document.getElementById("theme-switcher-green");
const blueThemeSwitcher = document.getElementById("theme-switcher-blue");

const switchBlogImageSource = themeColor => {
    const blogImage = document.getElementById('blog-image');
    const newSource = `./assets/images/illustration-article-${themeColor}.svg`;
    blogImage.src = newSource;
};

const switchDataTheme = themeColor => {
    document.documentElement.setAttribute('data-theme', themeColor);
};

const enableThemeSwitchers = () => {
    document.querySelectorAll('button').forEach( button => { button.disabled = false; });
};

const disableCurrentThemeSwitcher = themeColor => {
    switch (themeColor) {
        case 'red':
            redThemeSwitcher.disabled = true;
            break;
        case 'yellow':
            yellowThemeSwitcher.disabled = true;
            break;
        case 'green':
            greenThemeSwitcher.disabled = true;
            break;
        case 'blue':
            blueThemeSwitcher.disabled = true;
            break;
    };
};

const switchToNewTheme = themeColor => {
    switchBlogImageSource(themeColor);
    switchDataTheme(themeColor);
    enableThemeSwitchers();
    disableCurrentThemeSwitcher(themeColor);
};

// Event listeners
redThemeSwitcher.addEventListener('click', () => switchToNewTheme('red'));
yellowThemeSwitcher.addEventListener('click', () => switchToNewTheme('yellow'));
greenThemeSwitcher.addEventListener('click', () => switchToNewTheme('green'));
blueThemeSwitcher.addEventListener('click', () => switchToNewTheme('blue'));

// Default theme on page load is yellow
switchToNewTheme('yellow');