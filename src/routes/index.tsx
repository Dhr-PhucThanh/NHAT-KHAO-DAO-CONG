import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: Home });

interface SessionData {
  id: string;
  date: string;
  durationMin: number;
  score1: number;
  score2: number;
  score3: number;
  score4: number;
  note: string;
}

function Home() {
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [durationMin, setDurationMin] = useState(30);
  const [score1, setScore1] = useState(3);
  const [score2, setScore2] = useState(3);
  const [score3, setScore3] = useState(3);
  const [score4, setScore4] = useState(3);
  const [note, setNote] = useState("");
  const [success, setSuccess] = useState(false);

  // Tính chỉ số trung bình an toàn tuyệt đối, không sợ lỗi chia hay vòng lặp
  const quyCan = Number(((score1 + score2 + score3 + score4) / 4).toFixed(1));

  function handleSave() {
    try {
      const newSession: SessionData = {
        id: Date.now().toString(),
        date,
        durationMin,
        score1,
        score2,
        score3,
        score4,
        note,
      };

      const existing = localStorage.getItem("nhat_khao_sessions");
      const list: SessionData[] = existing ? JSON.parse(existing) : [];
      list.unshift(newSession);
      localStorage.setItem("nhat_khao_sessions", JSON.stringify(list));

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);

      // Reset form
      setNote("");
    } catch (e) {
      console.error(e);
      alert("Lỗi khi lưu dữ liệu.");
    }
  }

  return (
    <main className="space-y-5 max-w-2xl mx-auto p-4">
      {success && (
        <div className="p-3 bg-green-100 text-green-800 rounded-md text-center font-medium border border-green-300">
          Đã lưu phiếu thành công!
        </div>
      )}

      <section className="rounded-lg border border-line bg-surface p-5 space-y-4">
        <h2 className="text-xl font-semibold">Phiếu nhật khảo</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <label className="block text-sm">
            <span className="mb-1 block text-xs">Ngày</span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border rounded bg-bg text-ink"
            />
          </label>

          <label className="block text-sm">
            <span className="mb-1 block text-xs">Thời lượng (phút)</span>
            <input
              type="number"
              value={durationMin}
              onChange={(e) => setDurationMin(Number(e.target.value))}
              className="w-full p-2 border rounded bg-bg text-ink"
            />
          </label>

          <div className="p-2 border rounded bg-bg flex flex-col justify-center">
            <span className="text-xs text-gray-500">Chỉ số quy căn</span>
            <span className="text-xl font-bold text-pine">{quyCan}</span>
          </div>
        </div>
      </section>

      {/* Mục 1 */}
      <div className="p-4 border rounded bg-surface space-y-2">
        <h3 className="font-medium">1. Nguồn khí</h3>
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setScore1(s)}
              className={`w-9 h-9 rounded border ${score1 === s ? 'bg-pine text-white' : 'bg-bg'}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Mục 2 */}
      <div className="p-4 border rounded bg-surface space-y-2">
        <h3 className="font-medium">2. Quy hạ đan</h3>
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setScore2(s)}
              className={`w-9 h-9 rounded border ${score2 === s ? 'bg-pine text-white' : 'bg-bg'}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Mục 3 */}
      <div className="p-4 border rounded bg-surface space-y-2">
        <h3 className="font-medium">3. Địa hộ</h3>
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setScore3(s)}
              className={`w-9 h-9 rounded border ${score3 === s ? 'bg-pine text-white' : 'bg-bg'}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Mục 4 */}
      <div className="p-4 border rounded bg-surface space-y-2">
        <h3 className="font-medium">4. Vô vi</h3>
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setScore4(s)}
              className={`w-9 h-9 rounded border ${score4 === s ? 'bg-pine text-white' : 'bg-bg'}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Tổng cảm buổi ngồi</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          className="w-full p-2 border rounded bg-surface text-ink"
          placeholder="Nhập cảm nhận..."
        />
      </div>

      <button
        type="button"
        onClick={handleSave}
        className="w-full py-3 bg-pine text-white rounded font-medium hover:opacity-90 transition"
      >
        Lưu phiếu này
      </button>
    </main>
  );
}
