"use client";

import { useState, useCallback, useRef } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";

export default function LottieTestPage() {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [loop, setLoop] = useState(true);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [bgColor, setBgColor] = useState("#0a1128");
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const loadFile = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        setAnimationData(json);
        setFileName(file.name);
      } catch {
        alert("Invalid JSON file. Please upload a valid Lottie JSON.");
      }
    };
    reader.readAsText(file);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file?.name.endsWith(".json")) {
        loadFile(file);
      }
    },
    [loadFile]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) loadFile(file);
    },
    [loadFile]
  );

  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-serif text-3xl font-bold text-foreground">
          Lottie Animation Tester
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Drop a Lottie JSON file below or use the file picker to preview
          animations.
        </p>

        {/* Drop zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`mt-8 flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-colors ${
            isDragging
              ? "border-pink bg-pink/5"
              : "border-border hover:border-muted-foreground"
          }`}
          onClick={() => document.getElementById("file-input")?.click()}
        >
          <input
            id="file-input"
            type="file"
            accept=".json"
            onChange={handleFileInput}
            className="hidden"
          />
          <p className="text-lg font-medium text-muted-foreground">
            {isDragging
              ? "Drop it here!"
              : "Drag & drop a .json Lottie file here"}
          </p>
          <p className="mt-1 text-sm text-muted-foreground/60">
            or click to browse
          </p>
        </div>

        {/* Preview area */}
        {animationData && (
          <div className="mt-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">
                {fileName}
              </h2>
              <button
                onClick={() => {
                  setAnimationData(null);
                  setFileName("");
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear
              </button>
            </div>

            {/* Controls */}
            <div className="glass rounded-xl p-5 space-y-4">
              <div className="flex flex-wrap items-center gap-6">
                {/* Speed */}
                <label className="flex items-center gap-2 text-sm text-foreground">
                  Speed:
                  <input
                    type="range"
                    min="0.1"
                    max="3"
                    step="0.1"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className="w-24"
                  />
                  <span className="w-10 text-muted-foreground">
                    {speed.toFixed(1)}x
                  </span>
                </label>

                {/* Loop */}
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input
                    type="checkbox"
                    checked={loop}
                    onChange={(e) => setLoop(e.target.checked)}
                    className="rounded"
                  />
                  Loop
                </label>

                {/* Direction */}
                <button
                  onClick={() => setDirection((d) => (d === 1 ? -1 : 1))}
                  className="rounded-lg border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  Direction: {direction === 1 ? "Forward" : "Reverse"}
                </button>

                {/* Play/Pause */}
                <button
                  onClick={() => {
                    if (lottieRef.current) {
                      const el = lottieRef.current;
                      if (el.animationItem?.isPaused) {
                        el.play();
                      } else {
                        el.pause();
                      }
                    }
                  }}
                  className="rounded-lg border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  Play / Pause
                </button>

                {/* Stop */}
                <button
                  onClick={() => lottieRef.current?.stop()}
                  className="rounded-lg border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  Stop
                </button>
              </div>

              {/* Background color */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-foreground">Background:</span>
                <div className="flex gap-2">
                  {["#0a1128", "#ffffff", "#f3f1f8", "#1a1a2e", "#000000", "transparent"].map(
                    (color) => (
                      <button
                        key={color}
                        onClick={() => setBgColor(color)}
                        className={`h-8 w-8 rounded-md border-2 transition-all ${
                          bgColor === color
                            ? "border-pink scale-110"
                            : "border-border"
                        }`}
                        style={{
                          background:
                            color === "transparent"
                              ? "repeating-conic-gradient(#ddd 0% 25%, #fff 0% 50%) 0 0 / 16px 16px"
                              : color,
                        }}
                        aria-label={`Set background to ${color}`}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Animation preview */}
            <div
              className="overflow-hidden rounded-2xl border border-border"
              style={{ background: bgColor === "transparent" ? "repeating-conic-gradient(#ddd 0% 25%, #fff 0% 50%) 0 0 / 16px 16px" : bgColor }}
            >
              <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={loop}
                autoplay
                style={{
                  width: "100%",
                  maxHeight: "600px",
                }}
                onComplete={() => {
                  if (!loop) lottieRef.current?.goToAndStop(0, true);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
