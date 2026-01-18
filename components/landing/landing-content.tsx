import SectionNavigation from "./section-navigation";

const LandingContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-12 justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <aside className="flex-shrink-0 md:w-48 lg:w-64 mb-10 md:mb-0">
        <div className="sticky top-24">
          <SectionNavigation />
        </div>
      </aside>

      <main className="w-full min-w-0 space-y-12">{children}</main>
    </div>
  );
};

export default LandingContent;
