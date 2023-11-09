document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const musicTitle = document.getElementById("musicTitle");
    const musicArtist = document.getElementById("musicArtist");
    const musicimg = document.getElementById('musicimg');
    const playButton = document.getElementById("playButton");
    const nextButton = document.getElementById("nextButton");
    const prevButton = document.getElementById("prevButton");
    const musicvolume = document.getElementById('musicvolume'); // Fix the typo here
    let curr_track = new Audio(); // Create a new Audio object

    // Sample playlist
    const musicTracks = [
        {
            title: "Best to Relax",
            artist: "Lofi_Music",
            source: "../musics/music1.mp3",
            albumpic: "../img/album/music1.png"
        },
        {
            title: "Morning!",
            artist: "Lofi_Music",
            source: "../musics/music2.mp3",
            albumpic: "../img/album/music2.png"
        },
        {
            title: "Good Night!",
            artist: "Lofi_Music",
            source: "../musics/music3.mp3",
            albumpic: "../img/album/music3.png"
        },
        // Add more tracks as needed
    ];

    let currentTrackIndex = 0;
    let isPlaying = false;
    function loadTrack(currentTrackIndex) {
        curr_track.src = musicTracks[currentTrackIndex].source;
        curr_track.load();

        musicimg.style.backgroundImage = "url(" + musicTracks[currentTrackIndex].albumpic + ")";
        musicTitle.textContent = musicTracks[currentTrackIndex].title;
        musicArtist.textContent = musicTracks[currentTrackIndex].artist;

        curr_track.addEventListener('ended', nextTrack);
    }

    function playpauseTrack() {
        isPlaying ? pauseTrack() : playTrack();
    }

    function playTrack() {
        curr_track.play();
        isPlaying = true;
        musicimg.classList.add('rotate');
        playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }

    function pauseTrack() {
        curr_track.pause();
        isPlaying = false;
        musicimg.classList.remove('rotate');
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    }

    function nextTrack() {
        if (currentTrackIndex < musicTracks.length - 1) {
            currentTrackIndex += 1;
        } else {
            currentTrackIndex = 0;
        }
        loadTrack(currentTrackIndex);
        playTrack();
    }

    function prevTrack() {
        if (currentTrackIndex > 0) {
            currentTrackIndex -= 1;
        } else {
            currentTrackIndex = musicTracks.length - 1;
        }
        loadTrack(currentTrackIndex);
        playTrack();
    }

    // Add event listeners
    playButton.addEventListener("click", playpauseTrack);
    nextButton.addEventListener("click", nextTrack);
    prevButton.addEventListener("click", prevTrack);

    // Simulate playing the first track
    loadTrack(currentTrackIndex);

    musicvolume.addEventListener("input", () => {
        const volume = musicvolume.value / 100;
        curr_track.volume = volume;
    });
});
