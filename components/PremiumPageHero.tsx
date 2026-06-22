import { VideoHero } from "@/components/VideoHero";
import { getVideoAsset, type VideoAssetKey } from "@/lib/videoAssets";

export function PremiumPageHero({
  eyebrow,
  title,
  copy,
  videoKey = "home",
  videoSrc,
  poster,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  children
}: {
  eyebrow: string;
  title: string;
  copy: string;
  videoKey?: VideoAssetKey;
  videoSrc?: string;
  poster?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  children?: React.ReactNode;
}) {
  const asset = getVideoAsset(videoKey);

  return (
    <VideoHero
      eyebrow={eyebrow}
      title={title}
      copy={copy}
      videoSrc={videoSrc ?? asset.videoSrc}
      poster={poster ?? asset.poster}
      actions={[
        ...(primaryHref && primaryLabel ? [{ href: primaryHref, label: primaryLabel, variant: "primary" as const }] : []),
        ...(secondaryHref && secondaryLabel ? [{ href: secondaryHref, label: secondaryLabel, variant: "secondary" as const }] : [])
      ]}
    >
      {children}
    </VideoHero>
  );
}
