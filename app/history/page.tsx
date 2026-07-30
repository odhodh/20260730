"use client";

import { useEffect, useMemo, useState } from "react";
import { AppHeader } from "../components/AppHeader";
import { CloseIcon, CopyIcon, DownloadIcon } from "../components/Icons";
import { MarkdownReport } from "../components/MarkdownReport";
import type { TopicRecord } from "../types";

export default function HistoryPage() {
  const [topics, setTopics] = useState<TopicRecord[]>([]);
  const [selected, setSelected] = useState<TopicRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/api/topics").then(async (r) => {
      const data = await r.json();
      if (!r.ok) throw new Error(data.error);
      setTopics(data.topics);
    }).catch((e) => setError(e.message)).finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => topics.filter((t) => [t.student_id, t.subject, t.initial_topic].join(" ").toLowerCase().includes(query.toLowerCase())), [topics, query]);

  async function copy() {
    if (!selected) return;
    await navigator.clipboard.writeText(selected.final_report_md);
    setCopied(true); setTimeout(() => setCopied(false), 1600);
  }
  function download() {
    if (!selected) return;
    const blob = new Blob([selected.final_report_md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = `${selected.student_id}_${selected.subject}_탐구보고서.md`; a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main>
      <AppHeader />
      <div className="history-shell">
        <section className="history-heading">
          <span className="section-kicker">MY ARCHIVE</span>
          <h1>완성한 탐구를 다시 꺼내 보세요.</h1>
          <p>저장한 보고서를 열람하고, 마크다운으로 복사하거나 내려받을 수 있습니다.</p>
        </section>
        <div className="history-toolbar">
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="학생, 과목, 주제로 검색" aria-label="저장 내역 검색" />
          <span>총 {filtered.length}개의 탐구</span>
        </div>
        {loading && <div className="loading-panel"><span className="loader"/><p>저장된 탐구를 불러오는 중입니다.</p></div>}
        {error && <div className="empty-state"><h2>저장 내역을 연결할 수 없어요.</h2><p>{error}</p></div>}
        {!loading && !error && filtered.length === 0 && <div className="empty-state"><h2>아직 저장된 탐구가 없어요.</h2><p>첫 탐구 보고서를 완성하면 이곳에 차곡차곡 쌓입니다.</p></div>}
        <div className="history-list">
          {filtered.map((topic) => <button key={topic.id} className="history-item" onClick={() => setSelected(topic)}>
            <div className="history-date"><b>{new Date(topic.created_at).getDate().toString().padStart(2, "0")}</b><span>{new Date(topic.created_at).toLocaleDateString("ko-KR", { year: "numeric", month: "short" })}</span></div>
            <div><span className="subject-badge">{topic.subject}</span><h2>{topic.initial_topic}</h2><p>{topic.student_id} · {topic.grade}</p></div>
            <span className="open-label">열어보기 →</span>
          </button>)}
        </div>
      </div>
      {selected && <div className="modal-backdrop report-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setSelected(null)}>
        <section className="report-modal" role="dialog" aria-modal="true">
          <header><div><span>{selected.subject} · {selected.grade}</span><h2>{selected.student_id}</h2></div><div className="report-actions"><button onClick={copy}><CopyIcon size={17}/>{copied ? "복사됨" : "복사"}</button><button onClick={download}><DownloadIcon size={17}/>다운로드</button><button className="icon-button" onClick={() => setSelected(null)} aria-label="닫기"><CloseIcon /></button></div></header>
          <div className="report-modal-body"><MarkdownReport markdown={selected.final_report_md}/></div>
        </section>
      </div>}
    </main>
  );
}
