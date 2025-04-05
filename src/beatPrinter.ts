import { println } from "./api/passthrough"
import { DAWData } from "./common"

let beatInterval: NodeJS.Timeout | null = null;
let beatCount = 0;

export function startBeatPrinting(dawData: DAWData) {
    // Clear any existing interval
    if (beatInterval) {
        clearInterval(beatInterval);
    }

    // Reset beat counter
    beatCount = 0;

    // Calculate interval based on tempo (60 seconds / BPM)
    const interval = (60 / dawData.tempo)

    // Set up interval to print on every beat
    beatInterval = setInterval(() => {
        // Only print on the first beat of every 4 beats
        if (beatCount % 4 === 0) {
            println(dawData, "1");
        }
        beatCount++;
    }, interval);
}

export function stopBeatPrinting() {
    if (beatInterval) {
        clearInterval(beatInterval);
        beatInterval = null;
    }
} 