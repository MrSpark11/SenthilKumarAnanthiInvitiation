import HOUSE_IMG from './House Image.jpeg'

// ===== Configuration =====
const INVITEE_NAMES = 'Senthil Kumar & Ananthi'
const INVITEE_FAMILY = ''
const HOUSE_ADDRESS = 'Site No: 31, Teachers Colony, Ashokapuram, Coimbatore - 641022'
const MAP_QUERY = '11.096369, 76.948603'
const MAP_LINK_QUERY = encodeURIComponent(MAP_QUERY)
const MAP_EMBED_LINK = `https://maps.google.com/maps?q=${MAP_LINK_QUERY}&output=embed`
const MAP_DIRECTIONS_LINK = 'https://maps.app.goo.gl/SKvrRZEev3LXR54b6'

// Event date — November 2, 2026, 9:00 AM IST
const EVENT_DATE = new Date('2026-11-20T09:00:00+05:30')
const EVENT_DATE_DISPLAY = {
  day: '20',
  month: 'November',
  year: '2026',
  weekday: 'Friday',
  time: '4:30 AM',
  muhurat: 'Auspicious Time: 4:30 AM – 06:00 AM',
}

// ===== SVG Icons =====
const iconTap = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11V6a2 2 0 0 1 4 0v5"/><path d="M9 11a2 2 0 0 0-4 0v3a7 7 0 0 0 7 7h2a7 7 0 0 0 7-7v-3a2 2 0 0 0-4 0"/><path d="M17 11a2 2 0 0 0-4 0"/></svg>`
const iconCalendar = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`
const iconClock = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
const iconArrowDown = `<svg class="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`
const iconMapPin = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
const iconNavigation = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>`
const iconHome = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`

