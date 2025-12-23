import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), 'data', 'data.json');
  const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  return (
    <main className="page-shell">
      <section className="hero hero--glass">
        <p className="eyebrow">Pages Router · SSG</p>
        <h1>Blog SSG với getStaticProps</h1>
        <p className="lede">Danh sách bài viết được build sẵn (Static Generation) từ data JSON.</p>
      </section>

      <section className="card-grid">
        {posts.map((post) => (
          <article className="card" key={post.id}>
            <div className="card__eyebrow">Post #{post.id}</div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link className="button" href={`/blog/${post.id}`}>
              Đọc chi tiết
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
