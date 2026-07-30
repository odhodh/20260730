type IconProps = { size?: number; strokeWidth?: number; className?: string };

const base = (size = 20, strokeWidth = 1.8, className = "") => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
  "aria-hidden": true,
});

export function SparkIcon(p: IconProps) {
  return <svg {...base(p.size, p.strokeWidth, p.className)}><path d="m12 3-1.25 4.25a5 5 0 0 1-3.5 3.5L3 12l4.25 1.25a5 5 0 0 1 3.5 3.5L12 21l1.25-4.25a5 5 0 0 1 3.5-3.5L21 12l-4.25-1.25a5 5 0 0 1-3.5-3.5L12 3Z" /></svg>;
}
export function SettingsIcon(p: IconProps) {
  return <svg {...base(p.size, p.strokeWidth, p.className)}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.09A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.6-1H3v-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6V3h4v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.18.36.5.66.88.84.22.1.46.16.72.16h.09v4H21a1.7 1.7 0 0 0-1.6 1Z"/></svg>;
}
export function ArchiveIcon(p: IconProps) {
  return <svg {...base(p.size, p.strokeWidth, p.className)}><path d="M4 7h16v13H4zM3 3h18v4H3zM9 11h6"/></svg>;
}
export function ArrowIcon(p: IconProps) {
  return <svg {...base(p.size, p.strokeWidth, p.className)}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
}
export function CheckIcon(p: IconProps) {
  return <svg {...base(p.size, p.strokeWidth, p.className)}><path d="m5 12 4 4L19 6"/></svg>;
}
export function CopyIcon(p: IconProps) {
  return <svg {...base(p.size, p.strokeWidth, p.className)}><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>;
}
export function DownloadIcon(p: IconProps) {
  return <svg {...base(p.size, p.strokeWidth, p.className)}><path d="M12 3v12m-5-5 5 5 5-5M5 21h14"/></svg>;
}
export function CloseIcon(p: IconProps) {
  return <svg {...base(p.size, p.strokeWidth, p.className)}><path d="m6 6 12 12M18 6 6 18"/></svg>;
}
export function KeyIcon(p: IconProps) {
  return <svg {...base(p.size, p.strokeWidth, p.className)}><circle cx="8" cy="15" r="4"/><path d="m11 12 8-8m-3 3 3 3m-6 0 2 2"/></svg>;
}
