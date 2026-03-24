/**
 * One Tees Radio - Podcast / Replay Data & Rendering
 */

const PODCASTS = [
    {
        id: 'p1',
        title: 'North East Drive: The Summer Mix',
        description: 'DJ KX brings the heat with 2 hours of Amapiano and Afrobeats.',
        thumbnail: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=600',
        audio_url: '#', // Placeholder
        duration: '1h 58m',
        category: 'Music Mix'
    },
    {
        id: 'p2',
        title: 'Youth Culture Talk: Digital Future',
        description: 'Discussing the impact of AI on creative industries in Teesside.',
        thumbnail: 'https://images.unsplash.com/photo-1520156555815-af92c3a50993?auto=format&fit=crop&q=80&w=600',
        audio_url: '#', // Placeholder
        duration: '45m',
        category: 'Talk Radio'
    },
    {
        id: 'p3',
        title: 'Creator Interviews: Jordan J',
        description: 'Rising star Jordan J talks about his debut single and North East roots.',
        thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=600',
        audio_url: '#', // Placeholder
        duration: '32m',
        category: 'Interviews'
    }
];

function renderPodcasts() {
    const container = document.getElementById('podcasts-grid');
    if (!container) return;

    container.innerHTML = PODCASTS.map(pod => `
        <div class="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-1">
            <div class="relative aspect-video overflow-hidden">
                <img src="${pod.thumbnail}" alt="${pod.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span class="bg-primary/90 backdrop-blur-md text-[10px] font-black px-3 py-1 rounded-full text-white uppercase tracking-widest">${pod.category}</span>
                    <span class="text-[10px] font-bold text-white/70">${pod.duration}</span>
                </div>
                <!-- Play Button Overlay -->
                <button class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                    <div class="size-16 bg-white text-primary rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
                        <span class="material-symbols-outlined text-4xl fill-current">play_arrow</span>
                    </div>
                </button>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-black mb-2 group-hover:text-primary transition-colors leading-tight uppercase tracking-tight">${pod.title}</h3>
                <p class="text-slate-400 text-sm font-medium line-clamp-2">${pod.description}</p>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderPodcasts);
