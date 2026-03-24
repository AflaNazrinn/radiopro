/**
 * One Tees Radio - Social Feed Data
 */

const SOCIAL_FEED = [
    {
        platform: 'instagram',
        type: 'Freestyle Clip',
        thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=600',
        caption: 'Jay Tees dropping heat in the studio. New EP coming soon! #NorthEastCulture',
        link: 'https://instagram.com/oneteesradio'
    },
    {
        platform: 'tiktok',
        type: 'Street Interview',
        thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=600',
        caption: 'Asking Middlesbrough what the song of the summer is... things got heated! 🎤🔥',
        link: 'https://tiktok.com/@oneteesradio'
    },
    {
        platform: 'youtube',
        type: 'Studio Sessions',
        thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=600',
        caption: 'Behind the scenes at The Hub. How we produced "Visions of Teesside".',
        link: 'https://youtube.com/oneteesradio'
    },
    {
        platform: 'twitter',
        type: 'Live Update',
        thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600',
        caption: 'Lineup for Saturday\'s Block Party just dropped. 7 PM. Warehouse District.',
        link: 'https://twitter.com/oneteesradio'
    }
];

function renderSocialFeed() {
    const container = document.getElementById('social-feed-grid');
    if (!container) return;

    container.innerHTML = SOCIAL_FEED.map(post => `
        <a href="${post.link}" target="_blank" class="group relative aspect-square overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500">
            <img src="${post.thumbnail}" alt="${post.caption}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <!-- Platform Icon -->
            <div class="absolute top-4 left-4 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 group-hover:bg-primary transition-colors">
                <img src="icons/${post.platform}.svg" alt="${post.platform}" class="size-5 filter-white" onerror="this.src='https://www.google.com/s2/favicons?domain=${post.platform}.com&sz=64'">
            </div>

            <!-- Content Info -->
            <div class="absolute bottom-4 left-4 right-4">
                <span class="text-[10px] font-black uppercase tracking-widest text-primary mb-1 block">${post.type}</span>
                <p class="text-xs font-bold leading-tight line-clamp-2 text-white/90 group-hover:text-white transition-colors">${post.caption}</p>
            </div>

            <!-- Play Overlay for Video Types -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span class="material-symbols-outlined text-5xl text-white drop-shadow-2xl">play_circle</span>
            </div>
        </a>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderSocialFeed);
