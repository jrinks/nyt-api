New York Times API Application by Jessica Rinks (in response to Chicago Public Media technical challenge due August 2, 2021)

This application is deisgned to allow users to keyword search the New York Times Articles API. 
I built this app using vanilla Javascript with Bootstrap styling, Axios.cdn for API interface and a bit of HTML and CSS.
In short, I ran out of time before I was able to complete the project.

Unresolved issues include:
-I wasn't able to hide the API_KEY so I've omitted it from the code. For the code to work, please add in the API_KEY in line 2 of main.js. Because I'm not using a backend, any API Key hard coded would be visible in the browser. If I were working in Flask or React, I could put the API key in my .env file, create a dependancy pointing to the key (but not displaying it in the browser) and putting the .evn in my .gitignore. But since I'm not using a framework, I wasn't sure how to handle that. I tried to implement dotenv-webpack (part of node.js) but I wasn't able to get that to work. I know this would not be good enough for a production app.

-the app is iterating thru article results 0-9, but I'm having trouble getting that iteration to display in the HTML. I think its overriding the HTML elements every time the createArticleList iterates.  

-I ran out of time before I could implement pagination. The API only provides 10 results per call, and in order to view more results a "previous" and "next" buttons are needed which owuld use the offset value to page thru results.