import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Video } from '../src/internal/core/domain/video.domain';
import { VideoService } from '../src/internal/core/services/video.usecase';

describe('Video (e2e)', () => {
  let app: INestApplication;
  let v: Video = {id: 1, title: "title", url: "url", duration: 55}
  let vs = { play: (id: number) => v };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
    .overrideProvider(VideoService)
    .useValue(vs)
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/videos/:id (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/videos/1')
      .expect(200);

      expect(response.body).toStrictEqual(v);
  });

  afterAll(async () => {
    await app.close();
  });
});
