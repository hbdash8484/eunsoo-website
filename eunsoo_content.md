# Eunsoo Portfolio — Project Spec

> Claude Code용 빌드 가이드. 이 파일은 현재 구현된 코드 상태를 반영한다.

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
Background secondary: #f5f3ee   (light beige — nav, footer, cards)
Text primary:         #2a3d2e   (dark forest green)
Text secondary:       #4a5e45   (mid green)
Text muted:           #7a8f76   (sage — labels, captions)
Accent:               #5a7a5e   (italic name highlight)
Divider / border:     #9aaa96   (soft sage)
Tag border:           #9aaa96
Tag text:             #4a5e45
```

Tailwind alias (`tailwind.config.ts`):
```
bg-primary     → #edeae3
bg-secondary   → #f5f3ee
text-forest    → #2a3d2e
text-mid       → #4a5e45
text-sage      → #7a8f76
accent         → #5a7a5e
divider        → #9aaa96
```

---

## 3. Typography

| 용도 | 폰트 | 스타일 |
|------|------|--------|
| Hero 이름 ("Danielle.") | Playfair Display | italic, weight 400 |
| 나머지 모든 텍스트 | DM Sans | weight 300 / 400 / 500 |

Next.js font 설정 (`app/layout.tsx`):
```typescript
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});
```

Tailwind fontFamily:
```
playfair → var(--font-playfair), serif
dm       → var(--font-dm-sans), sans-serif
```

---

## 4. Site Structure & Routing

```
/                        ← 메인 (Hero + Art Portfolio + Projects + About Me)
/portfolio/[folder]      ← 갤러리 풀페이지 (primary-1-2 / primary-3 / primary-4)
/projects/[slug]         ← 프로젝트 디테일 (현재 Coming Soon, PROJECTS 객체 비어있음)
```

유효한 folder 슬러그:
```
primary-1-2  → "Primary 1–2"
primary-3    → "Primary 3"
primary-4    → "Primary 4"
```

존재하지 않는 slug → `notFound()` 호출

---

## 5. Navigation (`components/Nav.tsx`)

```
왼쪽:  Danielle Eunsoo Kim   (uppercase, DM Sans 500, letter-spacing 0.08em)
오른쪽: Art Portfolio  |  Projects  |  About Me
```

- 각 링크 클릭 시 해당 섹션으로 smooth scroll (`scrollIntoView`)
- Nav background: `#f5f3ee`, border-bottom: `1px solid rgba(42,61,46,0.12)`
- `sticky top-0 z-50`, 높이 `h-14`

**모바일 반응형**:
- `md:` breakpoint 이상에서 데스크탑 링크 노출
- 모바일에서 햄버거 버튼 표시 (3-bar → X 애니메이션)
- 메뉴 열리면 세로 드롭다운 (`flex-col`)
- 최소 터치 영역: `min-h-[44px]`

---

## 6. Sections

### 6-1. Hero (`components/Hero.tsx`)

레이아웃: 전체 너비, 텍스트만 (사진 없음)
배경: `#edeae3`
패딩: `px-4 pt-10 pb-10 md:px-8 md:pt-14 md:pb-14`

```
[eyebrow]   Probably drawing or reading right now · Seoul
            → DM Sans 11px, #7a8f76, letter-spacing 0.12em, uppercase

[name]      Hello, I'm          → DM Sans 400, text-3xl / md:text-5xl, #2a3d2e
            Danielle.           → Playfair Display italic, text-3xl / md:text-5xl, #5a7a5e

[divider]   40px wide, 1px, #9aaa96

[body]      I have a lot of hobbies, but my favorite things to do are drawing
            and writing. And I believe that everybody deserves kindness.
            → DM Sans 13px, #4a5e45, line-height 1.85, max-width 480px

[tags]      Drawing  |  Writing  |  Animals  |  Kindness
            → pill tags, border 0.5px #9aaa96, text #4a5e45, font 11px DM Sans
            → min-h-[36px], rounded-full, px-3 py-1
```

---

### 6-2. Art Portfolio (`components/ArtPortfolio.tsx`)

