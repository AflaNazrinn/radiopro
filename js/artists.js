/**
 * One Tees Radio - Artist Spotlight Data
 */

const ARTISTS = [
    {
        name: 'Jay Tees',
        location: 'Middlesbrough',
        highlight: 'New single premiered tonight',
        thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800', // Black artist lifestyle
        mediaUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
        type: 'Watch Freestyle'
    },
    {
        name: 'LUNA',
        location: 'Newcastle',
        highlight: 'Live from the Hub Studio',
        thumbnail: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800', // Music artist
        mediaUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
        type: 'Watch Session'
    },
    {
        name: 'K-FLOW',
        location: 'Stockton',
        highlight: 'Exclusive Interview & Drop',
        thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800', // Artist recording
        mediaUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
        type: 'Watch Interview'
    }
];

function renderArtists() {
    const container = document.getElementById('artists-grid');
    if (!container) return;

    container.innerHTML = ARTISTS.map(artist => `
        <div class="bg-card-dark border border-white/5 overflow-hidden group">
            <div class="relative h-64 overflow-hidden">
                <img src="${artist.thumbnail}" alt="${artist.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                <div class="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span class="material-symbols-outlined text-6xl text-white">play_circle</span>
                </div>
            </div>
            <div class="p-6">
                <div class="mb-4">
                    <p class="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">${artist.location}</p>
                    <h3 class="text-2xl font-black uppercase text-white">${artist.name}</h3>
                </div>
                <p class="text-slate-400 text-sm mb-6">${artist.highlight}</p>
                <div class="flex items-center justify-between">
                    <a href="${artist.mediaUrl}" target="_blank" class="bg-primary text-white text-[10px] font-black px-6 py-2 rounded-sm hover:bg-white hover:text-black transition-all uppercase tracking-tighter">
                        ${artist.type}
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderArtists);
