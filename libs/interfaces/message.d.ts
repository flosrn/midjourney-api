export interface MJMessage {
    uri: string;
    proxy_url?: string;
    content: string;
    flags: number;
    id?: string;
    hash?: string;
    jobId?: string;
    progress?: string;
    options?: MJOptions[];
    attachment?: MJAttachment;
    referencedMessage?: MJMessage;
    generationType?: GenerationType;
}
export interface MJAttachment {
    height: number;
    width: number;
    size: number;
    url: string;
    proxy_url: string;
    id: string;
    filename: string;
    content_type: string;
}
export type GenerationType = "imagine" | "save" | "upscale" | "variation" | "vary" | "zoomOut" | null;
export type LoadingHandler = (uri: string, progress: string) => void;
export type OnModal = (nonce: string, id: string) => Promise<string>;
export interface WaitMjEvent {
    nonce: string;
    prompt?: string;
    id?: string;
    onmodal?: OnModal;
}
export interface MJEmit {
    error?: Error;
    message?: MJMessage;
}
export interface MJInfo {
    subscription: string;
    jobMode: string;
    visibilityMode: string;
    fastTimeRemaining: string;
    lifetimeUsage: string;
    relaxedUsage: string;
    queuedJobsFast: string;
    queuedJobsRelax: string;
    runningJobs: string;
}
export interface MJOptions {
    label: string;
    type: number;
    style: number;
    custom: string;
}
export interface MJSettings {
    content: string;
    id: string;
    flags: number;
    options: MJOptions[];
}
export interface MJDescribe {
    id: string;
    flags: number;
    uri: string;
    proxy_url?: string;
    options: MJOptions[];
    descriptions: string[];
}
export interface MJShorten {
    description: string;
    id: string;
    flags: number;
    options: MJOptions[];
    prompts: string[];
}
