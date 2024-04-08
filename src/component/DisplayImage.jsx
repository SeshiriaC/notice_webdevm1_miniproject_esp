import { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";
import ai1Image from "../images/ai1noDetails.png";
import vr1Image from "../images/vr1noDetails.png";
import neurolinkImage from "../images/neurolinknoDetails.png";

function MyImage() {
  const [images, setImages] = useState(null);
  const responsiveOptions = [
    {
      breakpoint: "991px",
    },
    {
      breakpoint: "767px",
    },
    {
      breakpoint: "575px",
    },
  ];

  useEffect(() => {
    setImages([
      {
        itemImageSrc: ai1Image,
        alt: "Affiche de l'évènement Today 2 Tommorow",
      },
      {
        itemImageSrc: vr1Image,
        alt: "Affiche de l'évènement Vision 2.0",
      },
      {
        itemImageSrc: neurolinkImage,
        alt: "Affiche de l'évènement The NeuroLink Experience",
      },
    ]);
  }, []);

  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  return (
    <div className="card">
      <Galleria
        value={images}
        responsiveOptions={responsiveOptions}
        style={{ maxWidth: "720px" }}
        item={itemTemplate}
        showThumbnails={false}
        circular
        autoPlay
        transitionInterval={2000}
      />
    </div>
  );
}

export default MyImage;
