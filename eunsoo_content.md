# Eunsoo Portfolio — Project Spec

> Claude Code용 빌드 가이드. 이 파일을 기반으로 전체 사이트를 구현한다.

---

## 1. Tech Stack

| 항목 | 선택 |
|------|------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Image source | Google Drive API v3 (public folders, API Key auth) |
| Deployment | Vercel |
| Version control | GitHub |

---

## 2. Colour Scheme

```
Background primary:   #edeae3   (warm beige — hero, main bg)
Background secondary: #f5f3ee   (light beige — nav, footer)
Text primary:         #2a3d2e   (dark forest green)
Text secondary:       #4a5e45   (mid green)
Text muted:           #7a8f76   (sage — labels, captions)
Accent:               #5a7a5e   (italic name highlight)
Divider / border:     #9aaa96   (soft sage)
Tag border:           #9aaa96
Tag text:             #4a5e45
```

---

## 3. Typography

| 용도 | 폰트 | 스타일 |
|------|------|--------|
| Hero 이름 ("Danielle.") | Playfair Display | italic, weight 400 |
| 나머지 모든 텍스트 | DM Sans | weight 300 / 400 / 500 |

Google Fonts import:
```
Playfair Display: ital,wght@1,400
DM Sans: wght@300;400;500
```

---

## 4. Site Structure & Routing

```
/                        ← 메인 (Hero + Art Portfolio + Projects + About Me)
/portfolio/primary-1-2   ← Primary 1–2 갤러리 풀페이지
/portfolio/primary-3     ← Primary 3 갤러리 풀페이지
/portfolio/primary-4     ← Primary 4 갤러리 풀페이지
/projects/[slug]         ← 프로젝트 디테일 (현재 Coming Soon)
```

---

## 5. Navigation

```
왼쪽:  Danielle Eunsoo Kim   (uppercase, DM Sans 500, letter-spacing 0.08em)
오른쪽: Art Portfolio  |  Projects  |  About Me
```

- 각 링크 클릭 시 해당 섹션으로 smooth scroll
- Nav background: `#f5f3ee`, border-bottom: `1px solid rgba(42,61,46,0.12)`

---

## 6. Sections

### 6-1. Hero

레이아웃: 전체 너비, 텍스트만 (사진 없음)
배경: `#edeae3`
패딩: `56px 28px 52px`

```
[eyebrow]   Probably drawing or reading right now · Seoul
            → font: DM Sans 11px, #7a8f76, letter-spacing 0.12em, uppercase

[name]      Hello, I'm
            Danielle.
            → "Hello, I'm": DM Sans 400, 48px, #2a3d2e
            → "Danielle.": Playfair Display italic, 48px, #5a7a5e

[divider]   40px wide, 1px, #9aaa96

[body]      I love creating art — from watercolors and crayon to digital
            illustration. My favorite things to draw are cats, flowers,
            and the universe.
            → DM Sans 13px, #4a5e45, line-height 1.85, max-width 480px

[tags]      Watercolor  |  Crayon  |  Colored pencil  |  Cats & nature
            → pill tags, border 0.5px #9aaa96, text #4a5e45, font 11px DM Sans
```

---

### 6-2. Art Portfolio

섹션 헤더: `ART PORTFOLIO` (uppercase, 11px, #2a3d2e)

**폴더 카드 그리드** — 3열

각 카드:
- 상단: Hero image (구글 드라이브에서 불러온 첫 번째 이미지, height 160px, object-fit cover)
- 하단: 폴더 이름 + `→` 화살표
- 클릭 시 → `/portfolio/[folder]` 풀페이지 갤러리로 이동

| 폴더 슬러그 | 표시 이름 | 드라이브 폴더 ID |
|-------------|-----------|-----------------|
| primary-1-2 | Primary 1–2 | `DRIVE_FOLDER_PRIMARY_12` (env) |
| primary-3   | Primary 3   | `DRIVE_FOLDER_PRIMARY_3` (env) |
| primary-4   | Primary 4   | `DRIVE_FOLDER_PRIMARY_4` (env) |

**폴더 갤러리 풀페이지** (`/portfolio/[folder]`):
- 상단: `← Back` + 폴더 이름
- 3열 그리드, 각 이미지 카드: 썸네일
- 이미지 클릭 시 lightbox (fullscreen)

---

### 6-3. Projects

섹션 헤더: `PROJECTS` + `Coming soon`

현재 상태: placeholder 카드 2개, opacity 0.5
- 점선 테두리 박스 (hero image 자리)
- Project Title
- Short description will go here.
- `Coming soon` badge

나중에 프로젝트 추가할 때:
- `/projects/[slug]/page.tsx` 파일 추가
- Hero image + short description → 카드
- 클릭 시 디테일 페이지로 이동

---

### 6-4. About Me

레이아웃: 2열 그리드

**왼쪽 — Bio**
```
Seoul Foreign School student who loves art, books, animals, and the outdoors.
Aspiring animal behaviourist
```

**오른쪽 — Interests**
```
Cats  |  Squirrels  |  Pink & purple  |  Cycling  |  Camping  |  Watercolor  |  Digital art
```
(pill 태그 스타일)

---

## 7. Google Drive 연동

### 방식
Public folder + API Key (OAuth 불필요)

### 환경변수 (`.env.local` & Vercel)
```
GOOGLE_API_KEY=
DRIVE_FOLDER_PRIMARY_12=
DRIVE_FOLDER_PRIMARY_3=
DRIVE_FOLDER_PRIMARY_4=
```

### 드라이브 폴더 공유 설정
각 폴더: 공유 → "링크 있는 사람 누구나" → 뷰어

### API 호출 함수
```typescript
// lib/google-drive.ts

const FOLDERS: Record<string, string | undefined> = {
  'primary-1-2': process.env.DRIVE_FOLDER_PRIMARY_12,
  'primary-3':   process.env.DRIVE_FOLDER_PRIMARY_3,
  'primary-4':   process.env.DRIVE_FOLDER_PRIMARY_4,
}

export async function getImages(folder: string) {
  const folderId = FOLDERS[folder]
  if (!folderId) return []

  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files` +
    `?q='${folderId}'+in+parents+and+mimeType+contains+'image/'` +
    `&fields=files(id,name,createdTime)` +
    `&orderBy=createdTime` +
    `&key=${process.env.GOOGLE_API_KEY}`
  )
  const data = await res.json()
  return data.files ?? []
}

export function getDriveImageUrl(fileId: string) {
  return `https://drive.google.com/uc?export=view&id=${fileId}`
}

export function getDriveThumbnailUrl(fileId: string) {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`
}
```

### 이미지 업데이트 워크플로우
```
은수 드라이브 폴더에 사진 추가
        ↓
사이트 새로고침 → 자동 반영 ✅
(재배포 불필요)
```

---

## 8. Footer

```
왼쪽: Danielle Eunsoo Kim
오른쪽: 2025
배경: #f5f3ee
```

---


