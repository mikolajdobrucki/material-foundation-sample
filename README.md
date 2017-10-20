# Material Foundation Starter Project

![Material Foundation](http://materialfoundation.mikolajdobrucki.com/assets/img/cover-sample.png)

This is the exemplary Material Foundation implementation based on a [Foundation Basic Template](https://foundation.zurb.com/sites/docs/starter-projects.html#basic-template).

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

## Setup

To set up the template, first download it with Git:

```bash
git clone https://github.com/eucalyptuss/material-foundation-sample.git projectname
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname
npm install
bower install
```

Finally, run `npm start` to run the Sass and Javascript compiler. It will re-run every time you save a Sass or Javascript file.


## How is it done?

To use Material Foundation along with the main Foundation Framework:
* all the scss files are imported in [the main stylesheet](https://github.com/eucalyptuss/material-foundation-sample/blob/master/scss/app.scss)
* all the javascript files are compiled with the rest of the scripts with gulp in [a gulpfile](https://github.com/eucalyptuss/material-foundation-sample/blob/master/gulpfile.js)

Then, both compiled files are included in [index.html](https://github.com/eucalyptuss/material-foundation-sample/blob/master/index.html) as `style.css` and `app.js`.
