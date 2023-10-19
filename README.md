# brianpereboom.github.io: An Idea-Sharing Community

## Why you should contribute

Contributing to brianpereboom.github.com offers not only a chance to share your expertise and passions but also numerous professional benefits. Your participation in this project can significantly enhance your professional profile and make you stand out to employers and peers alike.

**1. Showcase Your Expertise:** By contributing articles related to your field, you demonstrate your deep knowledge and understanding of a particular subject matter. This kind of expertise can be impressive to employers seeking candidates with in-depth knowledge.

**2. Highlight Your Passion:** Employers appreciate individuals who are genuinely passionate about what they do. Your contributions will showcase your enthusiasm for your field, signaling to potential employers that you're committed and engaged in your work.

**3. Prove Your Communication Skills:** Writing articles or creating content requires effective communication and presentation skills. Employers highly value these skills as they translate to better teamwork and client interactions. Your contributions are proof of your ability to convey complex ideas clearly.

**4. Networking Opportunities:** Engaging with a community of like-minded professionals and enthusiasts through your contributions can lead to valuable connections. Networking is crucial in the job market, and brianpereboom.github.com can be a gateway to new opportunities and collaborations.

**5. Portfolio Building:** Your contributions serve as a dynamic portfolio that you can showcase to potential employers. It demonstrates your initiative, creativity, and willingness to go the extra mile to share your knowledge.

**6. Thought Leadership:** Consistent and insightful contributions can establish you as a thought leader in your field. Employers value individuals who can shape and influence industry discussions.

A biography can be a powerful tool to personalize your professional profile. You can use your autobiography to share your journey, experiences, and the milestones that have shaped your career. This adds a personal touch to your professional identity and gives potential employers a glimpse of the person behind the accomplishments. It's another opportunity to showcase what makes you unique and valuable in your field.

## Contributing to brianpereboom.github.com

Thank you for your interest in contributing to brianpereboom.github.com! We welcome your contributions to help make this website even better. Below are the steps to follow in order to contribute effectively.

### Table of Contents
1. [Requesting to be a Contributor](#1-requesting-to-be-a-contributor)
2. [Creating a Biography or Articles](#2-creating-a-biography-or-articles)
3. [Thumbnail Guidelines](#3-thumbnail-guidelines)
4. [Organizing Articles](#4-organizing-articles)
5. [Updating the Sitemap](#5-updating-the-sitemap)
6. [Submitting Your Contribution](#6-submitting-your-contribution)

---

#### 1. Requesting to be a Contributor

Before you can contribute, you need to request to be added as a contributor. Follow these steps:

1. Visit the [GitHub repository](https://github.com/brianpereboom/brianpereboom.github.io).

2. Click on the "Fork" button in the upper right-hand corner to create a copy of the repository in your GitHub account.

3. Once you have your own fork, navigate to the "Settings" tab of your forked repository.

4. Scroll down to the "Collaborators" section and click on "Add collaborator."

5. Enter the GitHub username of the repository owner or an existing contributor (if applicable) and click "Add collaborator."

6. The owner or collaborator will receive a notification and grant you access to the repository.

#### 2. Creating a Biography or Articles

You can contribute by adding a biography or articles to the website. Here's how to do it:

1. Create a new directory with the name of your article (or your name in the case of a biography) in the Articles directory of your forked repository.

2. Inside this directory, create an `index.html` file, `thumbnail.png`, and any accompanying HTML, CSS, or script files you need for your content. You can use the template located at ExampleCategory/ExampleArticle/index.html as a starting point for your article. A thumbnail is required if you want the article to be featured on the homepage.

3. Your biography may contain links to your articles, external projects, and social media.

#### 3. Thumbnail Guidelines

Thumbnails provide a visual preview of your article and enhance the user experience. Please follow these guidelines for thumbnails:

- Thumbnail dimensions: ANY, images will scale up without clipping or changing the aspect ratio.
- File formats: JPEG, PNG, GIF, SVG, or any which are universally supported.
- Content: Ensure that the thumbnail represents the content of your article and is visually appealing.

#### 4. Organizing Articles

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

#### 5. Updating the Sitemap

To ensure your article shows up in the navbar, you should add it to the `articlemap.xml` file in the following format:

```xml
<!-- Article template -->
<url>
  <loc>Category/Title</loc>
  <image>(optional)image.png</image>
</url>

<!-- Biography template -->
<url>
  <loc>Meet Our Creators/Name</loc>
</url>
```

Replace `category` with the relevant category (e.g., "Meet Our Creators" or the appropriate subdirectory) and `articleName` with the name of your article directory.

#### 6. Submitting Your Contribution

Once you have completed your article or biography and added it to the repository, follow these steps to submit your contribution:

1. Commit your changes to a new branch on your forked repository.

2. Create a pull request (PR) from your forked repository to the main repository (brianpereboom/brianpereboom.github.io).

3. Provide a clear and concise title and description for your pull request, explaining what your contribution entails.

4. Once your PR is submitted, it will be reviewed by the maintainers, and any necessary feedback or changes will be discussed.

5. Once your PR is approved, it will be merged into the main repository, and your contribution will be live on the website.

Thank you for contributing to brianpereboom.github.com! Your contributions help make this website a valuable resource for our audience.
