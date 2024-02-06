main().then(() => console.log('done'))

async function main() {
    const students = await getStudents();
    renderStudents(students.sort(() => 0.5 - Math.random()))
}

function renderStudents(students) {
    const container = document.querySelector('[data-students]');
    const list = document.createElement('ul')

    students.map(student => {
        const item = document.createElement('li')
        const anchor = document.createElement('a');
        const description = document.createElement('p')
        const avatar = document.createElement('img')
        anchor.href = `https://${student.login}.github.io/web-app-from-scratch-2324/`
        anchor.alt = `WAFS fork from ${student.login}`
        anchor.target = '_blank'
        anchor.textContent = student.login
        avatar.src = student.avatar_url
        item.append(avatar)
        item.append(anchor)
        list.append(item)
    })
    container.append(list)
}

async function getStudents() {
    const res = await fetch('https://api.github.com/repos/cmda-minor-web/web-app-from-scratch-2324/forks?per_page=100')
    const teams = await res.json()
    console.log(teams);
    return teams.map(({owner}) => owner)
}
