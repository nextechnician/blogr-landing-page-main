# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
-  [Author](#author)

## Overview

### The challenge

Users should be able to:

-  View the optimal layout for the site depending on their device's screen size
-  See hover states for all interactive elements on the page

### Screenshot

![](/preview.png)

### Links

-  Solution URL: (https://github.com/nextechnician/blogr-landing-page-main)
-  Live Site URL: (https://talay-blogr-landing-page.netlify.app)

## My process

I built the project using a mobile-first workflow, starting with semantic HTML to lock in the structure before moving on to styling. CSS custom properties were used for consistency, with Flexbox and Grid handling layout where appropriate.

Mobile styles were written first and then progressively enhanced for tablet and desktop with media queries. The main focus was the responsive navigation, which uses the same markup across all breakpoints but changes behavior depending on screen size. On mobile and tablet it functions as a toggleable menu with accordion-style dropdowns, while on desktop it becomes an inline navigation with dropdown menus.

JavaScript was kept minimal and state-based. A single .is-open class controls dropdown state, and CSS handles all visual changes based on that state and the active breakpoint. This kept the logic simple and avoided inline style manipulation. Testing was done frequently in DevTools and across browsers to catch layout and alignment issues early.

### Built with

-  Semantic HTML5 markup
-  CSS custom properties
-  Flexbox
-  CSS Grid
-  Mobile-first workflow
-  Vanilla JavaScript

### What I learned

This project helped solidify my understanding of responsive navigation patterns, especially using the same markup across mobile, tablet, and desktop while changing behavior through CSS and small amounts of JavaScript.

I learned to manage UI state more cleanly by using a single .is-open class as the source of truth and letting CSS handle all visual changes based on breakpoint. This made the navigation logic easier to reason about and debug.

I also gained more confidence debugging CSS conflicts across breakpoints and browsers, particularly where mobile-first styles need to be explicitly overridden on desktop. Finally, I improved my awareness of basic accessibility by keeping aria-expanded in sync with dropdown state.

### Continued development

In future projects, I want to continue refining complex responsive navigation patterns, particularly improving keyboard interaction and focus management for dropdown menus. I also want to spend more time tightening CSS architecture across breakpoints to reduce overrides and improve long-term maintainability.

This project highlighted areas where I can keep improving, such as planning responsive behavior earlier and stress-testing layouts across browsers sooner in the process.

## Author

-  Frontend Mentor - [@nextechnician](https://www.frontendmentor.io/profile/nextechnician)
