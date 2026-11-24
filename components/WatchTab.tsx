"use client";
import { useEffect } from "react";
import Link from "next/link";
import type { Topic } from "@/lib/types";
import { useStore } from "@/lib/store";
import { sitcomEpisodeFor } from "@/lib/sitcom";
import { EpisodePlayer, formatDuration, useWatchedEpisodes } from "./EpisodePlayer";

export function WatchTab({
  topic,
  onPractise,
  onChallenge,
}: {
  topic: Topic;
  onPractise: () => void;
  onChallenge: () => void;
}) {
  const episode = sitcomEpisodeFor(topic.id);
  const watchedEpisodes = useWatchedEpisodes();
  const episodeDone = !!watchedEpisodes[topic.id];
  const { setBest } = useStore();

  useEffect(() => {
    if (episodeDone) setBest(`watch:${topic.id}`, 1);
  }, [episodeDone, topic.id, setBest]);

  return (
    <div className="space-y-4">
      {episode ? (
        <>
          <div className="card flex flex-wrap items-center justify-between gap-3 border-2 border-brand bg-brand-soft/30 p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#7c3aed] text-xl text-white" aria-hidden>
                📺
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-extrabold">
                    Ep {episode.num}: &ldquo;{episode.title}&rdquo;
                  </span>
                  <span className="chip text-xs">{formatDuration(episode.durationSec)}</span>
                  {episodeDone ? <span className="chip border-0 bg-good-soft text-good">Watched ✓</span> : null}
                </div>
                <p className="mt-0.5 text-sm text-ink-2">
                  Includes holo-board SVG diagrams, an <strong>Examiner Mark-Scheme Trap</strong> roast, and 3 pause challenges at the end!
                </p>
              </div>
            </div>
            <Link href={`/episodes?ep=${episode.num}`} className="btn btn-secondary btn-sm">
              📺 Binge Playlist
            </Link>
          </div>

          <div className="card overflow-hidden p-1 sm:p-2">
            <EpisodePlayer episode={episode} />
            {episode.logline ? <p className="px-2 pt-2 text-sm text-ink-2">{episode.logline}</p> : null}
          </div>
        </>
      ) : (
        <div className="card p-6 text-center text-ink-2">
          <p className="font-bold">Sitcom episode queued for studio rendering — explore the Learn, Cram, and Practise tabs while episodes are being produced!</p>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/episodes" className="btn btn-secondary btn-sm">
            📺 All sitcom episodes
          </Link>
          <Link href="/watch" className="btn btn-ghost btn-sm">
            🍿 Watch hub
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className="btn btn-secondary btn-sm" onClick={onPractise}>
            ✏️ Practise skills
          </button>
          <button type="button" className="btn btn-primary btn-sm" onClick={onChallenge}>
            🧗 AoPS Challenge →
          </button>
        </div>
      </div>
    </div>
  );
}
