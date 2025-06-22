import Image from "next/image";

const logos = [
  { src: "/logos/mitsubishi.png", alt: "Mitsubishi" },
  { src: "/logos/lg.png", alt: "LG" },
  { src: "/logos/atlantic.png", alt: "Atlantic" },
  { src: "/logos/toshiba.png", alt: "Toshiba" },
  { src: "/logos/hitachi.png", alt: "Hitachi" },
  { src: "/logos/daikin.png", alt: "Daikin" },
  { src: "/logos/atlantic-climatisation.png", alt: "Atlantic Climatisation" },
  { src: "/logos/airwell.png", alt: "Airwell" },
];

export function LogoCloud() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nos marques partenaires
        </h2>
        <div className="mt-10 relative">
          <div
            className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"
            aria-hidden="true"
          />
          <div className="overflow-hidden">
            <div className="flex animate-scroll group">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center" style={{ width: '160px' }}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={60}
                    className="object-contain h-12 w-auto transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
          <div
            className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
} 