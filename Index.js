fetch('http://localhost:3000/logos')
.then(resp => resp.json())
.then(teamLogos => {
    renderTeamLogos(teamLogos)
})
function renderTeamLogos(teamLogos) {
    teamLogos.forEach((logo) => {
        const logoImages = document.createElement('img')
        logoImages.src = logo.image
        document.querySelector('#Logosgohere').append(logoImages)
    })
}
