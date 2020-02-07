/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onInitialClientRender = () => {
    function darkToggle() {
        const objToggle = document.querySelector(".js-toggle")
        const objToggleContainer = document.body
    
        // Little bit of an experiment to see if I could detect dark mode preference
        const blnDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
    
        var checkDarkMode = localStorage.getItem("darkMode")
    
        if (blnDarkMode) {
          objToggle.setAttribute("aria-pressed", "true")
          objToggleContainer.setAttribute("data-theme", "dark")
        }
    
        if (checkDarkMode === "false") {
          objToggle.setAttribute("aria-pressed", "false")
          objToggleContainer.setAttribute("data-theme", "light")
        }
    
        // Handle the actual toggle and switch the theme
        objToggle.addEventListener("click", e => {
          if (objToggle.getAttribute("aria-pressed") === "false") {
            objToggle.setAttribute("aria-pressed", "true")
            objToggleContainer.setAttribute("data-theme", "dark")
            localStorage.setItem("darkMode", "true")
          } else {
            objToggle.setAttribute("aria-pressed", "false")
            objToggleContainer.setAttribute("data-theme", "light")
            localStorage.setItem("darkMode", "false")
          }
        })
      }
      darkToggle()
  }