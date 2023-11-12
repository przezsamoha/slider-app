import { useRef, useEffect, Dispatch, SetStateAction } from 'react';
import {
  PiSpeakerSimpleHighLight,
  PiSpeakerSimpleSlashLight,
} from 'react-icons/pi';

import './Player.css';

interface PlayerProps {
  url: string;
  playing: boolean;
  setPlaying: Dispatch<SetStateAction<boolean>>;
}

export default function Player({ url, playing, setPlaying }: PlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && playing) {
      audioRef.current.play();
    }
  }, [url, playing]);

  const handlePlay = () => {
    setPlaying(true);

    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleStop = () => {
    setPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div className="player">
      {!playing ? (
        <PiSpeakerSimpleSlashLight
          onClick={handlePlay}
          className="sound-icon"
        />
      ) : (
        <PiSpeakerSimpleHighLight onClick={handleStop} className="sound-icon" />
      )}
      <audio ref={audioRef} src={url} />
    </div>
  );
}
