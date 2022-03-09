import { Injectable } from "@nestjs/common";
import { Video } from "../domain/video.domain";
import { IVideoRepository } from "../ports/video.ports";
import { InMemoryDB } from "../../repositories/inmemory.db";

@Injectable()
export class VideoRepository implements IVideoRepository {

    constructor(private inMemoryVideoDB: InMemoryDB) {}

    save(v: Video): boolean {
        return this.inMemoryVideoDB.save(v);   
    }

    get(id: number): Video {
        return this.inMemoryVideoDB.get(id);
    }
}
