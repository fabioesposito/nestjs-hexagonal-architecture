import { Controller, Get, Header, HttpCode, Inject, Param } from '@nestjs/common';
import { Video } from '../core/domain/video.domain';
import { IVideoService } from '../core/ports/video.ports';

@Controller()
export class VideoController {
  constructor(@Inject('IVideoService') private readonly videoService: IVideoService) {}

  @Get('/videos/:id')
  @HttpCode(200)
  getVideo(@Param() params): Video {
    return this.videoService.play(params.id);
  }
}
