import { Injectable } from "@nestjs/common";
import { Video } from "../core/domain/video.domain";
import { IVideoRepository } from "../core/ports/video.ports";

@Injectable()
export class InMemoryDB {
    
    get(id: number): Video {
        const v: Video = {
            id: 1,
            title: "title",
            url: "url",
            duration: 55,
        }

        return v;
    }
    
    save(v: Video): boolean {
        return true;
    }


}