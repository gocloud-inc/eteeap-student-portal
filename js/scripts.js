document.addEventListener('DOMContentLoaded', function() {

    // Bootstrap Tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-tooltip="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // Page Loader
    window.addEventListener('beforeunload', (e) => {
        document.body.className = "page-loading";
    }, false);

    // Password Visibility
    let passwordEl = document.querySelectorAll('.password');
    let passwordBtn = document.querySelectorAll('.password-btn');
    let passwordIcon = document.querySelectorAll('.password-icon');

    if (passwordBtn) {
        passwordBtn.forEach((index) => {
            index.addEventListener('click', () => {
                passwordEl.forEach((passwordIndex) => {
                    if (passwordIndex.type === 'password') {
                        passwordIndex.type = 'text';
                        passwordIcon.forEach((passwordIconIndex) => {
                            passwordIconIndex.innerHTML = 'visibility_off';
                        });
                    } else {
                        passwordIndex.type = 'password';
                        passwordIcon.forEach((passwordIconIndex) => {
                            passwordIconIndex.innerHTML = 'visibility';
                        });
                    }
                });
            });
        })
    }

    // Clear Form
    let formEl = document.querySelectorAll('.form');
    let clearFormBtn = document.querySelectorAll('.clear-form');
    
    if (clearFormBtn) {
        clearFormBtn.forEach((index) => {
            index.addEventListener('click',  () => {
                formEl.forEach((formIndex) => {
                    formIndex.reset();
                });
            });
        });
    }

    // Theme Switcher
    let themeBtnSwitcherEle = document.querySelector('.theme-btn-switcher');
    let themeIconSwitcher = document.querySelector('.theme-icon-switcher');
    let themeTextSwitcher = document.querySelector('.theme-text-switcher');

    if (themeBtnSwitcherEle) {
        themeBtnSwitcherEle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            if (localStorage.getItem('isDarkMode') == 'true') {
                themeIconSwitcher.innerHTML = 'dark_mode';
                themeTextSwitcher.innerHTML = 'Dark Mode';
                localStorage.setItem('isDarkMode', false);
            } else {
                themeIconSwitcher.innerHTML = 'light_mode';
                themeTextSwitcher.innerHTML = 'Light Mode';
                localStorage.setItem('isDarkMode', true);
            }
        });

        if (localStorage.getItem('isDarkMode') == 'true') {     
            document.body.classList.toggle('dark-theme');
            themeIconSwitcher.innerHTML = 'light_mode';
            themeTextSwitcher.innerHTML = 'Light Mode';
        }
    }

    // Sidebar
    let sidebarToggler = document.getElementById('sidebar-toggler');
    let asideEl = document.getElementById('aside');

    if (sidebarToggler) {
        sidebarToggler.addEventListener('click', () => {
            asideEl.classList.add('show-aside');
            asideEl.classList.remove('hide-aside');

            let asideDivOverlay = document.createElement('div');
        
            asideDivOverlay.className = 'shadow-overlay'; 
            document.getElementsByTagName('body')[0].appendChild(asideDivOverlay);

            asideDivOverlay.addEventListener('click', () => {
                asideEl.classList.add('hide-aside');
                document.getElementsByTagName('body')[0].removeChild(asideDivOverlay);
            });
        
        });
    }

    // Sidebar has-children Class
    function ToggleMenu(event) {
        event.stopPropagation();
        if (event.target.firstElementChild) {
            event.target.classList.toggle('active');
        }
    }

    let menuParents = document.querySelectorAll(".side-menu .side-item .side-link");
    menuParents.forEach(menuParent => {
        menuParent.parentElement.addEventListener("click", ToggleMenu);
    })
});