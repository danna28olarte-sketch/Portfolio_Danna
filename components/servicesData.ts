import React from "react";
import {
  Workflow,
  Zap,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export type ProjectDetail = {
  company: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  images?: string[];
  aspectRatio?: string;
};

export type Service = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  accent: "blue" | "pink";
  projects: string[];
  projectsDetail: ProjectDetail[];
  cardTitle?: string;
  banner: string;
};

export const EN_SERVICES: Service[] = [
  {
    number: "01",
    title: "AI CONTENT CREATION",
    description:
      "AI content systems to generate images, videos, and campaign assets faster, maintaining visual consistency and reducing production costs.",
    tags: ["AI Content", "Ecommerce", "Meta Ads", "ComfyUI"],
    icon: Sparkles,
    accent: "blue",
    banner: "/assets/images/projects/Banner (IA creation).webp",
    projects: [
      "Product content generation",
      "Creative variations for campaigns",
      "On-brand lifestyle content"
    ],
    projectsDetail: [
      {
        company: "Danna Olarte",
        title: "AI Catalog Shoot",
        description: "Generated catalog and lifestyle assets for an apparel brand, reducing studio shoot costs.",
        image: "/assets/images/projects/service0-project0.webp",
        images: [
          "/assets/images/projects/Imagen 1 Pagu.webp",
          "/assets/images/projects/Imagen 2 Pagu.webp",
          "/assets/images/projects/Imagen 3 Pagu.webp",
          "/assets/images/projects/Imagen 4 Pagu.webp",
          "/assets/images/projects/Imagen 5  Pagu.webp"
        ]
      },
      {
        company: "Danna Olarte",
        title: "Creative Variations",
        description: "High-volume variations for social media ad testing, maintaining brand style.",
        image: "/assets/images/projects/service0-project1.webp",
        images: [
          "/assets/images/projects/velo-slide-1.webp",
          "/assets/images/projects/velo-slide-2.webp",
          "/assets/images/projects/velo-slide-3.webp",
          "/assets/images/projects/velo-slide-4.webp",
          "/assets/images/projects/velo-slide-5.webp"
        ]
      }
    ],
  },
  {
    number: "02",
    title: "AUDIOVISUAL PRODUCTION",
    description:
      "Video production for e-commerce and digital campaigns, creating dynamic, engaging, and optimized assets to capture attention and improve creative performance.",
    tags: ["Video Production", "Ecommerce", "Meta Ads", "Motion"],
    icon: Zap,
    accent: "pink",
    banner: "/assets/images/projects/Banner-Video(Ingles).webp",
    projects: [
      "Product & lifestyle videos",
      "Video creatives for campaigns",
      "Editing, motion & content variations"
    ],
    projectsDetail: [
      {
        company: "Danna Olarte",
        title: "Cinematic Hooks",
        description: "Dynamic video hooks combining stock footage, graphic design and AI voice overs.",
        image: "/assets/images/projects/service1-project0.webp",
        video: "/assets/images/projects/Video Producción (Amper).webm"
      },
      {
        company: "Danna Olarte",
        title: "TikTok Native Spot",
        description: "High-converting UGC-style short-form video edit optimized for TikTok and Reels.",
        image: "/assets/images/projects/Miniatura Colombiana.webp",
        video: "/assets/images/projects/Colombiana Campaña 1_1 (1).webm"
      }
    ],
  },
  {
    number: "03",
    title: "CONTENT AUTOMATION",
    description:
      "Automating creative variation production and asset distribution across your channels using Magnific AI and ComfyUI.",
    tags: ["Magnific AI", "ComfyUI", "API Integrations", "Content Scaling"],
    icon: Workflow,
    accent: "blue",
    banner: "/assets/images/projects/Banner-Automatización(Ingles).webp",
    projects: [
      "Multi-channel campaign asset scaling",
      "Automated design variation production",
      "Dynamic content distribution workflows"
    ],
    projectsDetail: [
      {
        company: "Danna Olarte",
        title: "Batch Banner Creator",
        description: "AI-assisted workflow that generates and crops promotional banners across multiple aspect ratios.",
        image: "/assets/images/projects/Shampoo Prai.webp",
        video: "/assets/images/projects/0807.webm"
      },
      {
        company: "Danna Olarte",
        title: "Multi-channel Scheduler",
        description: "Automated distribution system sending creative variants directly to social channels.",
        image: "/assets/images/projects/service2-project1.webp",
        images: [
          "/assets/images/projects/Comfy (1).webp",
          "/assets/images/projects/Comfy (2).webp",
          "/assets/images/projects/Comfy (3).webp",
          "/assets/images/projects/Comfy (4).webp",
          "/assets/images/projects/Comfy (5).webp",
          "/assets/images/projects/Comfy (7).webp",
          "/assets/images/projects/ComfyUI_temp_inrkh_00004_.webp",
          "/assets/images/projects/ComfyUI-image_4_00001_.webp"
        ]
      }
    ],
  },
];

