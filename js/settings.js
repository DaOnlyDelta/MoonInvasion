(function() {
    const settingsBtn = document.getElementById('settingsBtn');
    const settings = document.getElementById('settings');
    
    settingsBtn.addEventListener('click', () => {
        settings.classList.add('open');
    });

    const creditsBtn = document.getElementById('setBarCredits');
    const audioBtn = document.getElementById('setBarAudio');
    const credits = document.getElementById('setCredits');
    const audio = document.getElementById('setAudio');

    creditsBtn.addEventListener('click', () => {
        credits.classList.add('active');
        audio.classList.remove('active');
    });

    audioBtn.addEventListener('click', () => {
        audio.classList.add('active');
        credits.classList.remove('active');
    });

    let musicVolume = 0.5;
    let sfxVolume = 0.5;
    const musicL = document.getElementById('setMusicAdjL');
    const musicR = document.getElementById('setMusicAdjR');
    const sfxL = document.getElementById('setSFXAdjL');
    const sfxR = document.getElementById('setSFXAdjR');
    const musicValue = document.getElementById('setMusicValue');
    const sfxValue = document.getElementById('setSFXValue');

    musicL.addEventListener('click', () => {
        musicVolume = Math.max(0, musicVolume - 0.1);
        musicValue.textContent = `${Math.round(musicVolume * 100)}%`;
        updateMusicVolume();
    });

    musicR.addEventListener('click', () => {
        musicVolume = Math.min(1, musicVolume + 0.1);
        musicValue.textContent = `${Math.round(musicVolume * 100)}%`;
        updateMusicVolume();
    });

    sfxL.addEventListener('click', () => {
        sfxVolume = Math.max(0, sfxVolume - 0.1);
        sfxValue.textContent = `${Math.round(sfxVolume * 100)}%`;
        updateSFXVolume();
    });

    sfxR.addEventListener('click', () => {
        sfxVolume = Math.min(1, sfxVolume + 0.1);
        sfxValue.textContent = `${Math.round(sfxVolume * 100)}%`;
        updateSFXVolume();
    });

    function updateMusicVolume() {
        // This function should be called whenever musicVolume changes to update the actual music volume in the game
    }

    function updateSFXVolume() {
        // This function should be called whenever sfxVolume changes to update the actual SFX volume in the game
    }

    


})();
