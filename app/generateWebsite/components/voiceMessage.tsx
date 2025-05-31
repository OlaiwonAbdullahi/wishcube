import React, { useState, useRef } from "react";

import {
  LuMic,
  LuMicOff,
  LuPause,
  LuPlay,
  LuTrash2,
  LuUpload,
} from "react-icons/lu";

const VoiceMessage: React.FC = () => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [recordingTime, setRecordingTime] = useState<number>(0);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [recordingInterval, setRecordingInterval] =
    useState<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const startRecording = async (): Promise<void> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];

      recorder.ondataavailable = (event: BlobEvent) => {
        chunks.push(event.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        stream.getTracks().forEach((track) => track.stop());
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
      setRecordingTime(0);

      // Start timer
      const interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
      setRecordingInterval(interval);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      alert("Could not access microphone. Please check permissions.");
    }
  };

  const stopRecording = (): void => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      if (recordingInterval) {
        clearInterval(recordingInterval);
        setRecordingInterval(null);
      }
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const togglePlayback = (): void => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("audio/")) {
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
    } else {
      alert("Please select a valid audio file");
    }
  };

  const clearRecording = (): void => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }
    setAudioUrl(null);
    setIsPlaying(false);
    setRecordingTime(0);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-violet-50 rounded-2xl p-6 space-y-4 w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold text-gray-800">Voice Message</h2>

      {!audioUrl ? (
        <div className="space-y-4">
          {/* Recording Section */}
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-violet-200">
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`cursor-pointer rounded-full p-4 flex items-center justify-center transition-colors ${
                isRecording
                  ? "bg-red-500 text-white animate-pulse"
                  : "bg-violet-500 text-white hover:bg-violet-600"
              }`}
            >
              {isRecording ? <LuMicOff size={28} /> : <LuMic size={28} />}
            </button>

            <div className="flex-1">
              {isRecording ? (
                <div className="space-y-1">
                  <div className="text-red-600 font-medium">Recording...</div>
                  <div className="text-sm text-gray-600">
                    {formatTime(recordingTime)}
                  </div>
                </div>
              ) : (
                <div className="text-gray-600">Click to Record a Message</div>
              )}
            </div>
          </div>

          {/* Upload Section */}
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-violet-200">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="cursor-pointer bg-gray-500 text-white rounded-full p-4 flex items-center justify-center hover:bg-gray-600 transition-colors"
            >
              <LuUpload size={28} />
            </button>
            <div className="text-gray-600">Or Upload an Audio File</div>
            <input
              ref={fileInputRef}
              type="file"
              accept="audio/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
        </div>
      ) : (
        /* Playback Section */
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-violet-200">
            <button
              onClick={togglePlayback}
              className="cursor-pointer bg-violet-500 text-white rounded-full p-4 flex items-center justify-center hover:bg-violet-600 transition-colors"
            >
              {isPlaying ? <LuPause size={28} /> : <LuPlay size={28} />}
            </button>

            <div className="flex-1">
              <div className="text-gray-800 font-medium">
                Voice Message Ready
              </div>
              <div className="text-sm text-gray-600">Click play to listen</div>
            </div>

            <button
              onClick={clearRecording}
              className="cursor-pointer bg-red-500 text-white rounded-full p-2 flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              <LuTrash2 size={20} />
            </button>
          </div>

          <audio
            ref={audioRef}
            src={audioUrl}
            onEnded={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full"
            controls
          />
        </div>
      )}
    </div>
  );
};

export default VoiceMessage;
