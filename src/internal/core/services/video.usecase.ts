import { Injectable, Logger } from '@nestjs/common'; 
import { Video } from '../domain/video.domain';
import { IVideoService } from '../ports/video.ports';
import { VideoRepository } from './video.repository';

@Injectable()
export class VideoService implements IVideoService {
    private readonly logger = new Logger(VideoService.name);

    constructor(private videoRepository: VideoRepository) {}

    play(id: number): Video {
        this.logger.log(`method=play,id=${id}`)
        return this.videoRepository.get(id);
    }
}