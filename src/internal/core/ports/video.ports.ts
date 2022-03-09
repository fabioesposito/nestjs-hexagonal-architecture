import { Video } from "../domain/video.domain";

export interface IVideoRepository {
    save(v: Video) : boolean;
    get(id: number): Video;
}

export interface IVideoService {
    play(id: number): Video;
}