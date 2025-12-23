import Link from 'next/link';

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero hero--glass">
        <p className="eyebrow">Module 6 · Pham Quoc Vinh · 23521794</p>
        <h1>Next.js Advanced Exercises</h1>
        <p className="lede">Chọn bài tập để xem kiến trúc Pages Router, App Router, API và tối ưu hóa hiệu năng.</p>
      </section>

      <section className="card-grid">
        <article className="card">
          <div className="card__eyebrow">Pages Router</div>
          <h2>Blog SSG</h2>
          <p>File-based routing, getStaticProps, getStaticPaths, fallback.</p>
          <Link className="button" href="/blog">Xem Blog</Link>
        </article>

        <article className="card">
          <div className="card__eyebrow">App Router</div>
          <h2>Dashboard Server/Client</h2>
          <p>Server Component fetch + Client Component toggle theme.</p>
          <Link className="button" href="/dashboard">Vào Dashboard</Link>
        </article>

        <article className="card">
          <div className="card__eyebrow">Performance</div>
          <h2>Image Optimization</h2>
          <p>So sánh &lt;img&gt; và next/image, CLS thấp hơn.</p>
          <Link className="button" href="/image-demo">Xem Demo Ảnh</Link>
        </article>
      </section>
    </main>
  );
}
