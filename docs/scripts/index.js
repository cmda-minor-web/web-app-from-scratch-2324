/**
 *
 * @type {Element}
 */
const container = document.querySelector('[data-teams]')
const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': 'Bearer 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',
    'X-GitHub-Api-Version': '2022-11-28'
}

/**
 * Call main function and log when initial run is done
 */
main().then(() => console.log('Done'));

/**
 * Main function that in a way, tells the story of this script
 * @returns {Promise<void>}
 */
async function main() {
    // renderTeams()
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
        const res = await fetch('https://api.github.com/repos/cmda-minor-web/web-app-from-scratch-2324-team/forks', {headers})
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

async function getContributors(team) {
    try {
        const res = await fetch(team.contributors_url, {headers})
        const data = await res.json()
        return data.filter(contributor => contributor.login !== 'bazottie' && contributor.login !== 'cmda-minor-web' && contributor.login !== 'mrtnm')
    } catch (error) {
        console.error(error)
    }
}

/**
 * Map teams to forks object
 * @param forks
 * @returns {Promise<Awaited<unknown>[]>}
 */
async function mapTeamsToForks(forks) {
    return await Promise.all(forks.map(async fork => {
        const team = await getTeam(fork)
        const contributors = await getContributors(fork)
        return {
            ...fork, contributors, team
        }
    }))
}

/**
 * Render teams to the DOM
 * @param forks
 * @returns {*}
 */
function renderTeams(forks) {
    const list = document.createElement('ul');

    const teamEls = forks.map(fork => {
        const listItem = document.createElement('li')
        const article = document.createElement('article')
        const header = document.createElement('header')
        const heading = document.createElement('h2')
        const memberList = !!fork.contributors.length ? renderContributors(fork.contributors) : undefined
        heading.innerText = fork.team.teamName
        console.log(fork.team);
        if (fork.team.avatar_url) {
            const avatar = document.createElement('img')
            avatar.src = fork.team.avatar_url
            avatar.width = 50
            avatar.height = 50
            header.appendChild(avatar)
        }
        header.appendChild(heading)
        article.appendChild(header)
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
 * Create elements to render the contributors of a team
 * @param team
 * @returns {HTMLUListElement}
 */
function renderContributors(contributors) {
    const list = document.createElement('ul')

    contributors.forEach(contributor => {
        const listItem = document.createElement('li')
        const button = document.createElement('button')
        const avatar = document.createElement('img')
        avatar.src = contributor.avatar_url
        avatar.width = 100
        avatar.height = 100
        button.appendChild(avatar)
        listItem.appendChild(button)
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