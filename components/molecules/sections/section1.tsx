import { StrokeManagement } from "@/components/molecules/decoration";

export const Section1Text = () => {
  return (
    <div className="flex flex-col gap-y-6 z-10">
      <h1 className="text-h4 md:text-h3 lg:text-h2 xl:text-h1 font-bold text-center lg:text-left">
        Project{" "}
        <span className="relative">
          <span className="relative z-50">Management</span>
          <div className="absolute flex -bottom-3 left-0 z-10">
            <StrokeManagement />
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
