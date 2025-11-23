function saveThemePreference(theme) {
    if (theme === "dark" || theme === "light") {
        localStorage.setItem("theme", theme);
        console.log(`preference saved: ${theme}`);
    } else {
        console.log("Invalid");
    }
}

function getThemePreference() {
    return localStorage.getItem("theme") || "light"; // this thing sets default to light theme
}
saveThemePreference("dark");
console.log("Current theme:", getThemePreference());