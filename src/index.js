let h4_0 = document.createElement('h4');
let h4_1 = document.createElement('h4');
let h4_2 = document.createElement('h4');
let h4_3 = document.createElement('h4');
let h4_4 = document.createElement('h4');
let h4_5 = document.createElement('h4');
let h4_6 = document.createElement('h4');
let h4_7 = document.createElement('h4');
let h4_8 = document.createElement('h4');
let h4_9 = document.createElement('h4');
let h4_10 = document.createElement('h4');
let h4_11 = document.createElement('h4');
let h4_12 = document.createElement('h4');
let h4_13 = document.createElement('h4');
let h4_14 = document.createElement('h4');
let h4_15 = document.createElement('h4');
let h4_16 = document.createElement('h4');
let h4_17 = document.createElement('h4');
let h4_18 = document.createElement('h4');
let h4_19 = document.createElement('h4');
let h4_20 = document.createElement('h4');
let h4_21 = document.createElement('h4');
let h4_22 = document.createElement('h4');
let h4_23 = document.createElement('h4');
let h4_24 = document.createElement('h4');
let h4_25 = document.createElement('h4');
let h4_26 = document.createElement('h4');
let h4_27 = document.createElement('h4');
let h4_28 = document.createElement('h4');
let h4_29 = document.createElement('h4');
let h4_30 = document.createElement('h4');
let h4_31 = document.createElement('h4');


