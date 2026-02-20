import Link from 'next/link';
import Image from 'next/image';

export default function Card({ title, summary, coverImage, slug, basePath }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {coverImage && (
        <div className="relative h-48 w-full">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{summary}</p>
        <Link
          href={`/${basePath}/${slug}`}
          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
        >
          Leer más →
        </Link>
      </div>
    </div>
  );
}