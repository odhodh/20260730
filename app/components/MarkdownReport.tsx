"use client";

import React from "react";

function inline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*")) return <em key={i}>{part.slice(1, -1)}</em>;
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export function MarkdownReport({ markdown }: { markdown: string }) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const nodes: React.ReactNode[] = [];
  let bullets: string[] = [];

  const flush = () => {
    if (!bullets.length) return;
    nodes.push(<ul key={`ul-${nodes.length}`}>{bullets.map((b, i) => <li key={i}>{inline(b)}</li>)}</ul>);
    bullets = [];
  };

  lines.forEach((raw, i) => {
    const line = raw.trim();
    if (/^[-*]\s+/.test(line)) {
      bullets.push(line.replace(/^[-*]\s+/, ""));
      return;
    }
    flush();
    if (!line) return;
    if (line.startsWith("### ")) nodes.push(<h3 key={i}>{inline(line.slice(4))}</h3>);
    else if (line.startsWith("## ")) nodes.push(<h2 key={i}>{inline(line.slice(3))}</h2>);
    else if (line.startsWith("# ")) nodes.push(<h1 key={i}>{inline(line.slice(2))}</h1>);
    else if (/^\d+\.\d+\s/.test(line)) nodes.push(<h3 key={i}>{inline(line)}</h3>);
    else nodes.push(<p key={i}>{inline(line)}</p>);
  });
  flush();

  return <article className="markdown-report">{nodes}</article>;
}
