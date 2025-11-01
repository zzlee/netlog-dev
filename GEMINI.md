## 技術棧

- **後端 (Backend):** Cloudflare Worker
- **資料庫 (Database):** Cloudflare D1
- **前端 (Frontend):** React (with Vite) + TypeScript
- **UI 框架 (UI Framework):** Bootstrap 5

## 專案進度總結

目前專案已成功建立一個全端事件日誌應用程式，主要進展如下：

### 後端 (Cloudflare Worker + D1)
- 實作了基於 Cloudflare Worker (Hono.js, TypeScript) 的 RESTful API。
- 資料庫使用 Cloudflare D1，定義了 `event_sources` 和 `event_logs` 兩張表，用於儲存事件來源及其日誌。
- API 支援事件來源的建立、查詢，以及事件日誌的建立、查詢（包括按來源 ID 查詢）。
- 後端已部署至 `https://netlog-dev-backend.zzlee-tw.workers.dev/`。

### 前端 (React + Vite + TypeScript)
- 開發了一個單頁應用程式 (SPA)，使用 React、Vite 和 TypeScript，並以 Bootstrap 5 和 Bootstrap Icons 進行樣式設計。
- **事件儀表板 (`EventList.tsx`):**
    - 顯示所有或特定事件來源的日誌列表，支援透過下拉選單篩選。
    - 日誌以表格形式呈現，包含「日期時間」和「事件內容」。
- **建立事件 (`CreateEvent.tsx`):**
    - 實作為一個 Bootstrap 模態視窗，允許用戶在不離開日誌列表頁面的情況下建立新的事件日誌。
    - 模態視窗在成功建立事件或取消後會自動關閉，並且事件列表會自動刷新以顯示最新資料。

### 輔助腳本 (`scripts` 目錄)
- 提供了一系列 `curl` 腳本，用於直接與後端 API 互動，方便測試和管理事件來源及日誌。
- 包含 `manage_events.sh` 腳本，提供統一的介面來列出、建立事件日誌，並支援按名稱查詢。
