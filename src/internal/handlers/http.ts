import { Controller, Get, Header, HttpCode, Param } from '@nestjs/common';
import { Video } from '../core/domain/video.domain';
import { VideoService } from '../core/services/video.usecase';

@Controller()
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get('/videos/:id')
  @HttpCode(200)
  getVideo(@Param() params): Video {
    return this.videoService.play(params.id);
  }
}
