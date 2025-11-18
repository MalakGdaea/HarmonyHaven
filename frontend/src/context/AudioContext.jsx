import { createContext, useContext, useEffect, useRef, useState } from "react";

const AudioContext = createContext();
export const useAudio = () => useContext(AudioContext);

export function AudioProvider({ children }) {
    const defaultInstrument = "pianos";
    const [isPlaying, setIsPlaying] = useState(false);
    const [current, setCurrent] = useState(defaultInstrument);

    const tracks = useRef({
        pianos: new Audio("/audio/piano.mp3"),
        guitars: new Audio("/audio/guitar.mp3"),
        trumpets: new Audio("/audio/trumpet.mp3"),
        saxophones: new Audio("/audio/saxophone.mp3"),
        keyboards: new Audio("/audio/keyboard.mp3"),
        drums: new Audio("/audio/drums.mp3"),
    });


    useEffect(() => {
        Object.values(tracks.current).forEach(a => {
            a.preload = "auto";
            a.loop = true;
            a.volume = 0;
            a.muted = true;
        });
    }, []);

    const startAudio = async () => {
        try {
            Object.values(tracks.current).forEach(a => {
                a.muted = true; // Use muted instead of volume for mobile
                a.volume = 0;
            });
            // Play all tracks to keep them synchronized
            await Promise.all(
                Object.values(tracks.current).map(a => a.play().catch(() => { }))
            );
            const currentTrack = tracks.current[current];
            currentTrack.muted = false;
            currentTrack.volume = 1;
            setIsPlaying(true);
        } catch (err) {
            console.error("Audio unlock failed: ", err);
        }
    };

    const stopAudio = () => {
        Object.values(tracks.current).forEach(a => {
            a.pause();
            a.currentTime = 0;
            a.volume = 0;
            a.muted = true;
        });
        setIsPlaying(false);
    };

    const toggleAudio = () => {
        if (isPlaying) stopAudio();
        else startAudio();
    };

    const switchInstrument = (instrument) => {
        if (!tracks.current[instrument]) return;

        const fadeOut = tracks.current[current];
        const fadeIn = tracks.current[instrument];
        // Unmute the new track
        fadeIn.muted = false;
        setCurrent(instrument);

        let duration = 400;
        let steps = 20;
        let stepTime = duration / steps;

        let interval = setInterval(() => {
            fadeOut.volume = Math.max(0, fadeOut.volume - (1 / steps));
            fadeIn.volume = Math.min(1, fadeIn.volume + (1 / steps));
            if (fadeIn.volume === 1) {
                clearInterval(interval);
                // Mute the old track (keeps it playing but silent)
                fadeOut.muted = true;
            }
        }, stepTime);
    };

    return (
        <AudioContext.Provider value={{ isPlaying, startAudio, stopAudio, toggleAudio, switchInstrument }}>
            {children}
        </AudioContext.Provider>
    );
}
