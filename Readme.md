# Welcome to my [Personal Profile](https://ddeveloper72-profile.herokuapp.com/)

This was my very first personal Python app, which was built from following different coding tutorials.

To create this app, I combined two different bootstrap templates by Start Bootstrap [Clean Blog](https://startbootstrap.com/template-overviews/clean-blog/) and [Resume](https://startbootstrap.com/template-overviews/resume/).  I also learned how to use four loops in Flask to arrange my resume and work experience data which is stored as Json data.

The GitHub search API, written in JavaScript is adapted from one of [Code Institute](https://courses.codeinstitute.net/) tutorials, the Rosie Resume.

**The following are two code samples, is the GitHub API and the second is a snippet of the education Json file data source.  My career data is stored in a similar way, as separate Json file.

1 GitHub API Code sample:

```javascript
function fetchGitHubInformation(event) {
    $("#gh-user-data").html("");
    $("#gh-repo-data").html("");
    
    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter  Github username</h2>`);
        return;
    }
    $("#gh-user-data").html(
        `<div id="loader">
            <img src="static/css/loader.gif" alt="loading..." />
         </div>`);

    $.when(
        $.getJSON(`https://api.github.com/users/${username}`),
        $.getJSON(`https://api.github.com/users/${username}/repos`)
    ).then(
        function(firstResponse, secondResponse) {
            var userData = firstResponse[0];
            var repoData = secondResponse[0];
            $("#gh-user-data").html(userInformationHTML(userData));
            $("#gh-repo-data").html(repoInformationHTML(repoData));
        },
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#gh-user-data").html(
                    `<h2>No info found for user ${username}</h2>`);
            } else if(errorResponse.status === 403){
              var resetTime = new Date(errorResponse.getResponseHeader('x-Ratelimit-Reset')*1000);
               $("#gh-user-data").html(`<h4>Too many requests, please wait until ${resetTime.toLocaleTimeString()} has passed</h4>`);
            } else {
                console.log(errorResponse);
                $("#gh-user-data").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        });
}
```

2 Source data in Json format:

```javascript
[
    {
        "edu_title": "Full Stack Diploma",
        "edu_duration": "February 2018 - Present",
        "authority": "The Code Institute",
        "qualification": "Studying toward a Diploma<br><small>(Credit rated by EDINBURGH NAPIER UNIVERSITY)</small>",
        "image_source": "<img class=\"featureette-image img-fluid\" style=\"max-width: 40%;\" src=\"/static/img/ci.PNG\" alt=\"The Code Institute\">"
    }
]
```