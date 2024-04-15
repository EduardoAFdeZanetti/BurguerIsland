Hi Rob. Here it goes my python assessment.

Github link: https://eduardoafdezanetti.github.io/BurguerIsland/index.html

Render link: https://burguerisland.onrender.com/

What I intended to do with this project was creating a burger place website with login and register pages for costumers.

In my "index" page I used js for pictures slides.
I created a "history" page to connect costumers with the "brand's legacy".
In my "menu" page I tried unseccessfully reduce the prices in 10% (with js) after login was made. (It would be great if you could take a look at my code and help me with a solution.)
In my "login" and "register" pages I used py to make it work. There is currently two users and passwords: Rob, 1234. and Eduardo, 5678. Although is possible to register new users in the "register" page.
After login successfully made, a message is displayed with js to offer 10% discount for costumers.

For the responsiveness I used js to switch my nav to an icon for smaller screens.
The responsiveness in the index and history pages are ok, but not that nice in the menu and login pages as I couldn't make the background cover the whole screen in smaller devices. (it would be great if you can also help me with that.)

My Python logic: 
The code starts by importing the necessary modules from Flask.
An app object is created as an instance of the Flask class.
Routes for Static Pages:
Routes are defined for different HTML pages (index, history, menu, register, login).
Each route corresponds to a function that renders the corresponding HTML template.
User Registration:
A dictionary users is defined to store usernames and passwords.
There is a route to render the registration form (register.html).
When the form data is submitted via POST, the register_post function is triggered.
This function checks if the username already exists in the users dictionary. If yes, an error message is shown. If not, the new user is added to the dictionary.
User Authentication:
There is a route to render the login form (login.html).
When the login form data is submitted via POST, the login_post function is triggered.
This function checks if the username is present in the users dictionary and if the provided password matches the password stored for that user.
If authentication is successful, the user is redirected to the home page (index). Otherwise, an error message is shown.
Running the Flask Application:
The application is run locally on host '0.0.0.0' on port 8080, with debug mode enabled.
In summary, this code creates a basic web application using Flask, allowing users to register and log in, with credential verification and error handling appropriately implemented.

Image link: I got all images I used on my project at https://unsplash.com/

It was fun once again working on this assessment, and I can see the progress with each project, even though I had very little time to dedicate to it. 
I wish I could have worked more on the design and functionality of the website, but I couldn't find the time for it in the past few weeks. 
I'll try to make up for it in the next project.





