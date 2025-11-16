import lipPmu1 from "@/assets/gallery/lip-pmu-1.jpg";
import makeup1 from "@/assets/gallery/makeup-1.jpg";
import lipClose from "@/assets/gallery/lip-close.jpg";
import lipPmu2 from "@/assets/gallery/lip-pmu-2.jpg";
import browClose from "@/assets/gallery/brow-close.jpg";
import lipPmu3 from "@/assets/gallery/lip-pmu-3.jpg";
import lashLips from "@/assets/gallery/lash-lips.jpg";
import browPmu from "@/assets/gallery/brow-pmu.jpg";
import lashes from "@/assets/gallery/lashes.jpg";
import beforeAfter from "@/assets/gallery/before-after.jpg";

const galleryImages = [
  { src: lipPmu1, alt: "Ajak sminktetoválás eredmény" },
  { src: makeup1, alt: "Professzionális smink" },
  { src: lipClose, alt: "Ajak sminktetoválás közeli" },
  { src: lipPmu2, alt: "Ajak permanens smink részletek" },
  { src: browClose, alt: "Szemöldök sminktetoválás részlet" },
  { src: lipPmu3, alt: "Természetes ajak sminktetoválás" },
  { src: lashLips, alt: "Szempilla és ajak kezelés" },
  { src: browPmu, alt: "Szemöldök permanens smink folyamat" },
  { src: lashes, alt: "Pilla lifting eredmény" },
  { src: beforeAfter, alt: "Előtte-utána eredmények" },
];

const Gallery = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Munkáink</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tekintse meg professzionális munkáinkat és eredményeinket
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg bg-muted group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
