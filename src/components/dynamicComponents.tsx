import dynamic from "next/dynamic";

const Slider = dynamic(() => import("@/components/Slider/Owl"))
const OwlCarousel = dynamic(() => import('@/components/Carousel/OwlCarousel'))
const List = dynamic(() => import('@/components/Lists/Lists'))

export const COMPONENTS: {[key: string]: any} = {
  "slider::slider.Owl": (props: any) => <Slider {...props} />,
  "isite::carousel.owl-carousel": (props: any) => <OwlCarousel {...props} />,
  "isite::lists": (props: any) => <List {...props} />,
};
/*

{
  "nameSpace": "Modules\\Slider\\View\\Components\\Slider\\Owl",
  "systemName": "slider::slider.Owl"
}
{
  "nameSpace": "Modules\\Isite\\View\\Components\\Carousel\\OwlCarousel",
  "systemName": "isite::carousel.owl-carousel"
}
{
  "nameSpace": "Modules\\Isite\\View\\Components\\Lists",
  "systemName": "isite::lists"
}*/