섹션 헤더: `Art Portfolio` (uppercase, 11px, #2a3d2e, letter-spacing 0.1em)

**폴더 카드 그리드** — `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, gap-4/gap-6

각 카드 (`<Link>`, rounded-lg, border border-divider, bg `#f5f3ee`):
- 상단: 히어로 이미지 — `aspect-[4/3]`, `object-cover`
  - 드라이브 첫 번째 이미지 썸네일 (`sz=w800`)
  - hover 시 `scale-105` 전환
  - 없으면 "No images yet" placeholder
- 하단: 폴더 이름 + `→` 화살표 (hover 시 translate-x-1)
- min-h-[44px] 접근성

**폴더 갤러리 풀페이지** (`app/portfolio/[folder]/page.tsx`):
- 상단: `← Back` (/#portfolio로 링크) + 폴더 이름
- 이미지 없으면 빈 상태 메시지
- 이미지 있으면 `<GalleryGrid>` 렌더링

---

### 6-3. Gallery Grid (`components/GalleryGrid.tsx`)

**Masonry 레이아웃** (CSS columns):
```
columns-1 md:columns-2 lg:columns-3  gap-3
```

- 이미지 원본 비율 유지 (`h-auto`), 크롭 없음
- 각 이미지: `break-inside-avoid`, `mb-3`, rounded-lg, border `1px solid #9aaa96`
- hover 시 `brightness-95`
- 클릭 → Lightbox 오픈

---

### 6-4. Lightbox (`components/Lightbox.tsx`)

- 오버레이: `rgba(42,61,46,0.92)`, fixed inset-0 z-50
- ESC 키로 닫기, 오버레이 클릭으로 닫기
- 열린 동안 `body.overflow = hidden`
- 모바일: `fill` + `object-contain`, 전체 화면
- 데스크탑: 80vw × 80vh 센터 모달

---

### 6-5. Projects (`components/Projects.tsx`)

섹션 헤더: `PROJECTS` + `· Coming soon`

현재 상태: placeholder 카드 2개, opacity 0.5
- `grid-cols-1 md:grid-cols-2`, gap-4/gap-6
- 점선 테두리 박스 (`aspect-[4/3]`, dashed #9aaa96)
- "Project Title", "Short description will go here."
- `Coming soon` badge (pill, 10px)

나중에 프로젝트 추가할 때:
- `app/projects/[slug]/page.tsx`의 `PROJECTS` 객체에 항목 추가
- Hero image + short description → 카드
- 클릭 시 디테일 페이지로 이동

---

### 6-6. About Me (`components/AboutMe.tsx`)

레이아웃: `grid-cols-1 md:grid-cols-2`, gap-8/gap-10

**헤더 행**: `About Me` (왼쪽) / `Interests` (오른쪽) — 같은 가로 줄에 나란히 배치
- 둘 다 동일 스타일: DM Sans medium, uppercase, 11px, #2a3d2e, letter-spacing 0.1em
- 모바일에서는 "Interests" 헤더가 콘텐츠 바로 위에 표시

**왼쪽 — Bio**
```
Seoul Foreign School student who loves art, books, animals, and the outdoors.
Aspiring animal behaviourist
```
- Bio: DM Sans light, 14px, line-height 1.8, #4a5e45
- 직함: DM Sans light, 13px, #7a8f76

**오른쪽 — Interests**
```
Cats  |  Squirrels  |  Dragons  |  Pink & Purple  |  Rollerblades  |  Camping
Watercolor  |  Books  |  Family  |  Friends
```
(pill 태그: rounded-full, border 0.5px #9aaa96, 12px, min-h-[36px])

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
NEXT_PUBLIC_BASE_URL=https://eunsoo-website.vercel.app
```

### 드라이브 폴더 공유 설정
각 폴더: 공유 → "링크 있는 사람 누구나" → 뷰어

### API 구현 (`lib/google-drive.ts`)
```typescript
const FOLDERS: Record<string, string | undefined> = {
  "primary-1-2": process.env.DRIVE_FOLDER_PRIMARY_12,
  "primary-3":   process.env.DRIVE_FOLDER_PRIMARY_3,
  "primary-4":   process.env.DRIVE_FOLDER_PRIMARY_4,
};

export async function getImages(folder: string) {
  const folderId = FOLDERS[folder];
  if (!folderId) return [];

  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files` +
    `?q='${folderId}'+in+parents+and+mimeType+contains+'image/'` +
    `&fields=files(id,name,createdTime,imageMediaMetadata(width,height))` +
    `&orderBy=createdTime` +
    `&key=${process.env.GOOGLE_API_KEY}`,
    { next: { revalidate: 60 } }   // ISR: 60초 캐시
  );
  const data = await res.json();
  return data.files ?? [];
}

// fullsize (lightbox용) — sz=s0 = 원본 크기
export function getDriveImageUrl(fileId: string) {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=s0`;
}

// thumbnail (gallery용) — sz=w800
export function getDriveThumbnailUrl(fileId: string) {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;
}
```

- `imageMediaMetadata(width,height)` 포함 → GalleryGrid에서 원본 비율 사용
- ISR revalidate 60초 → 드라이브 추가 후 최대 60초 내 반영

### 이미지 업데이트 워크플로우
```
은수 드라이브 폴더에 사진 추가
        ↓
최대 60초 후 자동 반영 ✅
(재배포 불필요)
```

---

## 8. Footer (`components/Footer.tsx`)

```
왼쪽: Danielle Eunsoo Kim  (DM Sans medium, sm, #2a3d2e, tracking 0.04em)
오른쪽: 2025               (DM Sans light, sm, #7a8f76)
배경: #f5f3ee, border-top: 1px solid rgba(42,61,46,0.12)
패딩: px-7 py-5
```

---

## 9. SEO (`app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`)

### Metadata (layout.tsx)
```typescript
metadataBase: new URL(baseUrl)
title: "Danielle Eunsoo Kim — Art Portfolio"
description: "Art portfolio of Danielle Eunsoo Kim, a young artist at Seoul Foreign School..."
keywords: ["art portfolio", "kids art", "watercolor", "digital art", "Seoul Foreign School"]
openGraph: { title, description, url, type: "website" }
twitter: { card: "summary_large_image", title, description }
```

### Portfolio 페이지 metadata (portfolio/[folder]/page.tsx)
```typescript
title: `${label} | Danielle Eunsoo Kim`
description: `Artworks from ${label}`
```

### robots.ts
```
Allow: /
Sitemap: ${baseUrl}/sitemap.xml
```

### sitemap.ts
```
/ (priority 1, changeFrequency: weekly)
/portfolio/primary-1-2 (priority 0.8)
/portfolio/primary-3   (priority 0.8)
/portfolio/primary-4   (priority 0.8)
```

---

## 10. Next.js Config (`next.config.mjs`)

이미지 원격 패턴 허용:
```
hostname: drive.google.com      (썸네일/풀사이즈)
hostname: lh3.googleusercontent.com
```

---

## 11. 전체 파일 구조

```
app/
  layout.tsx              ← 폰트 설정, SEO metadata, body 스타일
  page.tsx                ← 메인 페이지 (Nav + Hero + ArtPortfolio + Projects + AboutMe + Footer)
  globals.css             ← Tailwind, scroll-behavior: smooth, body 기본 색상
  robots.ts               ← robots.txt 생성
  sitemap.ts              ← sitemap.xml 생성
  portfolio/[folder]/
    page.tsx              ← 갤러리 풀페이지 (서버 컴포넌트)
  projects/[slug]/
    page.tsx              ← 프로젝트 디테일 (PROJECTS 비어있어 현재 항상 notFound)

components/
  Nav.tsx                 ← sticky 네비게이션 (모바일 햄버거 포함)
  Hero.tsx                ← 히어로 섹션
  ArtPortfolio.tsx        ← 폴더 카드 그리드 (서버 컴포넌트)
  GalleryGrid.tsx         ← Masonry 이미지 그리드 + Lightbox 트리거 (클라이언트)
  Lightbox.tsx            ← 풀스크린 이미지 뷰어 (클라이언트)
  Projects.tsx            ← Coming Soon 플레이스홀더
  AboutMe.tsx             ← Bio + Interests
  Footer.tsx              ← 푸터

lib/
  google-drive.ts         ← getImages, getDriveImageUrl, getDriveThumbnailUrl

tailwind.config.ts        ← 컬러 토큰, 폰트 패밀리 정의
next.config.mjs           ← 이미지 remotePatterns
```
