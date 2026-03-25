# Personal Interview Prep & Portfolio

Weber Huang — Senior AI Engineer 面試準備與個人作品集。

---

## Structure

```
personal/
├── docs/                    # 面試相關文件
│   ├── Weber Huang - AI Engineer Interview (PDF Final).pdf
│   ├── Weber Huang - AI Engineer Resume 2026.pdf
│   ├── Weber Huang CV 2025.pdf
│   ├── first_phase_interview_note.md    # 一面簡報手稿 & QA
│   ├── 格上汽車-AI系統工程師.md          # 104 職缺整理
│   ├── 格上租車-公司研究.md              # 公司研究報告
│   ├── 格上租車-二面技術主管提問.md       # 二面完整提問清單
│   └── 格上租車-二面提問（傳同事版）.md    # 精簡版（可傳同事）
│
├── portfolio/               # 個人作品集網站 (FastAPI + React + Docker)
│   ├── backend/             # FastAPI API server
│   ├── frontend/            # React 18 + Vite
│   ├── nginx/               # Reverse proxy
│   └── docker-compose.yml
│
└── plan.md                  # 專案規劃原始需求
```

---

## Portfolio Website

POC 級個人技術面試作品集，展示工作經歷與專案。

### Tech Stack

| Layer | Choice |
|-------|--------|
| Backend | FastAPI + Pydantic + PyYAML |
| Frontend | React 18 + Vite + React Flow + Framer Motion |
| Deploy | Docker Compose (backend + frontend + nginx) |

### Quick Start

```bash
cd portfolio
docker compose up -d
```

- **Site**: http://localhost
- **API**: http://localhost/api/v1/health
- **Vite Dev**: http://localhost:5173

### Features

- Entry page：個人摘要、互動式 timeline（可展開）、技術棧卡片、學歷
- Sidebar：hover 滑出，連結到各專案頁
- Project pages：動態 tab 系統（Description / Structure / Pictures）
- React Flow：互動式流程圖，hover 節點顯示 tooltip
- Data-driven：所有內容由 YAML 驅動，修改不需改程式碼

### Content Management

編輯 `portfolio/backend/app/data/` 下的 YAML 檔即可更新內容：

```
data/
├── profile.yaml         # 個人資訊、學歷、技術棧
├── experiences.yaml     # 工作經歷 timeline
└── projects/            # 各專案內容 & 架構圖
    ├── appsiq.yaml
    ├── tmsc.yaml
    ├── systalk_viki.yaml
    ├── systalk_coach.yaml
    └── others.yaml
```

新增專案：在 `projects/` 加一個 YAML，網站自動出現。

---

## Interview Docs

格上租車（裕隆集團）AI 系統工程師二面準備資料：

| 文件 | 用途 |
|------|------|
| `格上汽車-AI系統工程師.md` | 職缺資訊整理（JD、條件、福利） |
| `格上租車-公司研究.md` | 公司背景、AI 策略、MaaS 生態、2026 方向 |
| `格上租車-二面技術主管提問.md` | 完整提問清單 5 大類 20+ 題 + 策略建議 |
| `格上租車-二面提問（傳同事版）.md` | 精簡分類版，標記適合誰回答 |
| `first_phase_interview_note.md` | 一面簡報講稿 + QA |
