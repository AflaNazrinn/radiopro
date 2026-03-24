/**
 * One Tees Radio - Partners & Supporters Data & Rendering
 */

const PARTNERS = [
    {
        name: 'Teesside University',
        category: 'Education',
        logo_url: 'https://icons.duckduckgo.com/ip3/tees.ac.uk.ico',
        website: 'https://www.tees.ac.uk'
    },
    {
        name: 'Middlesbrough Council',
        category: 'Community',
        logo_url: 'https://icons.duckduckgo.com/ip3/middlesbrough.gov.uk.ico',
        website: 'https://www.middlesbrough.gov.uk'
    },
    {
        name: 'The Hub Teesside',
        category: 'Community',
        logo_url: 'https://icons.duckduckgo.com/ip3/thehubteesside.org.ico',
        website: '#'
    },
    {
        name: 'Youth Focus NE',
        category: 'Community',
        logo_url: 'https://icons.duckduckgo.com/ip3/youthfocusne.org.uk.ico',
        website: 'https://youthfocusne.org.uk'
    },
    {
        name: 'Redcar & Cleveland College',
        category: 'Education',
        logo_url: 'https://icons.duckduckgo.com/ip3/cleveland.ac.uk.ico',
        website: 'https://www.cleveland.ac.uk'
    },
    {
        name: 'Nike',
        category: 'Brand',
        logo_url: 'https://icons.duckduckgo.com/ip3/nike.com.ico',
        website: '#'
    }
];

function renderPartners() {
    const container = document.getElementById('partners-grid');
    if (!container) return;

    container.innerHTML = PARTNERS.map(partner => `
        <a href="${partner.website}" target="_blank" class="group flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:scale-105 active:scale-95">
            <div class="relative size-20 md:size-24 mb-4 flex items-center justify-center bg-white rounded-2xl p-4 shadow-xl overflow-hidden">
                <img src="${partner.logo_url}" 
                     alt="${partner.name}" 
                     class="max-w-full max-h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                     onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=8c2bee&color=fff&size=128&bold=true'">
            </div>
            <span class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-primary transition-colors text-center">${partner.category}</span>
            <p class="text-xs font-bold text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">${partner.name}</p>
        </a>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderPartners);