fetch('http://localhost:3000/logos')
.then(resp => resp.json())
.then(teamLogos => {
    const logosNav = document.querySelector('#Logosgohere');
    teamLogos.forEach(logo => {
        const img = document.createElement('img');
        img.src = logo.image;
        logosNav.append(img);

        img.addEventListener('click', (event) => {
            const newImg = document.createElement('img')
            newImg.src = logo.image;
            const showData = document.getElementById('show-data');
            showData.textContent = "";
            newImg.height = 50;
            newImg.width = 50;
            const h2 = document.createElement('h2');
            h2.textContent = logo.name;


            showData.append(h2, newImg);
            
            fetch('https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats')
            .then(response => response.json())
            .then(teamData => { 

                if (logo.name === teamData.teams[0].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[0].venue.name} (${teamData.teams[0].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[0].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`;
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[0].conference.name} (${teamData.teams[0].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    // showData.append(h2, h3_2, h3, h3_3);

                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4_original = document.createElement('h4');
                        h4_original.setAttribute('class', 'fight-details-info');
                        h4_original.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        
                        
                        h4_0 = h4_original;

                        showData.append(h4_0);

                        fightForm.reset();

                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_0);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_0);


                } else if (logo.name === teamData.teams[1].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[1].venue.name} (${teamData.teams[1].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[1].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[1].conference.name} (${teamData.teams[1].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_1 = h4;

                        showData.append(h4_1);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_1);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_1);


                } else if (logo.name === teamData.teams[2].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[2].venue.name} (${teamData.teams[2].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[2].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[2].conference.name} (${teamData.teams[2].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_2 = h4;

                        showData.append(h4_2);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_2);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_2);


                } else if (logo.name === teamData.teams[3].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[3].venue.name} (${teamData.teams[3].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[3].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[3].conference.name} (${teamData.teams[3].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_3 = h4;

                        showData.append(h4_3);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_3);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_3);


                } else if (logo.name === teamData.teams[4].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[4].venue.name} (${teamData.teams[4].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[4].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[4].conference.name} (${teamData.teams[4].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_4 = h4;

                        showData.append(h4_4);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_4);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_4);


                } else if (logo.name === teamData.teams[5].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[5].venue.name} (${teamData.teams[5].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[5].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[5].conference.name} (${teamData.teams[5].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_5 = h4;

                        showData.append(h4_5);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_5);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_5);


                } else if (logo.name === teamData.teams[6].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[6].venue.name} (${teamData.teams[6].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[6].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[6].conference.name} (${teamData.teams[6].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_6 = h4;

                        showData.append(h4_6);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_6);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_6);


                } else if (logo.name === teamData.teams[7].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[7].venue.name} (${teamData.teams[7].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[7].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[7].conference.name} (${teamData.teams[7].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_7 = h4;

                        showData.append(h4_7);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_7);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_7);


                } else if (logo.name === teamData.teams[8].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[8].venue.name} (${teamData.teams[8].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[8].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[8].conference.name} (${teamData.teams[8].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_8 = h4;

                        showData.append(h4_8);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_8);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_8);


                } else if (logo.name === teamData.teams[9].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[9].venue.name} (${teamData.teams[9].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[9].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[9].conference.name} (${teamData.teams[9].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_9 = h4;

                        showData.append(h4_9);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_9);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_9);


                } else if (logo.name === teamData.teams[10].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[10].venue.name} (${teamData.teams[10].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[10].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[10].conference.name} (${teamData.teams[10].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_10 = h4;

                        showData.append(h4_10);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_10);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_10);


                } else if (logo.name === teamData.teams[11].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[11].venue.name} (${teamData.teams[11].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[11].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[11].conference.name} (${teamData.teams[11].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_11 = h4;

                        showData.append(h4_11);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_11);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_11);


                } else if (logo.name === teamData.teams[12].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[12].venue.name} (${teamData.teams[12].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[12].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[12].conference.name} (${teamData.teams[12].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_12 = h4;

                        showData.append(h4_12);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_12);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_12);


                } else if (logo.name === teamData.teams[13].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[13].venue.name} (${teamData.teams[13].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[13].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[13].conference.name} (${teamData.teams[13].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_13 = h4;

                        showData.append(h4_13);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_13);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_13);


                } else if (logo.name === teamData.teams[14].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[14].venue.name} (${teamData.teams[14].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[14].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[14].conference.name} (${teamData.teams[14].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_14 = h4;

                        showData.append(h4_14);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_14);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_14);


                } else if (logo.name === teamData.teams[15].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[15].venue.name} (${teamData.teams[15].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[15].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[15].conference.name} (${teamData.teams[15].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_15 = h4;

                        showData.append(h4_15);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_15);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_15);


                } else if (logo.name === teamData.teams[16].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[16].venue.name} (${teamData.teams[16].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[16].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[16].conference.name} (${teamData.teams[16].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_16 = h4;

                        showData.append(h4_16);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_16);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_16);


                } else if (logo.name === teamData.teams[17].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[17].venue.name} (${teamData.teams[17].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[17].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[17].conference.name} (${teamData.teams[17].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_17 = h4;

                        showData.append(h4_17);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_17);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_17);


                } else if (logo.name === teamData.teams[18].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[18].venue.name} (${teamData.teams[18].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[18].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[18].conference.name} (${teamData.teams[18].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_18 = h4;

                        showData.append(h4_18);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_18);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_18);


                } else if (logo.name === teamData.teams[19].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[19].venue.name} (${teamData.teams[19].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[19].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[19].conference.name} (${teamData.teams[19].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_19 = h4;

                        showData.append(h4_19);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_19);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_19);



                } else if (logo.name === teamData.teams[20].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[20].venue.name} (${teamData.teams[20].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[20].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[20].conference.name} (${teamData.teams[20].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_20 = h4;

                        showData.append(h4_20);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_20);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_20);


                } else if (logo.name === teamData.teams[21].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[21].venue.name} (${teamData.teams[21].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[21].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[21].conference.name} (${teamData.teams[21].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_21 = h4;

                        showData.append(h4_21);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_21);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_21);


                } else if (logo.name === teamData.teams[22].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[22].venue.name} (${teamData.teams[22].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[22].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[22].conference.name} (${teamData.teams[22].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_22 = h4;

                        showData.append(h4_22);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_22);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_22);


                } else if (logo.name === teamData.teams[23].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[23].venue.name} (${teamData.teams[23].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[23].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[23].conference.name} (${teamData.teams[23].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_23 = h4;

                        showData.append(h4_23);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_23);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_23);


                } else if (logo.name === teamData.teams[24].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[24].venue.name} (${teamData.teams[24].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[24].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[24].conference.name} (${teamData.teams[24].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_24 = h4;

                        showData.append(h4_24);

                        fightForm.reset();

                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_24);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_1);


                } else if (logo.name === teamData.teams[25].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[25].venue.name} (${teamData.teams[25].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[25].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[25].conference.name} (${teamData.teams[25].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_25 = h4;

                        showData.append(h4_25);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_25);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_25);


                } else if (logo.name === teamData.teams[26].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[26].venue.name} (${teamData.teams[26].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[26].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[26].conference.name} (${teamData.teams[26].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_26 = h4;

                        showData.append(h4_26);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_26);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_26);


                } else if (logo.name === teamData.teams[27].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[27].venue.name} (${teamData.teams[27].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[27].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[27].conference.name} (${teamData.teams[27].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_27 = h4;

                        showData.append(h4_27);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_27);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_27);


                } else if (logo.name === teamData.teams[28].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[28].venue.name} (${teamData.teams[28].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[28].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[28].conference.name} (${teamData.teams[28].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_28 = h4;

                        showData.append(h4_28);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_28);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_28);


                } else if (logo.name === teamData.teams[29].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[29].venue.name} (${teamData.teams[29].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[29].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[29].conference.name} (${teamData.teams[29].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_29 = h4;

                        showData.append(h4_29);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_29);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_29);


                } else if (logo.name === teamData.teams[30].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[30].venue.name} (${teamData.teams[30].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[30].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[30].conference.name} (${teamData.teams[30].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_30 = h4;

                        showData.append(h4_30);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_30);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_30);


                } else if (logo.name === teamData.teams[31].name) {
                    const h3 = document.createElement('h3');
                    h3.textContent = `${teamData.teams[31].venue.name} (${teamData.teams[31].venue.city})`;
                    const h2 = document.createElement('h2');
                    h2.textContent = `Record: ${teamData.teams[31].teamStats[0].splits[0].stat.wins}-${teamData.teams[0].teamStats[0].splits[0].stat.losses}-${teamData.teams[0].teamStats[0].splits[0].stat.ot}`
                    const h3_2 = document.createElement('h3');
                    h3_2.textContent = `${teamData.teams[31].conference.name} (${teamData.teams[31].division.name})`;
                    const h3_3 = document.createElement('h3');
                    h3_3.textContent = 'Fight History - '
                    const fightNumber = document.createElement('h3');
                    fightNumber.textContent = `Fights: ${logo.fights}`;
                    const fightIncrementer = document.createElement('button');
                    fightIncrementer.textContent = 'Add Fight';
                    fightIncrementer.addEventListener("click", () => {
                    
                    fightNumber.textContent = `Fights: ${logo.fights+=1}`;
                    
                    const fightForm = document.createElement('form');
                    fightForm.setAttribute('class', 'fight-form');

                    
                    const fightDetails = document.createElement('submit');
                    
                    const fightInput = document.createElement('input');
                    fightInput.setAttribute('class', 'fight-input');
                    fightInput.setAttribute('placeholder', 'Teams involved...');
                    
                    
                    const fightWinner = document.createElement('submit');

                    const fightWinnerInput = document.createElement('input');
                    fightWinnerInput.setAttribute('class', 'fight-winner');
                    fightWinnerInput.setAttribute('placeholder', 'Enter winner here...');
                    fightWinnerInput.textContent = 'Enter highlights';

                    const fightHighlightUrl = document.createElement('submit');

                    const fightHighlightUrlInput = document.createElement('input');
                    fightHighlightUrlInput.setAttribute('class', 'fight-url');
                    fightHighlightUrlInput.setAttribute('placeholder', 'Notable moments...');

                    const fightsubmitBtn = document.createElement('input');
                    fightsubmitBtn.setAttribute('type', 'submit');
                    fightsubmitBtn.textContent = 'Submit Fight Details';

                    const elementLabel = document.createElement('h5');
                    elementLabel.textContent = "Rate this fight";
                    const selectElement = document.createElement('select');
                    selectElement.append(elementLabel);
                    selectElement.setAttribute('name', '1-10');
                    selectElement.setAttribute('class', 'rating')

                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '1');
                    option1.textContent = '1';

                    const option2 = document.createElement('option');
                    option2.setAttribute('value', '2');
                    option2.textContent = '2';

                    const option3 = document.createElement('option');
                    option3.setAttribute('value', '3');
                    option3.textContent = '3';

                    const option4 = document.createElement('option');
                    option4.setAttribute('value', '4');
                    option4.textContent = '4';

                    const option5 = document.createElement('option');
                    option5.setAttribute('value', '5');
                    option5.textContent = '5';

                    const option6 = document.createElement('option');
                    option6.setAttribute('value', '6');
                    option6.textContent = '6';

                    const option7 = document.createElement('option');
                    option7.setAttribute('value', '7');
                    option7.textContent = '7';

                    const option8 = document.createElement('option');
                    option8.setAttribute('value', '8');
                    option8.textContent = '8';

                    const option9 = document.createElement('option');
                    option9.setAttribute('value', '9');
                    option9.textContent = '9';

                    const option10 = document.createElement('option');
                    option10.setAttribute('value', '10');
                    option10.textContent = '10';

                    selectElement.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);



                    fightForm.append(fightDetails, fightInput, fightWinner, fightWinnerInput, fightHighlightUrl, fightHighlightUrlInput, selectElement, fightsubmitBtn);
                    
                    

                    fightForm.addEventListener('submit', (event) => {
                        event.preventDefault();

                        const tempFightInput = document.querySelector('.fight-input').value;
                        const tempWinnerInput = document.querySelector('.fight-winner').value;
                        const temphighlightInput = document.querySelector('.fight-url').value;
                        const tempRatings = document.querySelector('.rating').value;

                        const ul = document.createElement('ul');
                        
                        const h4 = document.createElement('h4');
                        h4.setAttribute('class', 'fight-details-info');
                        h4.textContent = `Winner: ${tempWinnerInput}    Rating: ${tempRatings}/10   Highlights: (${temphighlightInput})     Description: ${tempFightInput}`;
                        
                        
                        h4_31 = h4;

                        showData.append(h4_31);

                        fightForm.reset()
                        ;
                        fightForm.textContent = "";

                    })

                    showData.append(fightForm, h4_31);
                })
                showData.append(h2, h3_2, h3, h3_3, fightIncrementer, fightNumber, h4_31);


                }
                  else  {showData.append(' \n something')}
            })
        })
    })
})


    const darkBtn = document.querySelector('#darkModeBtn')
      darkBtn.addEventListener('click', e => {
          document.body.classList.toggle('dark')
        if (darkBtn.innerText === "DARK-MODE OFF") {
            darkBtn.innerText = "DARK-MODE ON"
            darkBtn.style.backgroundColor = 'black';
            darkBtn.style.color = 'white';
        } else {
            darkBtn.innerText = "DARK-MODE OFF";
            darkBtn.style.backgroundColor = 'white';
            darkBtn.style.color = 'black';
        }
      })

