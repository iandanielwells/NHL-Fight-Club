# NHL-Fight-Club

The purpose of this single-page-application (SPA) is to track memorable fights for an individual user by team. 

Using a created json file, we populated a grid of all team logo images. Using a hover function, whenever a logo was hovered over, the name appears of the corresponding team.

When an image is clicked from the grid, details of the team are populated in the main body, using data from the original json file and a fetch from a public NHL stats API. Within that body, there is a button to 'Add Fights', that when clicked increments the amounts of fights shown and populates a form to enter the fight details, winner, and highlight url. Once that form is submitted, the review is appended to the bottom of the body.

On the right side of the page, a twitter page is embedded that follows NHL Fights.

We will be utilizing other HTML and CSS techniques to stylize the page and add potential additional features.

Still to do: 
    - adjust the CSS so Twitter persists to the right of the page alongside the body and grid
    - hyperlink the url from input value taken in review display
    - persist the fightIncrementer and the fight reviews

Potential things to do:
    -create a list that organizes teams by most fights


