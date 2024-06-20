
import { Howl, Howler } from 'howler';
import { _gameStore } from './stores/gameStore';
import { get } from 'svelte/store';




export const helpers = {

    loadImage: async function (elementId, filename) {



        const position = elementId.split("-")[0]

        const gs = get(_gameStore)

        console.log(gs);

        // first check to see if an image exists at that location
        const element = document.getElementById(elementId)
        const currentOpacity = parseFloat(element.style.opacity) || 1


        if (currentOpacity > 0) {
            console.log("fading image out");
            await this.fadeToOpacity(elementId, 0)
        }


        const filepath = `/game-images/${gs.currentScene.title}/${filename}.jpg`
        console.log(filepath);
        _gameStore.updateProperty(`images.${position}.filepath`, filepath)
        _gameStore.updateProperty(`images.${position}.id`, elementId)


    },
    fadeToOpacity: function (elementId, targetOpacity, duration = 1) {
        const element = document.getElementById(elementId)
        return new Promise((resolve, reject) => {
            if (!(element instanceof HTMLElement)) {
                reject(new Error('Invalid element provided.'));
                return;
            }

            if (typeof targetOpacity !== 'number' || targetOpacity < 0 || targetOpacity > 1) {
                reject(new Error('Invalid target opacity value provided.'));
                return;
            }

            const startOpacity = parseFloat(getComputedStyle(element).opacity);
            const startTime = performance.now();

            function fadeStep(timestamp) {
                const progress = (timestamp - startTime) / (duration * 1000);
                const currentOpacity = startOpacity + (targetOpacity - startOpacity) * Math.min(progress, 1);
                element.style.opacity = currentOpacity;

                if (progress < 1) {
                    requestAnimationFrame(fadeStep);
                } else {
                    element.style.opacity = targetOpacity;  // Ensure it ends exactly at target opacity
                    resolve();
                }
            }

            requestAnimationFrame(fadeStep);
        });
    },

    wait: async function (delay) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, delay * 1000);
        });
    },
    music: {
        currentMusic: null, // Store reference to the current Howl instance

        volumeMap: {
            whisper: 0.05,
            veryQuiet: 0.2,
            quiet: 0.5,
            normal: 0.7,
            loud: 1
        },

        play: function (title, volumeLevel, fadeInTime = 3000) {
            let volume = this.volumeMap[volumeLevel] || this.volumeMap.normal; // Default to normal if volumeLevel is not found


            // Create a new Howl instance and store it in currentMusic
            this.currentMusic = new Howl({
                src: [`/music/${title}.mp3`],
                autoplay: false,
                loop: true,
                volume: 0 // Set initial volume to 0 for fade-in effect
            });
            this.currentMusic.play();
            this.currentMusic.fade(0, volume, fadeInTime);

        },

        stop: function () {
            // Stop the currently playing music if it exists
            if (this.currentMusic) {
                this.currentMusic.stop();
                this.currentMusic = null; // Clear the reference
            }
        },

        fade: function (volumeLevel, fadeInTime = 3000) {

            let volume = this.volumeMap[volumeLevel] || this.volumeMap.normal; // Default to normal if volumeLevel is not found

            // Fade the currently playing music to the new volume if it exists
            if (this.currentMusic) {
                this.currentMusic.fade(this.currentMusic.volume(), volume, fadeInTime);
            }
        }
    },
    clearStory: function () {
        const divToClear = document.getElementById('story');
        divToClear.innerHTML = '';
    }

}

window.helpers = helpers