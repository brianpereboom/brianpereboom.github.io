# Contributing to brianpereboom.github.com

Thank you for your interest in contributing to brianpereboom.github.com! We welcome your contributions to help make this website even better. Below are the steps to follow in order to contribute effectively.

## Table of Contents
1. [Requesting to be a Contributor](#1-requesting-to-be-a-contributor)
2. [Creating a Biography or Articles](#2-creating-a-biography-or-articles)
3. [Thumbnail Guidelines](#3-thumbnail-guidelines)
4. [Organizing Articles](#4-organizing-articles)
5. [Updating the Sitemap](#5-updating-the-sitemap)
6. [Submitting Your Contribution](#6-submitting-your-contribution)

---

### 1. Requesting to be a Contributor

Before you can contribute, you need to request to be added as a contributor. Follow these steps:

1. Visit the [GitHub repository](https://github.com/brianpereboom/brianpereboom.github.io).

2. Click on the "Fork" button in the upper right-hand corner to create a copy of the repository in your GitHub account.

3. Once you have your own fork, navigate to the "Settings" tab of your forked repository.

4. Scroll down to the "Collaborators" section and click on "Add collaborator."

5. Enter the GitHub username of the repository owner or an existing contributor (if applicable) and click "Add collaborator."

6. The owner or collaborator will receive a notification and grant you access to the repository.

### 2. Creating a Biography or Articles

You can contribute by adding a biography or articles to the website. Here's how to do it:

1. Create a new directory with the name of your article (or your name in the case of a biography) in the Articles directory of your forked repository.

2. Inside this directory, create an `index.html` file, `thumbnail.png`, and any accompanying HTML, CSS, or script files you need for your content. A thumbnail is required if you want the article to be featured on the homepage.

3. Your biography may contain links to your articles, external projects, and social media.

### 3. Thumbnail Guidelines

Thumbnails provide a visual preview of your article and enhance the user experience. Please follow these guidelines for thumbnails:

- Thumbnail dimensions: ANY, images will scale up without clipping or changing the aspect ratio.
- File formats: JPEG, PNG, GIF, SVG, or any which are universally supported.
- Content: Ensure that the thumbnail represents the content of your article and is visually appealing.

### 4. Organizing Articles

To keep the website organized, place your biography folder in "Articles/Meet Our Creators/" and article folders in the "Articles" directory in the subdirectory that best matches the topic discussed in the article or create a new subdirectory.

For example, if your article is about web development, you could create a directory structure like this:

```
Articles/
├── Meet Our Creators/
│   ├── YourName/
│   │   ├── index.html
│   │   ├── styles.css
│   │   └── script.js
├── Web Development/
│   ├── YourArticleName/
│   │   ├── index.html
│   │   ├── styles.css
│   │   └── script.js
```

### 5. Updating the Sitemap

To ensure your article shows up in the navbar, you should add it to the `articlemap.xml` file in the following format:

```xml
<url>
  <loc>category/articleName</loc>
</url>
```

Replace `category` with the relevant category (e.g., "Meet Our Creators" or the appropriate subdirectory) and `articleName` with the name of your article directory.

### 6. Submitting Your Contribution

Once you have completed your article or biography and added it to the repository, follow these steps to submit your contribution:

1. Commit your changes to your forked repository.

2. Create a pull request (PR) from your forked repository to the main repository (brianpereboom/brianpereboom.github.io).

3. Provide a clear and concise title and description for your pull request, explaining what your contribution entails.

4. Once your PR is submitted, it will be reviewed by the maintainers, and any necessary feedback or changes will be discussed.

5. Once your PR is approved, it will be merged into the main repository, and your contribution will be live on the website.

Thank you for contributing to brianpereboom.github.com! Your contributions help make this website a valuable resource for our audience.
