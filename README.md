# Module 6 – Advanced Next.js (Labs)

**Student:** Pham Quoc Vinh — **ID:** 23521794

## Nội dung đã hoàn thành (không bao gồm Small Project)
- Exercise 1 (Pages Router): Blog SSG với getStaticProps, getStaticPaths (fallback: true), dữ liệu tĩnh `data/data.json`.
- Exercise 2 (App Router): Dashboard server component (fetch giả lập) + client component toggle theme, layout sidebar.
- Exercise 3: API route `/api/secret` + middleware kiểm `x-api-key` từ `.env.local`.
- Exercise 4: Image & font optimization (so sánh `<img>` vs `next/image`, font Roboto tự host via `next/font/google`).

## Cấu trúc
- `pages/blog/*` — Pages Router cho Blog SSG.
- `app/dashboard/*` — Dashboard (App Router).
- `app/api/secret/route.ts` — API JSON.
- `middleware.ts` — Check `x-api-key`.
- `app/image-demo/page.tsx` — Demo tối ưu ảnh.
- `public/large-photo.jpg` — Ảnh độ phân giải lớn.
- `app/layout.tsx` + `app/globals.css` — Font & global styles.

## Chạy dự án
```bash
npm install
npm run dev
```
- Blog: http://localhost:3000/blog
- Bài viết: http://localhost:3000/blog/1
- Dashboard: http://localhost:3000/dashboard
- Image demo: http://localhost:3000/image-demo
- API: http://localhost:3000/api/secret (gửi header `x-api-key` khớp `.env.local`)

## Ghi chú
- Không có nội dung Small Project/Capstone theo yêu cầu.
- Font Roboto được tự host qua `next/font/google` (cần mạng lần build đầu).
- `fallback: true` có trạng thái loading trong trang chi tiết blog.
