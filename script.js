const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.toggle('optimu')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('optimu')
    })
}
