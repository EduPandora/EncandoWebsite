import { useNavigate, useLocation } from 'react-router-dom';

// Utility function to scroll to a section with navigation support
export const useNavigateAndScroll = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navigateAndScrollToSection = (sectionId, targetPath = '/') => {
        // If we're already on the target page, just scroll
        if (location.pathname === targetPath) {
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // Navigate to the target page first, then scroll
            navigate(targetPath);
            
            // Wait for the navigation to complete and page to render
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                } else {
                    // If element not found immediately, try again after a longer delay
                    setTimeout(() => {
                        const element = document.getElementById(sectionId);
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }, 500);
                }
            }, 100);
        }
    };

    return navigateAndScrollToSection;
};

// Alternative approach: standalone function for components that can't use hooks
export const navigateAndScrollToSection = (sectionId, targetPath = '/') => {
    // For HashRouter, we need to check the hash part
    let currentPath = window.location.hash.replace('#', '');
    if (!currentPath || currentPath === '') {
        currentPath = '/';
    }
    
    // If we're already on the target page, just scroll
    if (currentPath === targetPath) {
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    } else {
        // Navigate to the target page first, then scroll
        window.location.hash = targetPath;
        
        // Wait for the navigation to complete and page to render
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                // If element not found immediately, try again after a longer delay
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 500);
            }
        }, 300);
    }
}; 