// ===== HTML =====
document.querySelector('#app').innerHTML = `
  <!-- Landing / Click to Open -->
  <div class="landing" id="landing">
    <svg class="landing-ornament-top" height="120" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,0 L1200,0 L1200,0 Q600,120 0,0 Z" fill="rgba(201,125,74,0.15)"/>
    </svg>
    <svg class="landing-ornament-bottom" height="120" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,120 L1200,120 L1200,120 Q600,0 0,120 Z" fill="rgba(201,125,74,0.15)"/>
    </svg>
    <div class="envelope" id="envelope">
      <div class="envelope-flap"></div>
      <div class="envelope-wax">
        <svg width="28" height="42" viewBox="0 0 32 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Murugan's Vel">
          <path d="M16 2C13 9 6.5 16 6.5 22.5c0 5.5 3.8 9.8 9.5 12.5 5.7-2.7 9.5-7 9.5-12.5C25.5 16 19 9 16 2Z"/>
          <path d="M16 7v27M8 33c2.2 1.6 4.9 2.6 8 3.2 3.1-.6 5.8-1.6 8-3.2M16 36.2V46"/>
          <path d="M13 39h6M13 42h6"/>
        </svg>
      </div>
      <div class="envelope-body">
        <div class="envelope-content">
          <div class="envelope-label">Housewarming</div>
          <div class="envelope-subtext">You're Invited</div>
        </div>
      </div>
    </div>
    <div class="click-hint">
      ${iconTap}
      Click to Open Invitation
    </div>
  </div>

  <!-- Main Invitation -->
  <div class="invitation" id="invitation">

    <!-- House Section -->
    <section class="house-section reveal" id="houseSection">
      <div class="decorative-divider"></div>
      <div class="invitee-label">With Blessings & Joy</div>
      <h1 class="invitee-heading">
        <span class="accent">${INVITEE_NAMES}</span><br/>
        ${INVITEE_FAMILY}
      </h1>
      <p class="invitee-sub">Cordially invite you to celebrate their new home</p>
      <div class="house-image-frame">
        <img src="${HOUSE_IMG}" alt="New home decorated for housewarming" />
      </div>
      <div class="address-card">
        <div class="label"><span style="display:inline-flex;align-items:center;gap:0.4rem;">${iconHome} Venue Address</span></div>
        <div class="address">${HOUSE_ADDRESS}</div>
      </div>
      <div class="scroll-indicator">
        <span>Scroll for Details</span>
        ${iconArrowDown}
      </div>
    </section>

    <!-- Date & Time Section -->
    <section class="datetime-section reveal" id="datetimeSection">
      <div class="decorative-divider"></div>
      <div class="datetime-label">Save the Date</div>
      <h2 class="datetime-heading">When to Join Us</h2>
      <p class="datetime-sub">We look forward to your presence on this auspicious occasion</p>
      <div class="datetime-cards">
        <div class="dt-card">
          <div class="icon">${iconCalendar}</div>
          <div class="dt-label">Date</div>
          <div class="dt-value">${EVENT_DATE_DISPLAY.day} ${EVENT_DATE_DISPLAY.month}</div>
          <div class="dt-sub">${EVENT_DATE_DISPLAY.weekday}, ${EVENT_DATE_DISPLAY.year}</div>
        </div>
        <div class="dt-card">
          <div class="icon">${iconClock}</div>
          <div class="dt-label">Time</div>
          <div class="dt-value">${EVENT_DATE_DISPLAY.time}</div>
          <div class="dt-sub">${EVENT_DATE_DISPLAY.muhurat}</div>
        </div>
      </div>
      <div class="countdown" id="countdown">
        <div class="countdown-unit"><div class="num" id="cdDays">0</div><div class="unit">Days</div></div>
        <div class="countdown-unit"><div class="num" id="cdHours">0</div><div class="unit">Hours</div></div>
        <div class="countdown-unit"><div class="num" id="cdMins">0</div><div class="unit">Minutes</div></div>
        <div class="countdown-unit"><div class="num" id="cdSecs">0</div><div class="unit">Seconds</div></div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section reveal" id="mapSection">
      <div class="decorative-divider"></div>
      <div class="map-label">Find Us Here</div>
      <h2 class="map-heading">Location & Directions</h2>
      <p class="map-sub">${iconMapPin} ${HOUSE_ADDRESS}</p>
      <div class="map-frame">
        <iframe
          src="${MAP_EMBED_LINK}"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="House location in Coimbatore"
          allowfullscreen
        ></iframe>
      </div>
      <a class="map-directions" href="${MAP_DIRECTIONS_LINK}" target="_blank" rel="noopener">
        ${iconNavigation}
        Get Directions
      </a>
    </section>

    <!-- Footer -->
    <footer class="invitation-footer">
      <p>We can't wait to welcome you to our new home</p>
      <span>${INVITEE_NAMES} · Coimbatore · ${EVENT_DATE_DISPLAY.month} ${EVENT_DATE_DISPLAY.year}</span>
    </footer>
  </div>
`

// ===== Interaction Logic =====
const landing = document.getElementById('landing')
const envelope = document.getElementById('envelope')
const invitation = document.getElementById('invitation')
let isOpening = false

function openInvitation() {
  if (isOpening) return
  isOpening = true
  envelope.classList.add('opening')
  setTimeout(() => {
    landing.classList.add('hidden')
    invitation.classList.add('visible')
    setTimeout(() => {
      landing.style.display = 'none'
      document.body.style.overflow = 'auto'
      // Trigger scroll reveal on first visible section
      observeReveal()
    }, 1000)
  }, 600)
}

landing.addEventListener('click', openInvitation)

// Lock scroll on landing
document.body.style.overflow = 'hidden'

// ===== Scroll Reveal =====
function observeReveal() {
  const reveals = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )
  reveals.forEach((el) => observer.observe(el))
}

// ===== Countdown Timer =====
function updateCountdown() {
  const now = new Date().getTime()
  const distance = EVENT_DATE.getTime() - now

  if (distance < 0) {
    document.getElementById('cdDays').textContent = '0'
    document.getElementById('cdHours').textContent = '0'
    document.getElementById('cdMins').textContent = '0'
    document.getElementById('cdSecs').textContent = '0'
    return
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const secs = Math.floor((distance % (1000 * 60)) / 1000)

  document.getElementById('cdDays').textContent = days
  document.getElementById('cdHours').textContent = hours
  document.getElementById('cdMins').textContent = mins
  document.getElementById('cdSecs').textContent = secs
}

updateCountdown()
setInterval(updateCountdown, 1000)
