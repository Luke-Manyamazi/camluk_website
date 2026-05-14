import { useState } from 'react';
import { PlayCircle } from 'lucide-react';

function getYouTubeId(url) {
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
  return m ? m[1] : null;
}

function getVimeoId(url) {
  const m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return m ? m[1] : null;
}

function isDirectVideo(url) {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(url);
}

function LoadingSkeleton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-secondary animate-pulse rounded-xl">
      <PlayCircle size={48} className="text-muted-foreground/20" />
    </div>
  );
}

export default function VideoEmbed({ url }) {
  const [loaded, setLoaded] = useState(false);

  if (!url) return null;

  const youtubeId = getYouTubeId(url);
  const vimeoId   = getVimeoId(url);

  if (youtubeId) {
    return (
      <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary mb-6">
        {!loaded && <LoadingSkeleton />}
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`}
          title="Lesson video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setLoaded(true)}
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    );
  }

  if (vimeoId) {
    return (
      <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary mb-6">
        {!loaded && <LoadingSkeleton />}
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&color=ff6600`}
          title="Lesson video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          onLoad={() => setLoaded(true)}
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    );
  }

  if (isDirectVideo(url)) {
    return (
      <div className="mb-6">
        <video
          src={url}
          controls
          className="w-full rounded-xl bg-secondary"
        />
      </div>
    );
  }

  return null;
}
