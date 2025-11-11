import Image from "next/image";

export default function ProductImage({ src, alt }) {
  return (
    <div className="flex justify-center">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className="object-contain"
        priority
      />
    </div>
  );
}