export const ES_SERVICES: Service[] = [
  {
    number: "01",
    title: "CREACIÓN DE CONTENIDO CON IA",
    description:
      "Sistemas de contenido con IA para crear imágenes, videos y piezas de campaña más rápido, manteniendo consistencia visual y reduciendo costos de producción.",
    tags: ["Contenido IA", "Ecommerce", "Meta Ads", "ComfyUI"],
    icon: Sparkles,
    accent: "blue",
    banner: "/assets/images/projects/Banner (IA creation).webp",
    projects: [
      "Generación de contenido de producto",
      "Variaciones creativas para campañas",
      "Contenido lifestyle on-brand"
    ],
    projectsDetail: [
      {
        company: "Danna Olarte",
        title: "Sesión de Campaña IA",
        description: "Generación de imágenes lifestyle de producto para catálogo, reduciendo costos de sesiones de fotos.",
        image: "/assets/images/projects/service0-project0.webp",
        images: [
          "/assets/images/projects/Imagen 1 Pagu.webp",
          "/assets/images/projects/Imagen 2 Pagu.webp",
          "/assets/images/projects/Imagen 3 Pagu.webp",
          "/assets/images/projects/Imagen 4 Pagu.webp",
          "/assets/images/projects/Imagen 5  Pagu.webp"
        ]
      },
      {
        company: "Danna Olarte",
        title: "Variaciones Creativas",
        description: "Variaciones de alto volumen para testing en pauta digital, manteniendo la estética de marca.",
        image: "/assets/images/projects/service0-project1.webp",
        images: [
          "/assets/images/projects/velo-slide-1.webp",
          "/assets/images/projects/velo-slide-2.webp",
          "/assets/images/projects/velo-slide-3.webp",
          "/assets/images/projects/velo-slide-4.webp",
          "/assets/images/projects/velo-slide-5.webp"
        ]
      }
    ],
  },
  {
    number: "02",
    title: "PRODUCCIÓN AUDIOVISUAL",
    description:
      "Producción de video para ecommerce y campañas digitales, creando piezas dinámicas, atractivas y optimizadas para captar atención y mejorar el rendimiento creativo.",
    tags: ["Video Production", "Ecommerce", "Meta Ads", "Motion"],
    icon: Zap,
    accent: "pink",
    banner: "/assets/images/projects/Banner (Video).webp",
    projects: [
      "Videos de producto y lifestyle",
      "Creatividades en video para campañas",
      "Edición, motion y variaciones de contenido"
    ],
    projectsDetail: [
      {
        company: "Danna Olarte",
        title: "Hooks Cinemáticos",
        description: "Hooks de video dinámicos combinando clips de video, diseño gráfico y voces generadas con IA.",
        image: "/assets/images/projects/service1-project0.webp",
        video: "/assets/images/projects/Video Producción (Amper).webm"
      },
      {
        company: "Danna Olarte",
        title: "Spot Nativo de TikTok",
        description: "Edición dinámica en formato UGC de alta conversión optimizado para TikTok y Reels.",
        image: "/assets/images/projects/Miniatura Colombiana.webp",
        video: "/assets/images/projects/Colombiana Campaña 1_1 (1).webm"
      }
    ],
  },
  {
    number: "03",
    title: "AUTOMATIZACIÓN DE CONTENIDO",
    description:
      "Automatización de la producción de variaciones creativas y escalamiento de activos usando inteligencia artificial y Magnific AI.",
    tags: ["Magnific AI", "ComfyUI", "APIs", "Escalamiento de Contenido"],
    icon: Workflow,
    accent: "blue",
    banner: "/assets/images/projects/Automatización.webp",
    projects: [
      "Escalamiento automático de assets omnicanal",
      "Generación automatizada de piezas de diseño",
      "Flujos automatizados de publicación y distribución"
    ],
    projectsDetail: [
      {
        company: "Danna Olarte",
        title: "Creador de Banners en Lote",
        description: "Flujo asistido por IA para generar y recortar banners promocionales en múltiples relaciones de aspecto.",
        image: "/assets/images/projects/Shampoo Prai.webp",
        video: "/assets/images/projects/0807.webm"
      },
      {
        company: "Danna Olarte",
        title: "Programador Omnicanal",
        description: "Distribución automatizada de activos a múltiples canales digitales sin intervención manual.",
        image: "/assets/images/projects/service2-project1.webp",
        images: [
          "/assets/images/projects/Comfy (1).webp",
          "/assets/images/projects/Comfy (2).webp",
          "/assets/images/projects/Comfy (3).webp",
          "/assets/images/projects/Comfy (4).webp",
          "/assets/images/projects/Comfy (5).webp",
          "/assets/images/projects/Comfy (7).webp",
          "/assets/images/projects/ComfyUI_temp_inrkh_00004_.webp",
          "/assets/images/projects/ComfyUI-image_4_00001_.webp"
        ]
      }
    ],
  },
];
