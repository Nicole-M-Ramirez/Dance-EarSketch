export interface DAWData {
    tempo: number;
    length: number;
    tracks: Track[];
}

export interface Track {
    clips: Clip[];
    effects: { [key: string]: any };
}

export interface Clip {
    measure: number;
    audio: AudioBuffer;
    start: number;
    end: number;
    tempo?: number;
    sourceAudio: AudioBuffer;
} 