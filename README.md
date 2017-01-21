# Richvale Medical Center

This is the development repo for Richvale Medical Center's website, found at [http://richvalemedical.ca](http://richvalemedical.ca "Visit richvalemedical.ca"). The project took 2 weeks to complete; from initial requirement gathering, to deployment.  
While this repo is made public for demonstration purposes, as always, feedback on my code & techniques are always welcome.

---  

## Credits
The website is using [MaterializeCSS](http://materializecss.com/) framework under the MIT License (MIT).

Planned, designed, and coded by: [Marwan Alani](http://alani.ca "Visit Marwan's Site")

---  

## Technologies/Languages Used
- HTML5
- CSS3
- SASS
- jQuery (with a bit of vanilla JS)

---  

## Running Locally
Make sure you have `git` installed on your system, then run `git clone https://github.com/m-alani/richvale-medical.git` from your command line.  
That's it, open `index.html` from the `richvale-medical` directory that Git have just cloned for you and you should see the website in your browser.  

### Editing JS/jQuery
All the editable JS code is found in `js/custom.js`, so make sure you make your edits there. The website uses a minified/compressed format for our custom JS code (combined with few selected JS modules from `MaterializeCSS`).
So make your edits in `js/custom.js`, then compress/minify all the files found in `js/` directory and save/overwrite the resulting file as `js/main.min.js`.
You can use [JSCompress](https://jscompress.com/), or any other preferred tool to perform the compression.  

**Note** When you are compressing/minifing the files in `js/` directory, make sure that do not include `main.min.js`, and also make sure that `custom.js` is the last file you add to the list of `.js` files to be compressed

### Editing CSS/SASS
All SASS modules from MaterializeCSS framework (most of them are modified) can be found under `sass/components` directory. All custom CSS/SASS code can be found in `sass/_custom.scss` file. `sass/main.scss` is the encapsulating file to be compiled into the main CSS file for the website.  
If you make any edits to the CSS/SASS files mentioned above, you can recompile the site's CSS by running `sass sass/main.scss css/main.min.css --style compressed` in the command line, and that will regenerate (and minify) the site's CSS.  

**Note** In order to successfully run the command above & recompile the site's CSS, make sure you have `SASS` installed on your system, and also make sure that you run the command from the root directory of the website (the directory that contains `index.html`)  

---  

Marwan Alani - 2017
