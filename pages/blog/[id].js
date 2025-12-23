import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const dataPath = path.join(process.cwd(), 'data', 'data.json');
  const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const dataPath = path.join(process.cwd(), 'data', 'data.json');
  const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const post = posts.find((p) => p.id.toString() === params.id);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post }, revalidate: 60 };
}

export default function BlogPost({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <main className="page-shell">
        <div className="skeleton">Loading post…</div>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <article className="article-card">
        <p className="eyebrow">Pages Router · Dynamic Route</p>
        <h1>{post.title}</h1>
        <p className="lede">Nội dung được render SSG, fallback: true hỗ trợ build lazy cho đường dẫn mới.</p>
        <div className="article-body">
          <p>{post.content}</p>
        </div>
        <Link className="button button--ghost" href="/blog">← Quay lại danh sách</Link>
      </article>
    </main>
  );
}
