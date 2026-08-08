export type ServiceGalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export const FALLBACK_SERVICE_GALLERY: ServiceGalleryImage[] = [
  {
    src: "/images/services/service-fallback-inspect.png",
    alt: "Technician inspecting a home for pest activity",
    caption: "Professional on-site inspection",
  },
  {
    src: "/images/services/service-fallback-treat.png",
    alt: "Professional pest control treatment equipment ready for service",
    caption: "Targeted treatment ready",
  },
];

export const SERVICE_GALLERIES: Record<string, ServiceGalleryImage[]> = {
  "bed-bug-control": [
    {
      src: "/images/services/bed-bug-inspection.png",
      alt: "Technician carefully inspecting a mattress seam for bed bugs",
      caption: "Thorough mattress & furniture inspection",
    },
    {
      src: "/images/services/bed-bug-heat-treatment.png",
      alt: "Professional thermal heat treatment equipment set up in a bedroom",
      caption: "Eco-friendly thermal heat treatment setup",
    },
  ],
  "cockroach-control": [
    {
      src: "/images/services/cockroach-kitchen-inspection.png",
      alt: "Technician inspecting kitchen cabinets and baseboards for cockroaches",
      caption: "Kitchen & harbourage inspection",
    },
    {
      src: "/images/services/cockroach-treatment.png",
      alt: "Technician applying targeted cockroach gel bait treatment in a kitchen",
      caption: "Targeted gel bait treatment",
    },
  ],
  "ant-control": [
    {
      src: "/images/services/ant-trail-kitchen.png",
      alt: "Ant trail along a clean kitchen countertop near the sink",
      caption: "Kitchen trail activity identified",
    },
    {
      src: "/images/services/ant-treatment.png",
      alt: "Technician applying targeted ant treatment along a home baseboard",
      caption: "Source-focused ant treatment",
    },
  ],
  "carpenter-ant-control": [
    {
      src: "/images/services/carpenter-ant-wood-damage.png",
      alt: "Sawdust-like frass near wooden deck trim indicating carpenter ant activity",
      caption: "Wood damage & frass warning signs",
    },
    {
      src: "/images/services/carpenter-ant-treatment.png",
      alt: "Technician inspecting and treating carpenter ant activity near deck and siding",
      caption: "Colony source inspection & treatment",
    },
  ],
  "termite-control": [
    {
      src: "/images/services/termite-mud-tubes.png",
      alt: "Termite mud tubes along a basement foundation wall",
      caption: "Mud tubes & structural warning signs",
    },
    {
      src: "/images/services/termite-infrared.png",
      alt: "Technician using infrared camera to locate hidden termite activity",
      caption: "Infrared nest detection",
    },
  ],
  "wasp-nest-removal": [
    {
      src: "/images/services/wasp-nest-eaves.png",
      alt: "Paper wasp nest under residential eaves",
      caption: "Nest identified under eaves",
    },
    {
      src: "/images/services/wasp-nest-treatment.png",
      alt: "Technician safely treating a wasp nest under house eaves",
      caption: "Safe professional nest removal",
    },
  ],
  "mice-rodent-control": [
    {
      src: "/images/services/mice-rodent-signs.png",
      alt: "Mouse droppings and gnawed packaging along a wall edge",
      caption: "Rodent activity warning signs",
    },
    {
      src: "/images/services/mice-rodent-treatment.png",
      alt: "Technician placing a bait station and checking foundation entry points",
      caption: "Exclusion & control program",
    },
  ],
  "pigeon-control": [
    {
      src: "/images/services/pigeon-roosting.png",
      alt: "Pigeons roosting on a commercial building ledge",
      caption: "Roosting pressure on ledges",
    },
    {
      src: "/images/services/pigeon-netting.png",
      alt: "Professional bird netting installed on a building ledge",
      caption: "Netting & exclusion installed",
    },
  ],
  "droppings-cleanup": [
    {
      src: "/images/services/droppings-cleanup-prep.png",
      alt: "Attic area prepared with protective sheeting for droppings cleanup",
      caption: "Safe cleanup preparation",
    },
    {
      src: "/images/services/droppings-cleanup-work.png",
      alt: "Technician in PPE cleaning and sanitizing a contaminated attic area",
      caption: "PPE cleanup & sanitizing",
    },
  ],
  "disinfection-services": [
    {
      src: "/images/services/disinfection-spray.png",
      alt: "Technician applying disinfectant mist in a clean indoor space",
      caption: "Professional disinfection application",
    },
    {
      src: "/images/services/disinfection-equipment.png",
      alt: "Disinfection equipment and supplies staged for treatment",
      caption: "Hospital-grade sanitizing gear",
    },
  ],
  "spider-control": [
    {
      src: "/images/services/spider-webs.png",
      alt: "Spider webs around a residential window frame and exterior lighting",
      caption: "Web activity around openings",
    },
    {
      src: "/images/services/spider-treatment.png",
      alt: "Technician removing spider webs from eaves and window frames",
      caption: "Web removal & treatment",
    },
  ],
  "vehicle-treatment": [
    {
      src: "/images/services/vehicle-interior-inspection.png",
      alt: "Vehicle interior seats and mats being inspected for pests",
      caption: "Vehicle interior inspection",
    },
    {
      src: "/images/services/vehicle-treatment.png",
      alt: "Technician treating a vehicle cabin for hitchhiking pests",
      caption: "Cabin pest treatment",
    },
  ],
};

export function getServiceGallery(slug: string): ServiceGalleryImage[] {
  return SERVICE_GALLERIES[slug] ?? FALLBACK_SERVICE_GALLERY;
}
