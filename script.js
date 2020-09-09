let themeDots = document.getElementsByClassName('theme_dot')

// looping through all elements and adding click event listener.
for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', () => {
        console.log('click working')
    })
}