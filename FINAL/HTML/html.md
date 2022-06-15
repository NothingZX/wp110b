## HTML (source : https://www.w3schools.com/ )

HTML is the foundation of all web pages. It defines the structure of a page, while CSS defines its style. HTML and CSS are the beginning of everything you need to know to make your first web page! Learn both and start creating amazing websites.

> Why Learn HTML?

HTML is the foundation of all web pages. Without HTML, you wouldn’t be able to organize text or add images or videos to your web pages. HTML is the beginning of everything you need to know to create engaging web pages!

> Take-Away Skills

You will learn all the common HTML tags used to structure HTML pages, the skeleton of all websites. You will also be able to create HTML tables to present tabular data efficiently.

* Elements and Structure
    * Element Content

    ```
    <h1> Final Homework </h1>
    ```
    The content of an HTML element is the information between the opening and closing tags of an element.

    * `<li>` List Item Element

    ```
    <ol>
    <li>Head east on Uraaa</li>
    <li>Turn left on Nazi</li>
    </ol>

    <ul>
    <li>Boobies</li>
    <li>Milk</li>
    </ul>
    ```
    The `<li>` list item element create list items inside:

    Ordered lists `<ol>` <br>
    Unordered lists `<ul>`


    * `<em>` Emphasis Element
    ```
    <p>This <em>word</em> will be emphasized in italics.</p>
    ```
    The <em> emphasis element emphasizes text and browsers will usually italicize the emphasized text by default.

    * `<ol>` Ordered List Element
    ```
    <ol>
  <li>Preheat oven to 325 F 👩‍🍳</li>
  <li>Drop cookie dough 🍪</li>
  <li>Bake for 15 min ⏰</li>
  </ol>
    ```
    The `<ol>` ordered list element creates a list of items in sequential order. Each list item appears numbered by default.
 
    * `<div>` Div Element
    ```
    <div>
    <h1>A section of grouped elements</h1>
    <p>Here’s some text for the section</p>
    </div>
    <div>
    <h1>Second section of grouped elements</h1>
    <p>Here’s some text</p>
     </div>
    ```
    The `<div>` element is used as a container that divides an HTML document into sections and is short for “division”. `<div>` elements can contain flow content such as headings, paragraphs, links, images, etc.

    * HTML Structure
    ```
    <body>
    <div>
        <h1>It's div's child and body's grandchild</h1>
        <h2>It's h1's sibling</h2>
    </div>
    </body>
    ```
    HTML is organized into a family tree structure. HTML elements can have parents, grandparents, siblings, children, grandchildren, etc.

    * Closing Tag
    ```
    <body>
    ...
    </body>
    ```
    An HTML closing tag is used to denote the end of an HTML element. The syntax for a closing tag is a left angle bracket < followed by a forward slash / then the element name and a right angle bracket to close >.

    * Attribute Name and Values
    ```
    <elementName name="value"></elementName>
    ```
    HTML attributes consist of a name and a value using the following syntax: name="value" and can be added to the opening tag of an HTML element to configure or change the behavior of the element.

    * `<br>` Line Break Element
    ```
    A line break haiku.<br>
    Poems are a great use case.<br>
    Oh joy! A line break.
    ```
    The `<br>` line break element will create a line break in text and is especially useful where a division of text is required, like in a postal address. The line break element requires only an opening tag and must not have a closing tag.

    * `<img>` Image Element
    ```
    <img src="image.png">
    ```
    HTML image `<img>` elements embed images in documents. The src attribute contains the image URL and is mandatory. `<img>` is an empty element meaning it should not have a closing tag.

    * `<h1>-<h6>` Heading Elements
    ```
    <h1>Breaking News</h1>
    <h2>This is the 1st subheading</h2>
    <h3>This is the 2nd subheading</h3>
    ...
    <h6>This is the 5th subheading</h6>
    ```
    HTML can use six different levels of heading elements. The heading elements are ordered from the highest level `<h1>` to the lowest level `<h6>`.

    * `<p>` Paragraph Element
    ```
    <p>This is a block of text! Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    ```
    The `<p>` paragraph element contains and displays a block of text.

    * Unique ID Attributes
    ```
    <h1 id="A1">Hello World</h1>
    ```
    In HTML, specific and unique id attributes can be assigned to different elements in order to differentiate between them.

    When needed, the id value can be called upon by CSS and JavaScript to manipulate, format, and perform specific instructions on that element and that element only. Valid id attributes should begin with a letter and should only contain letters (a-Z), digits (0-9), hyphens (-), underscores (_), and periods (.).

    * HTML Attributes
    ```
    <p id="my-paragraph" style="color: green;">Here’s some text for a paragraph that is being altered by HTML attributes</p>
    ```
    HTML attributes are values added to the opening tag of an element to configure the element or change the element’s default behavior. In the provided example, we are giving the `<p>` (paragraph) element a unique identifier using the id attribute and changing the color of the default text using the style attribute.

    * `<ul>` Unordered List Element
    ```
    <ul>
    <li>Play more music 🎸</li>
    <li>Read more books 📚</li>
    </ul>
    ```
    The `<ul>` unordered list element is used to create a list of items in no particular order. Each individual list item will have a bullet point by default.

    * alt Attribute
    ```
    <img src="path/to/image" alt="text describing image" />
    ```
    An `<img>` element can have alternative text via the alt attribute. The alternative text will be displayed if an image fails to render due to an incorrect URL, if the image format is not supported by the browser, if the image is blocked from being displayed, or if the image has not been received from the URL.

    The text will be read aloud if screen reading software is used and helps support visually impaired users by providing a text descriptor for the image content on a webpage.

    * `<body>` Body Element
    ```
    <body>
     <h1> URAAAA </h1>
    </body>
    ```
    The `<body>` element represents the content of an HTML document. Content inside `<body>` tags are rendered on the web browsers.

    Note: There can be only one `<body>` element in a document.

    * `<span>` Span Element
    ```
    <p><span>This text</span> may be styled differently than the surrounding text.</p>
    ``` 
    The `<span>` element is an inline container for text and can be used to group text for styling purposes. However, as `<span>` is a generic container to separate pieces of text from a larger body of text, its use should be avoided if a more semantic element is available.

    * `<strong>` Strong Element
    ```
    <p>This is <strong>important</strong> text!</p>
    ```
    The `<strong>` element highlights important, serious, or urgent text and browsers will normally render this highlighted text in bold by default.

    * HTML Element
    ```
    <p>Hello World!</p>
    ```
    An HTML element is a piece of content in an HTML document and uses the following syntax: opening tag + content + closing tag. In the code provided:

    `<p>` is the opening tag. <br>
    Hello World! is the content. <br>
    `</p>` is the closing tag.

    * HTML Tag
    ```
    <div>
    ```
    The syntax for a single HTML tag is an opening angle bracket < followed by the element name and a closing angle bracket >. Here is an example of an opening `<div>` tag.

    * `<a>` Anchor Element
    ```
    <!-- Creating text links -->
    <a href="http://www.w3schools.com">Visit this site</a>
 
    <!-- Creating image links -->
    <a href="http://www.w3schools.com">
    <img src="logo.jpg">Click this image
    </a>
    ```
    The `<a>` anchor element is used to create hyperlinks in an HTML document. The hyperlinks can point to other webpages, files on the same server, a location on the same page, or any other URL via the hyperlink reference attribute, href. The href determines the location the anchor element points to.

    * `<head>` Head Element
    ```
    <!DOCTYPE html>
    <html>
    <head>
    <!-- Metadata is contained in this element-->
    </head>
    </html>
    ```
    The `<head>` element contains general information about an HTML page that isn’t displayed on the page itself. This information is called metadata and includes things like the title of the HTML document and links to stylesheets.
    * `<target>` Target Attribute
    ```
    <a href="https://www.google.com" target="_blank">This anchor element links to google and will open in a new tab or window.</a>
    ```
    The target attribute on an `<a>` anchor element specifies where a hyperlink should be opened. A target value of "_blank" will tell the browser to open the hyperlink in a new tab in modern browsers, or in a new window in older browsers or if the browser has had settings changed to open hyperlinks in a new window.

    * Indentation
    ```
    <div>
    <h1>Heading</h1>
 
    <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    </ul>
    </div>
    ```
    HTML code should be formatted such that the indentation level of text increases once for each level of nesting.

    It is a common convention to use two or four space per level of nesting.

    * Link to a Different Part of the Page #
    ```
    <div>
    <p id="id-of-element-to-link-to">A different part of the page!</p>
    </div>
 
    <a href="#id-of-element-to-link-to">Take me to a different part of the page</a>
    ```
    The anchor element `<a>` can create hyperlinks to different parts of the same HTML document using the href attribute to point to the desired location with # followed by the id of the element to link to.

    * `<html>` HTML Element
    ```
    <!DOCTYPE html>
    <html>
    <!-- I'm a comment -->
    </html>
    ```
    The `<html>` element, the root of an HTML document, should be added after the !DOCTYPE declaration. All content/structure for an HTML document should be contained between the opening and closing `<html>` tags.

    * Comments
    ```
    <!-- Main site content -->
    <div>Content</div>
 
    <!--
    Comments can be 
    multiple lines long.
    -->
    ```
    In HTML, comments can be added between an opening `<!-- and closing -->`. Content inside of comments will not be rendered by browsers, and are usually used to describe a part of code or provide other details.

    Comments can span single or multiple lines.

    * Whitespace
    ```
    <p>Test paragraph</p>
 
    <!-- The whitespace created by this line, and above/below this line is ignored by the browser-->
 
    <p>Another test paragraph, this will sit right under the first paragraph, no extra space between.</p>
    ``` 
    Whitespace, such as line breaks, added to an HTML document between block-level elements will generally be ignored by the browser and are not added to increase spacing on the rendered HTML page. Rather, whitespace is added for organization and easier reading of the HTML document itself.

    * `<title>` Title Element 
    ```
    <!DOCTYPE html>
    <html>
    <head>
    <title>Title of the HTML page</title>
    </head>
    </html>
    ```
    The `<title>` element contains a text that defines the title of an HTML document. The title is displayed in the browser’s title bar or tab in which the HTML page is displayed. The `<title>` element can only be contained inside a document’s `<head>` element.
    * File Path
    ```
    <a href="https://developer.mozilla.org/en-US/docs/Web">The URL for this anchor element is an absolute file path.</a>
 
    <a href="./about.html">The URL for this anchor element is a relative file path.</a>
    ```
    URL paths in HTML can be absolute paths, like a full URL, for example: https://developer.mozilla.org/en-US/docs/Learn or a relative file path that links to a local file in the same folder or on the same server, for example: ./style.css. Relative file paths begin with ./ followed by a path to the local file. ./ tells the browser to look for the file path from the current folder.

    * Document Type Declaration
    ```
    <!DOCTYPE html>
    ``` 
    The document type declaration `<!DOCTYPE html>` is required as the first line of an HTML document. The doctype declaration is an instruction to the browser about what type of document to expect and which version of HTML is being used, in this case it’s HTML5.
