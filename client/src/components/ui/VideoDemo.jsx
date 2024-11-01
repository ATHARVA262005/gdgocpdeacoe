import HeroVideoDialog from "./VideoDialog";

export default function HeroVideoDialogDemo() {
  return (
    <div className="relative w-1/2 mx-auto flex  my-10">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/JDRfVU7gkMA?si=CPO-UyilB6altirt"
        thumbnailSrc="https://developers.google.com/community/gdsc/images/gdsc-social-share.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/JDRfVU7gkMA?si=CPO-UyilB6altirt"
        thumbnailSrc="https://developers.google.com/community/gdsc/images/gdsc-social-share.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
