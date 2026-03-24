/**
 * One Tees Radio - Event Data
 */

const EVENTS = [
    {
        name: 'Youth Culture Night',
        location: 'Middlesbrough',
        date: '23 May',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800', // Event crowd
        description: 'A night of music, art, and expression featuring the best local talent.',
        link: '#'
    },
    {
        name: 'North East Beat Lab',
        location: 'Newcastle',
        date: '12 June',
        image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800', // Scene with artists
        description: 'Producers and creators come together to share skills and collaborate on new sounds.',
        link: '#'
    },
    {
        name: 'Community Mic Sessions',
        location: 'Stockton',
        date: '05 July',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800', // Music event
        description: 'Open mic for everyone to share their voice, story, and talent.',
        link: '#'
    }
];

function renderEvents() {
    const container = document.getElementById('events-grid');
    if (!container) return;

    container.innerHTML = EVENTS.map(event => `
        <div class="group relative bg-background-dark rounded-3xl overflow-hidden border border-white/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_rgba(140,43,238,0.3)]">
            <!-- Image Area -->
            <div class="aspect-[16/10] overflow-hidden relative">
                <img src="${event.image}" alt="${event.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent opacity-60"></div>
                
                <!-- Date Badge -->
                <div class="absolute top-6 left-6 bg-primary text-white px-4 py-2 rounded-xl font-black text-sm tracking-tighter uppercase">
                    ${event.date}
                </div>
            </div>

            <!-- Content Area -->
            <div class="p-8 space-y-4">
                <div class="space-y-1">
                    <p class="text-accent-lime font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                        <span class="material-symbols-outlined text-sm">location_on</span>
                        ${event.location}
                    </p>
                    <h3 class="text-3xl font-black tracking-tight text-white leading-tight uppercase">${event.name}</h3>
                </div>
                
                <p class="text-slate-400 text-sm font-medium">${event.description}</p>
                
                <div class="pt-4">
                    <a href="${event.link}" class="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-xs border-b-2 border-primary pb-1 group-hover:border-accent-lime transition-all">
                        LEARN MORE
                        <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderEvents);
