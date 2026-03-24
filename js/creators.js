/**
 * One Tees Radio - Creator Data
 */

const CREATORS = [
    {
        name: 'KX',
        role: 'Rap, Grime & Drill Specialist',
        showTime: 'Fridays 7PM',
        image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=600', // Urban portrait
        instagram: 'https://instagram.com/kx_official',
        tiktok: 'https://tiktok.com/@kx_beats',
        bio: 'The definition of North East Drill. Bringing the hardest tracks to your ears every week.'
    },
    {
        name: 'SARA VIBE',
        role: 'Street Culture Reporter',
        showTime: 'Mondays 6PM',
        image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=600', // Black female creator
        instagram: 'https://instagram.com/saravibe',
        tiktok: 'https://tiktok.com/@saravibe_clips',
        bio: 'Reporting from the heart of the community. From fashion to social change.'
    },
    {
        name: 'DJ NOISE',
        role: 'Youth Talk Host',
        showTime: 'Wednesdays 8PM',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600', // Black male DJ
        instagram: 'https://instagram.com/djnoise',
        tiktok: 'https://tiktok.com/@djnoise_talks',
        bio: 'The voice of the youth. We discuss what really matters in the North East.'
    },
    {
        name: 'MIA TALKS',
        role: 'Interview Presenter',
        showTime: 'Sundays 4PM',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600', // Black female presenter
        instagram: 'https://instagram.com/miatalks',
        tiktok: 'https://tiktok.com/@miatalks_live',
        bio: 'Deep dives with the North East\'s most influential figures.'
    }
];

function renderCreators() {
    const container = document.getElementById('creators-grid');
    if (!container) return;

    container.innerHTML = CREATORS.map(creator => `
        <div class="group relative bg-background-dark rounded-3xl overflow-hidden border border-white/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_rgba(140,43,238,0.3)] hover:border-primary/30">
            <!-- Image Area -->
            <div class="aspect-square overflow-hidden relative">
                <img src="${creator.image}" alt="${creator.name}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent opacity-60"></div>
                
                <!-- Social Overlay -->
                <div class="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="${creator.instagram}" target="_blank" class="size-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors">
                        <img src="https://cdn.simpleicons.org/instagram/white" class="size-5" alt="Instagram">
                    </a>
                    <a href="${creator.tiktok}" target="_blank" class="size-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors">
                        <img src="https://cdn.simpleicons.org/tiktok/white" class="size-5" alt="TikTok">
                    </a>
                </div>
            </div>

            <!-- Content Area -->
            <div class="p-8 space-y-4">
                <div class="space-y-1">
                    <h3 class="text-3xl font-black tracking-tight text-white">${creator.name}</h3>
                    <p class="text-primary font-bold text-sm uppercase tracking-wider">${creator.role}</p>
                </div>
                
                <p class="text-slate-400 text-sm font-medium line-clamp-1 group-hover:line-clamp-none transition-all">${creator.bio}</p>
                
                <div class="flex items-center justify-between pt-4 border-t border-white/10">
                    <div class="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest">
                        <span class="material-symbols-outlined text-sm">schedule</span>
                        ${creator.showTime}
                    </div>
                    <button class="text-xs font-black bg-white/5 hover:bg-primary text-white px-4 py-2 rounded-full transition-colors uppercase tracking-widest">
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderCreators);
