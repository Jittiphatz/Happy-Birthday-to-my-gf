"use client";

import React, { useEffect, useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import '@fontsource/anuphan/300.css';
import '@fontsource/anuphan/400.css';
import '@fontsource/anuphan/500.css';
import '@fontsource/anuphan/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const fadeInStyle = `
  .fade-in {
    animation: fadeIn 1s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: red;
    cursor: pointer;
  }

  input[type="range"]::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: red;
    cursor: pointer;
  }

  .audio-player {
    width: 100%;
    max-width: 350px;
    min-height: 280px;
  }

  .audio-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 50px;
  }

  .audio-image {
    height: 192px;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  .time-display {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 0.875rem;
    height: 24px;
    line-height: 24px;
  }

  .volume-control {
    display: flex;
    align-items: center;
    width: 140px;
  }

  .play-button {
    min-width: 90px;
  }
`;

interface LoadingProps {
  progress: number;
}

const Loading: React.FC<LoadingProps> = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-blue-500 flex flex-col justify-center items-center">
      <div className="text-3xl font-bold mb-4 text-white">Loading...</div>
      <progress
        value={progress}
        max="100"
        className="w-64 h-4 rounded-full bg-gray-300"
        style={{
          appearance: "none",
          WebkitAppearance: "none",
          borderRadius: "9999px",
          overflow: "hidden",
        }}
      >
      </progress>
    </div>
  );
};

interface PasswordInputProps {
  onSubmit: (password: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ onSubmit }) => {
  const [password, setPassword] = useState<string>('');
  const [showHint, setShowHint] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(password);
    setPassword('');
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  const theme = createTheme({
    typography: {
      fontFamily: 'Anuphan, sans-serif',
    },
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-500 relative">
      <h2 className="text-3xl font-bold text-white mb-4">Enter Password</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <ThemeProvider theme={theme}>
          <TextField
            id="outlined-password-input"
            label="รหัสผ่าน"
            type="password"
            value={password}
            onChange={handleChange}
            autoComplete="current-password"
            variant="outlined"
            required
            sx={{
              marginBottom: '20px',
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                color: "white",
                border: "2px solid #FF66B2",
                borderRadius: "8px",
                backgroundColor: "#468499",
                "&:hover": {
                  border: "2px solid #FF99CC",
                },
                "&.Mui-focused": {
                  border: "2px solid #FF3385",
                },
              },
              "& .MuiInputLabel-root": {
                color: "rgba(255, 255, 255, 0.7)",
                transform: "translate(12px, 1px) scale(1)",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
                transform: "translate(10px, -6px) scale(0.85)",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          />
        </ThemeProvider>
        <div className="flex gap-2">
          <ThemeProvider theme={theme}>
            <Button type="submit" color="success" variant="contained" className="text-white py-2 px-4" endIcon={<SendIcon />}>
              ยืนยัน
            </Button>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <Button
              type="button"
              className="bg-white text-gray-800 hover:text-fuchsia-600 hover:bg-gray-300 py-2 px-4 rounded-xl"
              onClick={toggleHint}
              variant='contained'
              color='error'
            >
              กดปุ่มเพื่อดูรหัสผ่าน
            </Button>
          </ThemeProvider>
        </div>
      </form>

      {showHint && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-50 fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Password Hint</h3>
              <button
                onClick={toggleHint}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <p className="text-lg mb-4">Today in 2009</p>
            <p className="text-blue-700 mb-4">0?/0?/2009</p>
            <ThemeProvider theme={theme}>
              <Button className="text-white" color='secondary' onClick={toggleHint} variant="contained">Close</Button>
            </ThemeProvider>
          </div>
        </div>
      )}
    </div>
  );
};

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [isPasswordEntered, setIsPasswordEntered] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(100);
  const [currentClockTime, setCurrentClockTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClockTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatClockTime = (date: Date): string => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          setTimeout(() => {
          }, 500);
          return 100;
        }
        return prevProgress + 15;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
      };

      audio.addEventListener('loadedmetadata', handleLoadedMetadata);

      return () => {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Error playing audio:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const interval = setInterval(() => {
        if (isPlaying) {
          setCurrentTime(audio.currentTime);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handlePlayPause = (): void => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(e => console.error("Error playing audio:", e));
        setIsPlaying(true);
      }
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setVolume(Number(event.target.value));
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handlePasswordSubmit = (inputPassword: string) => {
    if (inputPassword === '01042009') {
      alert('รหัสผ่านถูกต้องคั้บ! เก่งมากอ้วน💖');
      setIsPasswordEntered(true);
      setTimeout(() => {
        confetti({ particleCount: 200, spread: 900, origin: { y: 0.6 } });
      }, 500);
    } else {
      alert('รหัสไม่ถูกนะอ้วน ลองใหม่นะ🥰');
    }
  };

  if (isLoading) {
    return <Loading progress={progress} />;
  }

  if (!isPasswordEntered) {
    return <PasswordInput onSubmit={handlePasswordSubmit} />;
  }

  const theme = createTheme({
    typography: {
      fontFamily: 'Anuphan, sans-serif',
    },
  });

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>{fadeInStyle}</style>
      <div className="bg-gradient-to-r from-blue-500 to-fuchsia-600 min-h-screen flex flex-col justify-center items-center relative fade-in">
        <h1 className="text-3xl font-bold text-yellow-500">Happy Birthday to Ice🎂🎉</h1>
        <p className="text-xl py-5 text-white"><i className="fa-sharp-duotone fa-solid fa-calendar-days mr-2"></i>Tuesday 1 April 2025</p>
        <p className="text-lg text-white bg-black/30 px-4 py-2 rounded-lg inline-block">
          ขณะนี้เวลา {formatClockTime(currentClockTime)}
        </p>
        <div className="bg-white rounded-2xl p-4 shadow-xl mx-auto mt-5 audio-player">
          <img
            src="/images/8.jpg"
            alt="Song Thumbnail"
            className="rounded-lg mb-4 w-full audio-image"
          />
          <h2 className="text-xl font-bold mb-2 text-blue-500">Happy Birthday kub babe💖🎂</h2>

          <div className="time-display">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            className="w-full mb-4"
            onChange={(e) => {
              if (audioRef.current) {
                const newTime = Number(e.target.value);
                audioRef.current.currentTime = newTime;
                setCurrentTime(newTime);
              }
            }}
          />
          <div className="audio-controls">
            <button
              onClick={handlePlayPause}
              className="bg-red-500 text-white py-2 px-4 rounded-3xl transition transform hover:scale-105 play-button"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <div className="volume-control">
              <i className="fas fa-volume-up mr-2"></i>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20"
              />
              <span className="ml-2 w-8 text-right">{Math.round(volume * 100)}%</span>
            </div>
          </div>
          <audio
            ref={audioRef}
            src="/song/hbd.mp3"
            loop
            onLoadedMetadata={() => {
              if (audioRef.current) {
                setDuration(audioRef.current.duration);
              }
            }}
          />
        </div>
        <a href="/wish" className="mt-5">
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="success"
              className="text-white text-4xl shadow-xl"
              style={{ padding: '10px 10px', fontSize: '1rem' }}
            >
              <i className="fa-duotone fa-solid fa-circle-arrow-right mr-2"></i>
              ไปหน้าต่อไป
            </Button>
          </ThemeProvider>
        </a>
        <footer className="bottom-0 w-full text-center py-4 text-lg">
          <p>Made By <a className="transition transform hover:text-red-600" href='https://jittiphat.site'>Jittiphat Somsai</a></p>
          <p className='hover:text-yellow-500'><a href='https://github.com/'>Source Code</a></p>
        </footer>
      </div>
    </>
  );
};

export default Home;