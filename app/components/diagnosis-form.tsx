"use client";

import { sendAnalyticsEvent } from "@/lib/analytics";
import { useCaseLabels } from "@/lib/recommendation";

export function DiagnosisForm() {
  return (
    <form
      className="panel"
      action="/result"
      onSubmit={(event) => {
        const formData = new FormData(event.currentTarget);

        sendAnalyticsEvent("diagnosis_submit", {
          budget: Number(formData.get("budget")),
          hours_per_day: Number(formData.get("hoursPerDay")),
          days_per_week: Number(formData.get("daysPerWeek")),
          use_case: String(formData.get("useCase")),
          preference: String(formData.get("preference")),
          work_style: String(formData.get("workStyle"))
        });
      }}
    >
      <div className="form-grid">
        <div className="field">
          <label htmlFor="budget">月予算（USD）</label>
          <input id="budget" name="budget" type="number" min="0" step="1" defaultValue="20" required />
        </div>

        <div className="field">
          <label htmlFor="hoursPerDay">1日の開発時間</label>
          <input id="hoursPerDay" name="hoursPerDay" type="number" min="0.5" max="24" step="0.5" defaultValue="1" required />
        </div>

        <div className="field">
          <label htmlFor="daysPerWeek">週の開発日数</label>
          <input id="daysPerWeek" name="daysPerWeek" type="number" min="1" max="7" step="1" defaultValue="3" required />
        </div>

        <div className="field">
          <label htmlFor="useCase">主な用途</label>
          <select id="useCase" name="useCase" defaultValue="side-project">
            {Object.entries(useCaseLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <span className="group-label">IDE派 / CLI派</span>
          <div className="radio-row">
            <label className="radio-card">
              <input type="radio" name="preference" value="ide" defaultChecked />
              IDE派
            </label>
            <label className="radio-card">
              <input type="radio" name="preference" value="cli" />
              CLI派
            </label>
          </div>
        </div>

        <div className="field">
          <span className="group-label">個人開発 / チーム</span>
          <div className="radio-row">
            <label className="radio-card">
              <input type="radio" name="workStyle" value="solo" defaultChecked />
              個人開発
            </label>
            <label className="radio-card">
              <input type="radio" name="workStyle" value="team" />
              チーム
            </label>
          </div>
        </div>
      </div>

      <div className="actions">
        <button className="button" type="submit">
          診断する
        </button>
        <span className="subtle">DB保存なし。入力内容は結果URLのみに反映されます。</span>
      </div>
    </form>
  );
}
