import { VelocityScroll } from "./ScrollBasedVelocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="| Hackathon | WorkShop | Webinar | Meetup"
      default_velocity={1}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm md:text-7xl md:leading-[5rem]"
    />
  );
}
