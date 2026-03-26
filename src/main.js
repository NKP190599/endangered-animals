import './style.css'

const animals = [
  {
    name: 'Amur Leopard',
    status: 'Critically Endangered',
    population: '~100',
    habitat: 'Russian Far East',
    emoji: '🐆',
    threat: 'Poaching & habitat loss',
  },
  {
    name: 'Javan Rhino',
    status: 'Critically Endangered',
    population: '~75',
    habitat: 'Indonesia',
    emoji: '🦏',
    threat: 'Habitat destruction',
  },
  {
    name: 'Vaquita',
    status: 'Critically Endangered',
    population: '<10',
    habitat: 'Gulf of California',
    emoji: '🐬',
    threat: 'Illegal fishing nets',
  },
  {
    name: 'Mountain Gorilla',
    status: 'Endangered',
    population: '~1,063',
    habitat: 'Central Africa',
    emoji: '🦍',
    threat: 'Habitat loss & disease',
  },
  {
    name: 'Sumatran Orangutan',
    status: 'Critically Endangered',
    population: '~13,000',
    habitat: 'Sumatra',
    emoji: '🦧',
    threat: 'Deforestation',
  },
  {
    name: 'Snow Leopard',
    status: 'Vulnerable',
    population: '~4,000',
    habitat: 'Central Asia',
    emoji: '🐈',
    threat: 'Climate change & poaching',
  },
]

const statusColor = {
  'Critically Endangered': '#e53e3e',
  'Endangered': '#dd6b20',
  'Vulnerable': '#d69e2e',
}

const app = document.querySelector('#app')

app.innerHTML = `
  <header>
    <h1>🌿 Endangered Animals</h1>
    <p>Species at risk of extinction — learn, share, and act.</p>
    <div class="filters">
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="Critically Endangered">Critical</button>
      <button class="filter-btn" data-filter="Endangered">Endangered</button>
      <button class="filter-btn" data-filter="Vulnerable">Vulnerable</button>
    </div>
  </header>
  <main>
    <div class="grid" id="grid">
      ${animals.map(a => `
        <div class="card" data-status="${a.status}">
          <div class="emoji">${a.emoji}</div>
          <h2>${a.name}</h2>
          <span class="badge" style="background:${statusColor[a.status]}">${a.status}</span>
          <ul>
            <li><strong>Population:</strong> ${a.population}</li>
            <li><strong>Habitat:</strong> ${a.habitat}</li>
            <li><strong>Threat:</strong> ${a.threat}</li>
          </ul>
        </div>
      `).join('')}
    </div>
  </main>
  <footer>
    <p>Data sourced from IUCN Red List · Built with Vite</p>
  </footer>
`

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    const filter = btn.dataset.filter
    document.querySelectorAll('.card').forEach(card => {
      card.style.display =
        filter === 'all' || card.dataset.status === filter ? 'flex' : 'none'
    })
  })
})
