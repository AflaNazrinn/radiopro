/**
 * One Tees Radio - Live Player Logic
 */

const CONFIG = {
    streamUrl: 'https://stream.oneteesradio.com/live', // Placeholder
    metadataUrl: 'https://api.oneteesradio.com/now-playing', // Placeholder
    pollInterval: 30000, // 30 seconds
    fallbackArtwork: 'north-east-drive.png',
};

class RadioPlayer {
    constructor() {
        this.audio = new Audio(CONFIG.streamUrl);
        this.isPlaying = false;
        this.metadata = {
            track: 'Loading...',
            creator: 'Please wait',
            artwork: CONFIG.fallbackArtwork,
            show: 'NORTH EAST DRIVE',
            nextShow: 'LIVE FROM TEESSIDE @ 18:00',
            listeners: 0
        };

        this.initElements();
        this.initEventListeners();
        this.startMetadataPolling();
        this.initStickyPlayerLogic();
    }

    initElements() {
        // Hero Player
        this.mainPlayBtn = document.getElementById('main-play-btn');
        this.playIcon = document.getElementById('play-icon');
        this.pauseIcon = document.getElementById('pause-icon');
        this.streamStatus = document.getElementById('stream-status');
        
        // Info Panel
        this.currentTrack = document.getElementById('current-track');
        this.currentCreator = document.getElementById('current-creator');
        this.currentArtwork = document.getElementById('current-artwork');
        this.currentShow = document.getElementById('current-show');
        this.nextShowInfo = document.getElementById('next-show-info');
        this.listenerCount = document.getElementById('listener-count');

        // Sticky Player
        this.stickyPlayer = document.getElementById('sticky-player');
        this.stickyPlayBtn = document.getElementById('sticky-play-btn');
        this.stickyPlayIcon = document.getElementById('sticky-play-icon');
        this.stickyPauseIcon = document.getElementById('sticky-pause-icon');
        this.stickyTrack = document.getElementById('sticky-track');
        this.stickyCreator = document.getElementById('sticky-creator');
        this.stickyArtwork = document.getElementById('sticky-artwork');
    }

    initEventListeners() {
        const togglePlay = () => this.togglePlay();
        
        if (this.mainPlayBtn) this.mainPlayBtn.addEventListener('click', togglePlay);
        if (this.stickyPlayBtn) this.stickyPlayBtn.addEventListener('click', togglePlay);

        this.audio.addEventListener('playing', () => {
            this.setLoadingState(false);
            if (this.streamStatus) this.streamStatus.classList.remove('opacity-0');
        });

        this.audio.addEventListener('waiting', () => this.setLoadingState(true));
        
        this.audio.addEventListener('error', (e) => {
            console.error('Playback error:', e);
            this.handleError();
        });
    }

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    async play() {
        try {
            // Browsers often block autoplay, so we need a user gesture
            // Resetting source on play helps with low latency for live streams
            this.audio.src = CONFIG.streamUrl; 
            await this.audio.play();
            this.isPlaying = true;
            this.updateUI();
        } catch (error) {
            console.error('Play failed:', error);
            this.handleError();
        }
    }

    pause() {
        this.audio.pause();
        // For live streams, we stop the download to save bandwidth
        this.audio.src = ''; 
        this.audio.load();
        this.isPlaying = false;
        this.updateUI();
    }

    setLoadingState(isLoading) {
        if (isLoading) {
            if (this.playIcon) this.playIcon.innerText = 'hourglass_empty';
            if (this.stickyPlayIcon) this.stickyPlayIcon.innerText = 'hourglass_empty';
        } else {
            if (this.playIcon) this.playIcon.innerText = 'play_arrow';
            if (this.stickyPlayIcon) this.stickyPlayIcon.innerText = 'play_arrow';
        }
    }

    updateUI() {
        const isPlaying = this.isPlaying;

        // Toggle Icons
        if (this.playIcon) this.playIcon.classList.toggle('hidden', isPlaying);
        if (this.pauseIcon) this.pauseIcon.classList.toggle('hidden', !isPlaying);
        
        if (this.stickyPlayIcon) this.stickyPlayIcon.classList.toggle('hidden', isPlaying);
        if (this.stickyPauseIcon) this.stickyPauseIcon.classList.toggle('hidden', !isPlaying);

        // Update Metadata
        if (this.currentTrack) this.currentTrack.innerText = this.metadata.track;
        if (this.currentCreator) this.currentCreator.innerText = this.metadata.creator;
        if (this.currentArtwork) this.currentArtwork.src = this.metadata.artwork;
        if (this.currentShow) this.currentShow.innerText = this.metadata.show;
        if (this.nextShowInfo) this.nextShowInfo.innerText = this.metadata.nextShow;
        if (this.listenerCount) this.listenerCount.innerText = `${this.metadata.listeners.toLocaleString()} Listening`;

        // Update Sticky Metadata
        if (this.stickyTrack) this.stickyTrack.innerText = this.metadata.track;
        if (this.stickyCreator) this.stickyCreator.innerText = this.metadata.creator;
        if (this.stickyArtwork) this.stickyArtwork.src = this.metadata.artwork;
    }

    async fetchMetadata() {
        try {
            // Simulate API call for now
            // In a real app: const response = await fetch(CONFIG.metadataUrl);
            // this.metadata = await response.json();
            
            // Mock Data
            const mocks = [
                { track: 'NORTH EAST VIBES', creator: 'DJ KX', listeners: 1428 },
                { track: 'TEESSIDE ANTHEMS', creator: 'MC FLOW', listeners: 1562 },
                { track: 'SUB ZERO MIX', creator: 'LEX BEATS', listeners: 1240 }
            ];
            const randomMock = mocks[Math.floor(Math.random() * mocks.length)];
            
            this.metadata = {
                ...this.metadata,
                ...randomMock
            };
            
            this.updateUI();
        } catch (error) {
            console.warn('Metadata fetch failed, using fallback:', error);
        }
    }

    startMetadataPolling() {
        this.fetchMetadata();
        setInterval(() => this.fetchMetadata(), CONFIG.pollInterval);
    }

    initStickyPlayerLogic() {
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            // Show sticky player after scrolling 20% or past hero
            if (window.scrollY > 400) {
                this.stickyPlayer.classList.remove('translate-y-full');
            } else {
                this.stickyPlayer.classList.add('translate-y-full');
            }
        });
    }

    handleError() {
        this.isPlaying = false;
        this.updateUI();
        alert('The live stream is currently unavailable. Please try again later.');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.radioPlayer = new RadioPlayer();
});
