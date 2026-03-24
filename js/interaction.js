/**
 * One Tees Radio - Interaction Features Logic
 */

function setupInteractions() {
    // Shoutout Form Handling
    const shoutoutForm = document.getElementById('shoutout-form');
    if (shoutoutForm) {
        shoutoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = shoutoutForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<span class="material-symbols-outlined animate-spin">sync</span> SENDING...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '<span class="material-symbols-outlined">check_circle</span> SENT!';
                btn.classList.replace('bg-primary', 'bg-green-600');
                shoutoutForm.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.replace('bg-green-600', 'bg-primary');
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // Song Request Handling
    const requestForm = document.getElementById('request-form');
    if (requestForm) {
        requestForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = requestForm.querySelector('button');
            const originalText = btn.innerHTML;

            btn.innerHTML = '<span class="material-symbols-outlined animate-spin">sync</span> REQUESTING...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '<span class="material-symbols-outlined">playlist_add_check</span> REQUESTED!';
                btn.classList.replace('bg-accent-lime', 'bg-green-600');
                requestForm.reset();

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.replace('bg-green-600', 'bg-accent-lime');
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // Voice Note Handling (Web Audio API / MediaRecorder)
    const recordBtn = document.getElementById('record-btn');
    const statusText = document.getElementById('record-status');
    let mediaRecorder;
    let audioChunks = [];

    if (recordBtn) {
        recordBtn.addEventListener('click', async () => {
            if (!mediaRecorder || mediaRecorder.state === 'inactive') {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                    mediaRecorder = new MediaRecorder(stream);
                    audioChunks = [];

                    mediaRecorder.ondataavailable = (event) => {
                        audioChunks.push(event.data);
                    };

                    mediaRecorder.onstop = () => {
                        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                        // Simulate upload
                        statusText.innerHTML = '<span class="text-primary">Sending voice note...</span>';
                        setTimeout(() => {
                            statusText.innerHTML = '<span class="text-green-500">Voice Note Caught!</span>';
                            setTimeout(() => statusText.innerHTML = 'Press to Record', 3000);
                        }, 2000);
                    };

                    mediaRecorder.start();
                    recordBtn.classList.replace('bg-red-500', 'bg-red-700');
                    recordBtn.classList.add('animate-pulse');
                    statusText.innerText = 'Recording... (Press to stop)';
                } catch (err) {
                    console.error('Error accessing microphone:', err);
                    statusText.innerText = 'Mic access denied';
                }
            } else {
                mediaRecorder.stop();
                recordBtn.classList.replace('bg-red-700', 'bg-red-500');
                recordBtn.classList.remove('animate-pulse');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', setupInteractions);
