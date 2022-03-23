import { Inject, Injectable, Logger } from '@nestjs/common';
import { Video } from '../domain/video.domain';
import { IVideoRepository, IVideoService } from '../ports/video.ports';

@Injectable()
export class VideoService implements IVideoService {

  private readonly logger = new Logger(VideoService.name);

  constructor(@Inject("IVideoRepository") private videoRepository: IVideoRepository) {}

  play(id: number): Video {
    this.logger.log(`method=play,id=${id}`);
    return this.videoRepository.get(id);
  }
}
