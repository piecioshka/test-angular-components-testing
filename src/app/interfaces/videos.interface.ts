interface Video {
  id: string;
  title: string;
  description: string;
  thumbUrl: string;
  videoUrl: string;
}

export type VideoList = Array<Video>;
