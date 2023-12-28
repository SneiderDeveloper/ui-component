import dynamic from "next/dynamic";

const Slider = dynamic(() => import("@/components/Slider/Owl"))
export const COMPONENTS: {[key: string]: any} = {
  "slider::slider.Owl": (props: any) => <Slider {...props} />,
};