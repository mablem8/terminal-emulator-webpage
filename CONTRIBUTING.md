# For Contributors

If you are interested in contributing to this repository, please read and follow
these guidelines.

## Contents

* [Design](#design): An overview of the repository and its structure
* [Workflow Conventions](#workflow-conventions): Git workflow conventions that
  contributors must follow in order to contribute to the project
    * [Forking Workflow](#forking-workflow): The macro level workflow convention
    * [Gitflow Workflow](#gitflow-workflow): The micro level workflow convention
* [Style Guide](#style-guide): Text and coding conventions that contributors
  must follow in order to contribute to the project
    * [General Style Guide](#general-style-guide): General styling conventions
    * [HTML Style Guide](#html-style-guide): Style guide for HTML
    * [CSS Style Guide](#css-style-guide): Style guide for CSS
    * [JavaScript Style Guide](#javascript-style-guide) Style guide for
      JavaScript
* [Planned Features](#planned-features): Contributors should check here first
  for ideas about what to contribute to the project
* [License](#license)

## <a name="design"></a> Design

The Terminal Emulator Webpage mimics the look and behavior of a command line or
old school hacker terminal. It's great for novelty websites or as a film prop
when expanded to full screen. All processing takes place on the client side; no
special server configurations are required.

The webpage is lightweight and simple. The majority of the page functionality is
contained within the `script.js` file. Data (e.g. the text printed to the screen
in response to terminal commands) are separated into a separate `data.js` file.
There are no external Javascript library dependencies. Colors and other visual
behavior (such as preserving whitespace when displayed as HTML) are specified in
`style.css`.

## <a name="workflow-conventions"></a> Workflow Conventions

At a macro level, development follows the [Forking Workflow](#forking-workflow).
This level of development consists of interactions between contributors (e.g.
pull/merge requests, forks/clones, etc). At a micro level, development follows
the [Gitflow Workflow](#gitflow-workflow). This level of development consists of
actions by a single contributor (e.g. branching, commits, etc).

### <a name="forking-workflow"></a> Forking Workflow

The Forking Workflow consists of three initialization steps and six iterative
steps. This project's macro workflow is based on the Forking Workflow described
at [https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow).

![Forking Workflow](documentation/images/forking-workflow.png)

**Initialization steps**

i) User A initializes Local Repository A and pushes it to Remote Repository A.
```bash
usera$ mkdir /path/to/repository/ && cd /path/to/repository/
usera$ git init
usera$ git config user.name "User A"
usera$ git config user.email "ua@example.com"
usera$ git remote add origin https://usera@example.com/usera/repository.git
 # Create a README file
usera$ git add README.md
usera$ git commit -m "README"
usera$ git push -u origin master
```

ii) User B forks Remote Repository A in order to create Remote Repository B.

iii) User B clones Remote Repository B in order to create Local Repository B.
```bash
userb$ git clone https://userb@example.com/userb/repository.git
userb$ cd repository/
userb$ git config user.name "User B"
userb$ git config user.email "ub@example.com"
userb$ git remote add upstream https://userb@example.com/usera/repository.git
```

**Iterative Sequence**

0) User B fetches and merges upstream changes and makes changes according to
   the [Gitflow Workflow](#gitflow-workflow).

1) User B pushes changes made to Local Repository B to Remote Repository B.
```bash
userb$ git push origin branch-name
```

2) User B submits a pull request from the updated branch in Remote Repository B
   to an appropriate target branch in Remote Repository A. See the
   [Gitflow Workflow](#gitflow-workflow) section for a list of appropriate
   merges.

3) User A fetches the changes submitted by User B from Remote Repository B to
   Local Repository A.
```bash
usera$ git fetch https://usera@example.com/userb/repository.git branch-name
usera$ git checkout FETCH_HEAD
```
User A tests the code for acceptability. Upon a successful test, the changes
are merged into the indicated target branch in Local Repository A.
```bash
usera$ git checkout target-branch
usera$ git merge --no-ff FETCH_HEAD
 # omit --no-ff if merging develop into develop
```

4) User A pushes the merged changes from Local Repository A to Remote
   Repository A.
```bash
usera$ git push origin target-branch
```

5) User B pulls the merged changes from Remote Repository A to Local
   Repository A.
```bash
userb$ git checkout target-branch
userb$ git pull upstream target-branch
```

6) User B pushes the merged changes from Local Repository B to Remote
   Repository B.
```bash
userb$ git push origin target-branch
```
If the original branch is not a permanent branch (i.e. the original branch is
not the develop of master branch), then it should be removed.
```bash
userb$ git branch -d branch-name
userb$ git push origin --delete branch-name
```

### <a name="gitflow-workflow"></a> Gitflow Workflow

The Gitflow Workflow is a set of rules that describe how branches, merges, and
commits should be made. This project's micro workflow is based on the Gitflow
Workflow described at [http://nvie.com/posts/a-successful-git-branching-model/](http://nvie.com/posts/a-successful-git-branching-model/)
and [https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

![Gitflow Workflow](documentation/images/gitflow-workflow.png)

In the Gitflow Workflow, there are two permanent branches: master and develop.
All other branches have a limited lifespan and belong to one of three
categories: features, fixes, and releases.

* **master**: The master branch consists only of release commits (e.g. 1.0.0,
  1.1.0, 1.2.1, etc). All commits are merges from a fix branch or a release
  branch. All commits are made by the repository maintainer. Contributors
  cannot commit to or merge into the master branch.
* **develop**: The develop branch consists of development commits and merges
  from feature, fix, or release branches. Contributors should either branch
  from develop in order to work on a feature or commit changes to the develop
  branch in order to improve existing features.
* **feature branches**: All feature branches must branch from the develop
  branch and merge into the develop branch. Feature branches may have any name.
  For this project, feature branches contain lowercase letters and dashes by
  convention.
* **release branches**: All release branches must branch from the develop
  branch and merge into both the master branch and then the develop branch.
  Release branches are named "release-X.Y.0", where X and Y are integers and
  X.Y.0 is the upcoming release version. The project maintainer creates and
  merges release branches, and contributors may make commits to a release
  branch while it exists. Merges into a release branch generally are not
  allowed.
* **fix branches**: All fix branches must branch from the master branch and
  merge into both the master branch and then the develop branch. Fix branches
  are named "fix-X.Y.Z", where X, Y, and Z are integers, X.Y is the current
  release version, and Z is the fix number. Fix branches are created to address
  pressing issues in the master branch code. Contributors may make commits to a
  fix branch while it exists, but merges into a fix branch are not allowed.

The following example illustrates a contributor creating a feature branch.
```bash
userb$ git checkout -b feature-a develop
```

Note that the Gitflow Workflow does not tolerate rebasing, cherry picking,
forced pushes, or any other commands that corrupt the commit history. **It is
the responsibility of the contributor to `git fetch` changes from upstream
target branches and to `git merge --ff-only` these changes into local branches
before making commits or submitting pull or merge requests.**

## <a name="style-guide"></a> Style Guide

Code should adhere to these guidelines before being sumbitted through a pull or
merge request.

### <a name="general-style-guide"></a> General Style Guide

* Use two space characters instead of tab characters. Do not use tabs, and do
  not use four space characters for a tab.
* Generally, text should be wrapped at 80 characters.

### <a name="html-style-guide"></a> HTML Style Guide

* **Capitalization**: Use only lowercase, e.g. use `<a href="/about">About</a>`
  instead of `<A HREF="/about">About</A>`.
* **Encoding**: Use UTF-8, i.e. `<meta charset="utf-8">`.
* **Document Type**: Use HTML5, i.e. `<!DOCTYPE html>`. Do not use self-closing
  elements, e.g. use `<br>` instead of `<br />`.
* **HTML Validity**: Ensure that HTML passes validity tests.
* **Semantics**: Always use tags with specific purposes when available. Instead
  of using `<div onclick="goToAbout();">About</div>`, use
  `<a href="/about">About</a>`, for example.
* **Multimedia Fallback**: Provide alternative contents for multimedia, e.g.
  use `<img src="logo.png" alt="Logo">` instead of `<img src="logo.png">`.
* **Separation of Concerns**: Strictly separate structure (markup),
  presentation (styling), and behavior (scripting). HTML could contain
  structural information, CSS should contain styling information, and JS should
  contain behavioral information.
* **type Attributes**: Omit type attributes for style sheets and scripts, e.g.
  use `<link rel="stylesheet" href="css/style.css">` and
  `<script src="js/app.js"></script>` instead of
  `<link rel="stylesheet" href="css/style.css" type="text/css">` and
  `<script src="js/app.js" type="text/javascript"></script>`.
* **HTML Quotation Marks**: Use double quotation marks (e.g. `""`), not single
  quotation marks (e.g. `''`) when quoting attribute values.

### <a name="css-style-guide"></a> CSS Style Guide

* **Capitalization**: Use only lowercase, e.g. use `color: #e5e5e5;` instead of
  `color: #E5E5E5;`.
* **CSS Validity**: Ensure that CSS passes validity tests.
* **ID and Class Naming**: Use meaningful ID and class names, e.g. use
  `.gallery { ... }` instead of `.p-998 { ... }`
* **Type Selectors**: Avoid qualifying ID and class names with type selectors.
  Do not use element names in conjunction with IDs or classes. Do not use IDs
  in CSS files.
* **Leading 0s**: Include leading 0's in decimal values for readability, e.g.
  `font-size: 0.8em;` instead of `font-size: .8em;`.
* **ID and Class Name Delimiters**: Separate words in ID and class names by a
  hyphen, e.g. use `.demo-image { ... }` and `.error-status { ... }` instead of
  `.demoimage { ... }` or `.errorStatus { ... }`.
* **Declaration Stops**: Use a semicolon after every declaration.
* **Property Name Stops**: Always use a space after a property name's colon.
* **Declaration Block Separation**: Always use a single space (not a newline)
  between the last selector and the opening brace that begins the declaration
  block.
* **Selector and Declaration Separation**: Always start a new line for each
  selector and declaration.
* **Rule Separations**: Always put a blank line (two line breaks) between rules.
* **CSS Quotation Marks**: Use double quotation marks for attribute selectors
  or property values.

### <a name="javascript-style-guide"></a> JavaScript Style Guide

* **var**: Always declare variables with `var`, otherwise the variable is
  placed in the global context.
* **Constants**: If a value is intended to be constant and immutable, it should
  be given a name in all capital letters. Never use the `const` keyword as it's
  not supported by all browsers at this time.
* **Semicolons**: Always use semicolons.
* **Multiline String Literals**: Do not use multiline string literals.
* **Code Formatting**: Always start curly braces on the same line as what they
  are opening.
* **Strings**: Use single quotes (`'`) instead of double quotes (`"`).

## <a name="planned-features"></a> Planned Features

Check here for contribution ideas, such as currently planned features.

* Implement backspace
* Implement "up" for previous command
* Text entry for mobile devices

## <a name="license"></a> License

Written in 2017 by Bradley Denby  
Other contributors: None

To the extent possible under law, the author(s) have dedicated all copyright and
related and neighboring rights to this work to the public domain worldwide. This
work is distributed without any warranty.

You should have received a copy of the CC0 Public Domain Dedication with this
work. If not, see <https://creativecommons.org/publicdomain/zero/1.0/>.
