# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![Desktop-View](./screenshot/ss-project-shot.png)

### Links

- Solution URL: [Git Repo](https://github.com/moeen-mahmud/intro-component-with-signup-form)
- Live Site URL: [Live Site](https://intro-component-with-signup-form-eight-navy.vercel.app/)

## My Process

### Built With

- HTML5 markup
- Flexbox
- Vanilla JS
- Mobile-first workflow
- [GoogleFonts](https://fonts.google.com/) - For font styles

### What I learned

By doing this project, I learn the basic form validation using vanilla js. I learn some new methods and techniques, such as showing an image inside input box and yes, I implement a very basic **_regex_** format for email validation. I found this method in _stackoverflow_.

```js
const isMail = (userMail) => {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    userMail
  );
};
```

### Continued Development

This is my first **Frontend Mentor** challenge from JS section. It's relatively easy but has some twist inside.

### Useful resources

- [Stack Overflow](https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript) - Here, I found the regular expression short method for email validation.
- [JavaScript Client-Side form validation - Florin Pop](https://www.youtube.com/watch?v=rsd4FNGTRBw&t=923s) - His video helped me to grab the basics.
- [Client Side Form Validation - MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - Here, I find a decrictive approach for validating a form.

## Author

- Frontend Mentor - [moeen-mahmud](https://www.frontendmentor.io/profile/moeen-mahmud)
- Twitter - [moeen_mahmud](https://twitter.com/moeen_mahmud)

## Acknowledgments

I'd like to thank [Florin Pop](https://github.com/florinpop17) for his amazing tutorial on **Form Validation**. I helps me a lot to understand the basic mechanics of a client side form validation. I mentioned the tutorial video on resource section.
