fetch('http://localhost:3000/logos')
.then(resp => resp.json())
.then(teamLogos => {
    const logosNav = document.querySelector('#Logosgohere');
    teamLogos.forEach(logo => {
        const img = document.createElement('img');
        img.src = logo.image;
        logosNav.append(img);
        img.addEventListener('click', (event) => {
            const showData = document.getElementById('show-data');
            showData.textContent = "";
            showData.append(logo.name);
            fetch('https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats')
            .then(response => response.json())
            .then(teamData => {
                console.log(teamData);
                if (showData.textContent == teamData.teams.name
                    //also tried logo.name === teamData.teams.name
                    ) {
                    showData.append(teamData.teams.venue.name)
                } else {showData.append('  something')}
            })
        })
    })
})
function setUpFightForm() {
    const fightForm = document.querySelector('#fight-form')
    fightForm.addEventListener('submit', (event) => {
        event.preventDefault()
        
        const userTeam = document.querySelector('#teams-involved').value
        const uploadTeam = document.querySelector('#new-teams')
        uploadTeam.innerText = userTeam

        const userName = document.querySelector('#new-name').value 
        const uploadName = document.querySelector('#new-winner')
        uploadName.innerText = userName

        const userImage = document.querySelector('#new-image').value
        const uploadImage = document.querySelector('#new-upload')
        uploadImage.src = userImage

        const userRating = document.querySelector('#select-rating').value
        const uploadRating = document.querySelector('#rating-display')
        uploadRating.innerHTML = userRating

    fightForm.reset()
    })
}
setUpFightForm()
