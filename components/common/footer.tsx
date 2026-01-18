import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-stone-50 mt-20">
      <div className="max-w-6xl mx-auto p-4">
        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-600">
          <p>&copy; {currentYear} Clyre. All rights reserved.</p>
          <p className="text-xs text-center md:text-right">
            This platform provides AI-based support. Not a replacement for
            professional mental health care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
