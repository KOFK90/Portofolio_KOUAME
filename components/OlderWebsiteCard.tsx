import React from "react";

type OlderWebsiteCardProps = {
  title: string;
  description: string;
  link: string;
};


export default function OlderWebsiteCard({ title, description, link }: OlderWebsiteCardProps) {
  return (
    <div className="bg-white border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition shadow-gray-300">
      <div className="w-full h-64 overflow-hidden">
        <iframe
          src={link}
          className="w-full h-full border-none"
          loading="lazy"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <a
          href={link}
          target="_blank"
          className="inline-block mt-2 text-blue-600 hover:underline text-sm font-medium"
        >
          Ouvrir en plein écran →
        </a>
      </div>
    </div>
  );
}


