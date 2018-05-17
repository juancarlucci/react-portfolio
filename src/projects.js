const projects = [
    {
        "id": 1,
        "logo": require("./images/codeinsight-logo.png"),
        "img":require("./images/codeinsight-branding.png"),
        "alt": "codeInsight app photo",
        "title": "codeInsight",
        "subtitle": "OAuth, RESTful",
        "desc": "Full-stack app to dispaly Github user statistics.",
        "features": "The main page is an insights dashboard displaying publicly available information via Github’s API. Information is displayed as graphs/charts representing major trends in the users own repo history. User can navigate to What’s Hot page for statistics for all Github repos.",
        "skills": "Backend-Node.js|MongoDb|Express. Frontend- HTML5|CSS3|JavaScrip|D3.js",
        "code": "https://github.com/juancarlucci/codeinsight",
        "site": "https://codeinsight.herokuapp.com/"
    },
    {
        "id": 2,
        "logo": require("./images/mytasks-logo.png"),
        "img": require("./images/react-app-branding.png"),
        "alt": "react app image",
        "title": "My Tasks Today",
        "subtitle": "React.js",
        "desc": "React.js app that allows the user to create a list of tasks. The list is editable. The app makes API calls to create, edit, delete and store tasks.",
        "features": "Data stored in API. CRUD capabilities.",
        "skills": "React.js, Axios, JavaScript, HTML5, CSS3, Semantic-UI-React",
        "code": "https://github.com/juancarlucci/react-mytasks",
        "site": ""
    },
    {
        "id": 3,
        "logo": require("./images/butter-logo.png"),
        "img":require("./images/butter-map-branding.png"),
        "alt": "restaurant locator app image",
        "title": "Restaurant Locator",
        "subtitle": "Interactive map",
        "desc": "Locate Bay Area restaurants that use real butter.",
        "features": "Includes a search function and nearby attractions via Wikimedia API.",
        "skills": "AJAX, JavaScript Design Patterns, Google API, Wikimedia API",
        "code": "https://github.com/juancarlucci/map",
        "site": "https://juancarlucci.github.io/map/"
    },
    {
        "id": 4,
        "logo": require("./images/community-logo.png"),
        "img": require("./images/community-branding.png"),
        "alt": "Community Projects Map image",
        "title": "Community Projects Map",
        "subtitle": "Update via Google Sheets",
        "desc": "This project was done on a pro-bono basis for a non-profit looking to explore possibilities for mapping their community projects. The organization was looking for a colorful, easy to maintain map.",
        "features": "All marker data is stored in an easily accessible Google spreadsheet. This gave the organization direct access to updating the data without having to update the app's javascript files. We used Tabeltop.js to achieve this. Created wireframe using InVision and got client input. Created assets using Adobe Illustrator (markers, logo).",
        "skills": "JavaScript, HTML5, CSS3, Leaflet.js, Mapbox, Tabletop.js, Adobe Illustrator",
        "code": "https://github.com/juancarlucci/community-projects",
        "site": "https://juancarlucci.github.io/community-projects/"
    },
    {
        "id": 5,
        "logo": require("./images/copa-logo.png"),
        "img": require("./images/world-cup-branding.png"),
        "alt": "Sample photo",
        "title": "World Cup 1930-2014",
        "subtitle": "D3.js Animated SVG map",
        "desc": "Watch a D3 animation of where each world cup was held.",
        "features": "SVG map displays data by year, winning country and number of participating countries. Hover states on graph reveal data for match, score and year.",
        "skills": "D3.js, responsive svg, nest, rollup, leaves, transitions, and scales",
        "code": "https://github.com/juancarlucci/worldcup",
        "site": "https://juancarlucci.github.io/worldcup/"
    }
]

export default projects;
