"use client";

import Link from "next/link";
import { ArchiveIcon, SettingsIcon, SparkIcon } from "./Icons";

export function AppHeader({ onSettings }: { onSettings?: () => void }) {
  return (
    <header className="app-header">
      <Link href="/" className="brand" aria-label="탐구의 결 홈">
        <span className="brand-mark"><SparkIcon size={19} /></span>
        <span>탐구의 결</span>
      </Link>
      <nav className="header-nav" aria-label="주요 메뉴">
        <Link href="/history" className="nav-link"><ArchiveIcon size={18} /> 저장 내역</Link>
        {onSettings && <button className="nav-link nav-button" onClick={onSettings}><SettingsIcon size={18} /> 설정</button>}
      </nav>
    </header>
  );
}
