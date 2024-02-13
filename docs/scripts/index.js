/**
 *
 * @type {Element}
 */
const container = document.querySelector('[data-teams]')

/**
 * Call main function and log when initial run is done
 */
main().then(() => console.log('Done'));

/**
 * Main function that in a way, tells the story of this script
 * @returns {Promise<void>}
 */
async function main() {
    const forks = await getForks();
    const teams = await mapTeamsToForks(forks)
    const teamEls = renderTeams(teams)
    hydrateTeams(teamEls)
}

/**
 * Get Forks of the repo
 * @returns {Promise<any>}
 */
async function getForks() {
    try {
        const res = await fetch('https://api.github.com/repos/cmda-minor-web/web-app-from-scratch-2324-team/forks')
        return res.json()
    } catch (error) {
        console.error(error)
    }
}

/**
 * Get your team.json
 * @param team
 * @returns {Promise<{teamName: string, members: *[], description: string}|any>}
 */
async function getTeam(team) {
    try {
        const res = await fetch(`${team.homepage}/team.json`)
        return await res.json()
    } catch (error) {
        return {
            teamName: 'No team.json found',
            description: 'Make sure to add a team.json to the root of your homepage',
            members: [],
        }
    }
}

/**
 * Map teams to forks object
 * @param forks
 * @returns {Promise<Awaited<unknown>[]>}
 */
async function mapTeamsToForks(forks) {
    return await Promise.all(forks.map(async team => {
        const teamJson = await getTeam(team)
        return {
            ...team, team: teamJson
        }
    }))
}

/**
 * Render teams to the DOM
 * @param teamsForks
 * @returns {*}
 */
function renderTeams(teamsForks) {
    const list = document.createElement('ul');

    const teamEls = teamsForks.map(fork => {
        const listItem = document.createElement('li')
        const article = document.createElement('article')
        const teamName = document.createElement('h2')
        const viewTeam = document.createElement('a')
        console.log(fork.team.members);
        const memberList = !!fork.team.members.length ? createMemberEls(fork.team) : undefined
        teamName.innerText = fork.team.teamName
        viewTeam.href = fork.homepage
        viewTeam.innerText = 'View'
        article.appendChild(teamName)
        article.appendChild(viewTeam)
        if (memberList) {
            article.appendChild(memberList)
        }
        listItem.appendChild(article)
        list.appendChild(listItem)
        return listItem
    })
    container.appendChild(list)
    return teamEls
}

/**
 * Create elements to render the members of a team
 * @param team
 * @returns {HTMLUListElement}
 */
function createMemberEls(team) {
    const list = document.createElement('ul')

    team.members.forEach(member => {
        const listItem = document.createElement('li')
        const section = document.createElement('section');
        const name = document.createElement('h3')
        const link = document.createElement('a')
        // const avatar = document.createElement('img')
        // const description = document.createElement('p')
        // const hobbyTitle = document.createElement('h4')
        // const hobbyList = document.createElement('ul')

        name.innerText = member.name
        link.href = member.personalPage
        link.innerText = 'View'
        // avatar.src = member.avatar
        // description.innerText = member.description
        // hobbyTitle.innerText = 'Hobbies'

        // member.hobbies.forEach(hobby => {
        //     const hobbyItem = createElement('li')
        //     hobbyItem.innerText = hobby
        //     hobbyList.appendChild(hobbyItem)
        // })

        section.append(name, link)
        listItem.appendChild(section)
        list.appendChild(listItem)
    })
    return list
}

/**
 * "Hydrate" teams with event listeners
 * @param teams
 */
function hydrateTeams(teams) {
    teams.forEach(team => {
        team.addEventListener('click', (e) => {
            e.preventDefault()
            alert('geklikt!')
        })
    })
}