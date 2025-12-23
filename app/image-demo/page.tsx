import Image from 'next/image';

export default function ImageDemo() {
  return (
    <main className="hero">
      <section className="hero__header">
        <p className="eyebrow">Performance Lab</p>
        <h1>Image Optimization Demo</h1>
        <p className="lede">
          So sánh ảnh thường và next/image. Kích thước cố định giúp giảm CLS vì chỗ trống được
          giữ trước khi ảnh tải xong.
        </p>
      </section>

      <section className="panel-grid">
        <article className="panel">
          <div className="panel__title">Plain img (no optimization)</div>
          <p className="panel__meta">Không có lazy load, không tối ưu, tải trực tiếp</p>
          <div className="image-frame">
            <img src="/large-photo.jpg" alt="Large example" width="800" height="600" />
          </div>
        </article>

        <article className="panel panel--accent">
          <div className="panel__title">Next/Image (optimized)</div>
          <p className="panel__meta">Tự động tối ưu, lazy load, có placeholder</p>
          <div className="image-frame">
            <Image
              src="/large-photo.jpg"
              alt="Optimized example"
              width={800}
              height={600}
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhIQEhIVEhIVFhUVFRUVFRUVFRUWFxUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAABQYDB//EAB4QAQEAAgEFAQAAAAAAAAAAAAABAgMEERIhIjFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAZEQEAAwEBAAAAAAAAAAAAAAABAAIRITH/2gAMAwEAAhEDEQA/ALGC4uFwVYxgkDAx7BwSPy0QK0uV9MIllAvYGiwfv2PlXQyYqlYuyNdoL/2Q=="
            />
          </div>
          <ul className="bullets">
            <li>Kích thước cố định 800x600 giúp đặt chỗ → giảm CLS</li>
            <li>Placeholder blur tránh flash trắng khi tải</li>
            <li>Tự sinh nhiều kích cỡ và dùng lazy load</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
