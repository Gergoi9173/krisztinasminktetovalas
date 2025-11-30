import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import lipPmu1 from "@/assets/gallery/lip-pmu-1.jpg";
import lipClose from "@/assets/gallery/lip-close.jpg";
import lipPmu2 from "@/assets/gallery/lip-pmu-2.jpg";
import browClose from "@/assets/gallery/brow-close.jpg";
import lipPmu3 from "@/assets/gallery/lip-pmu-3.jpg";
import lashLips from "@/assets/gallery/lash-lips.jpg";
import browPmu from "@/assets/gallery/brow-pmu.jpg";
import lashes from "@/assets/gallery/lashes.jpg";
import beforeAfter from "@/assets/gallery/before-after.jpg";
import lipPmuBa1 from "@/assets/gallery/lip-pmu-ba-1.jpg";
import lipLashCollage from "@/assets/gallery/lip-lash-collage.jpg";
import browPmuCollage from "@/assets/gallery/brow-pmu-collage.jpg";
import lipBaRed from "@/assets/gallery/lip-ba-red.jpg";
import lipBrowBa from "@/assets/gallery/lip-brow-ba.jpg";
import lipRedCollage from "@/assets/gallery/lip-red-collage.jpg";
import browLashNatural from "@/assets/gallery/brow-lash-natural.jpg";
import browEyelinerCollage from "@/assets/gallery/brow-eyeliner-collage.jpg";

const galleryImages = [
  { src: lipPmu1, alt: "Ajak sminktetoválás eredmény" },
  { src: lipClose, alt: "Ajak sminktetoválás közeli" },
  { src: lipPmu2, alt: "Ajak permanens smink részletek" },
  { src: browClose, alt: "Szemöldök sminktetoválás részlet" },
  { src: lipPmu3, alt: "Természetes ajak sminktetoválás" },
  { src: lashLips, alt: "Szempilla és ajak kezelés" },
  { src: browPmu, alt: "Szemöldök permanens smink folyamat" },
  { src: lashes, alt: "Pilla lifting eredmény" },
  { src: beforeAfter, alt: "Előtte-utána eredmények" },
  { src: lipPmuBa1, alt: "Ajak sminktetoválás előtte-utána" },
  { src: lipLashCollage, alt: "Ajak és szempilla kezelések" },
  { src: browPmuCollage, alt: "Szemöldök permanens smink kollázs" },
  { src: lipBaRed, alt: "Ajak sminktetoválás előtte-utána piros" },
  { src: lipBrowBa, alt: "Ajak és szemöldök előtte-utána" },
  { src: lipRedCollage, alt: "Piros ajak sminktetoválás részletek" },
  { src: browLashNatural, alt: "Természetes szemöldök és szempilla" },
  { src: browEyelinerCollage, alt: "Szemöldök és szemhéj sminktetoválás" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Munkáim</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tekintsd meg professzionális munkáimat és eredményeimet
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg bg-muted group cursor-pointer"
              onClick={() => setSelectedImage(image)}
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

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
