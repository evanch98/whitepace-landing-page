import { Stroke } from "@/components/molecules/decoration";

export const Section1Text = () => {
  return (
    <div className="flex flex-col gap-y-6 z-10">
      <h1 className="text-h4 md:text-h3 lg:text-h2 xl:text-h1 font-bold text-center lg:text-left">
        Project{" "}
        <span className="relative">
          <span className="relative z-50">Management</span>
          <div className="absolute flex -bottom-3 left-0 z-10">
            <Stroke
              className="w-[228px] h-[26px] md:w-[345px] md:h-[31px] lg:w-[418px] lg:h-[38px] xl:w-[515px] xl:h-[36px] flex-shrink-0"
              imgSrc="/assets/stroke.svg"
            />
          </div>
        </span>
      </h1>
      <p className="text-p2 text-center lg:text-left">
        Images, videos, PDFs, and audio files are supported. Create math
        expressions and diagrams directly from the app. Take photos with the
        mobile app and save them to a note.
      </p>
    </div>
  );
};

export const Section2Text = () => {
  return (
    <div className="flex flex-col gap-y-6 z-10">
      <h1 className="text-h4 md:text-h3 lg:text-h2 xl:text-h1 font-bold text-center lg:text-left">
        Work{" "}
        <span className="relative">
          <span className="relative z-50">together</span>
          <div className="absolute flex -bottom-1 left-0 z-10">
            <Stroke
              className="w-[169px] h-[25px] md:w-[224px] md:h-[31px] lg:w-[266px] lg:h-[24px] xl:w-[298px] xl:h-[28px] flex-shrink-0"
              imgSrc="/assets/stroke-1.svg"
            />
          </div>
        </span>
      </h1>
      <p className="text-p2 text-center lg:text-left">
        With whitepace, share your notes with your colleagues and collaborate on
        them. You can also publish a note to the internet and share the URL with
        others.
      </p>
    </div>
  );
};
