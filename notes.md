# New project boilerplate

### A simple bash script for setting up new projects

#### This script does a few things:

1. Checks working directory to make sure it is actually where you want to install
1. Creates index.html .gitignore .jshintrc gulpfile.js files in the main directory
1. Creates two sub-directories, css & js, and creates an initial file in each directory
1. Populates .gitignore, .jshintrc, and gulpfile.js with initial setup code
1. Initializes NPM
1. Installs gulp, jshint, jshint-stylish, gulp-watch, gulp-jshint as dev dependencies
1. Initializes a new git repo
1. Makes an initial commit on master


### To get going:

1. Download newproject
2. Copy the file into your usr/local/bin folder
3. Once you have the file copied over, in your terminal run the command `chmod +rx newproject`
4. Now whenever you want to start a new project, just create your empty directory, cd into it and run command `newproject`

Initial Script idea courtesy of Thomas Swann (tkswann2)
