// Dark mode.
const darkBtn = document.querySelector('#darkModeBtn')
      darkBtn.addEventListener('click', e => {
          document.body.classList.toggle('dark')
        if (darkBtn.innerText === "DARK-MODE ON") {
            darkBtn.innerText = "DARK-MODE OFF"
        } else {
            darkBtn.innerText = "DARK-MODE ON"
        }

       const p = document.createElement('P')
       p.innerText = "this is the p"
       testDiv.appendChild(p)

      })
