import { LoadingHandler, MJConfig, MJConfigParam } from "./interfaces";
import { MidjourneyApi } from "./midjourne.api";
import { MidjourneyMessage } from "./midjourney.message";
export declare class Midjourney extends MidjourneyMessage {
    config: MJConfig;
    private wsClient?;
    MJApi: MidjourneyApi;
    constructor(defaults: MJConfigParam);
    Connect(): Promise<Midjourney>;
    init(): Promise<Midjourney>;
    Imagine(prompt: string, loading?: LoadingHandler): Promise<import("./interfaces").MJMessage | null>;
    Settings(): Promise<import("./interfaces").MJSettings | null>;
    Reset(): Promise<void>;
    Info(): Promise<import("./interfaces").MJInfo | null>;
    Fast(): Promise<null>;
    Relax(): Promise<null>;
    Shorten(prompt: string): Promise<{
        options: import("./interfaces").MJOptions[];
        prompts: string[];
        description: string;
    } | null>;
    Variation({ index, msgId, hash, content, flags, loading, }: {
        index: 1 | 2 | 3 | 4;
        msgId: string;
        hash: string;
        content?: string;
        flags: number;
        loading?: LoadingHandler;
    }): Promise<import("./interfaces").MJMessage | null>;
    Upscale({ index, msgId, hash, content, flags, loading, }: {
        index: 1 | 2 | 3 | 4;
        msgId: string;
        hash: string;
        content?: string;
        flags: number;
        loading?: LoadingHandler;
    }): Promise<import("./interfaces").MJMessage | null>;
    Custom({ msgId, customId, content, flags, loading, }: {
        msgId: string;
        customId: string;
        content?: string;
        flags: number;
        loading?: LoadingHandler;
    }): Promise<import("./interfaces").MJMessage | null>;
    ZoomOut({ level, msgId, hash, content, flags, loading, }: {
        level: "high" | "low" | "2x" | "1.5x";
        msgId: string;
        hash: string;
        content?: string;
        flags: number;
        loading?: LoadingHandler;
    }): Promise<import("./interfaces").MJMessage | null>;
    Reroll({ msgId, hash, content, flags, loading, }: {
        msgId: string;
        hash: string;
        content?: string;
        flags: number;
        loading?: LoadingHandler;
    }): Promise<import("./interfaces").MJMessage | null>;
    Close(): void;
}
