# Frontend Polish and Animation Refinement Plan

This plan outlines the steps to improve the UI, animations, and overall user experience of the portfolio website.

## Priority 1: Critical Fixes

-   [x] **Fix `ProjectCard` Stacking:** The `sticky` positioning on `ProjectCard` components causes them to stack incorrectly. This will be fixed to ensure each project is displayed correctly within its own section.
-   [x] **Replace Missing Images:** Replace all missing images in `ProjectCard.tsx` and `Testimonials.tsx` with placeholders to avoid broken images.

## Priority 2: Animation and Interaction Refinements

-   [x] **Improve Testimonial Scrolling:** Replace the current `setInterval`-based scrolling in `Testimonials.tsx` with a smoother, performant CSS-based animation for the infinite scroll effect.
-   [x] **Create a Reusable Animation Hook:** Abstract the `IntersectionObserver` logic into a reusable React hook (`useIntersectionObserver`) to streamline animation triggers and reduce code duplication across components.
-   [x] **Standardize Entrance Animations:** Unify the entrance animations across all sections (`Hero`, `About`, `SkillsTools`, `Experience`, etc.) to use a consistent slide-in and fade-in effect. This will create a more cohesive visual flow.
-   [x] **Refine Hover Effects:** Enhance hover effects on interactive elements like project cards, skill tags, and buttons to provide better visual feedback and a more polished feel.

## Priority 3: Advanced Scroll Effects and Polish

-   [x] **Introduce Parallax Scrolling:** Add subtle parallax scrolling effects to background elements (like the dots in the `Experience` section) to create a sense of depth and dynamism on scroll.
-   [x] **Animate Header on Scroll:** Make the header change its appearance on scroll (e.g., background blur, shadow) to make it more dynamic and context-aware.
-   [x] **Add Staggered Animations to Project Stats:** Animate the stats in `ProjectCard.tsx` to appear one by one when the card becomes visible, adding a nice touch of micro-interaction.

## New Feature Implementations

-   [x] **Add a "Contact" section with a form.** (Removed later)
-   [x] **Make the "Skills & Tools" section more visual with logos.** (Used placeholder icons)
-   [ ] **Expand the "Projects" into "Case Studies".** (One case study created)
-   [x] **Refactor "Schedule Free Meeting" button into a component.**
-   [x] **Update "Pro Expert" badge position.**
-   [x] **Update "Schedule Free Meeting" button colors.**
-   [x] **Update "Schedule Free Meeting" button image.**
-   [x] **Move project stats before "Explore case study" button.**
