import { Button } from "./ui/button";

const Header = () => (
  <div className="p-4 pt-8">
    <img src="/logo_black_x320.webp" className="m-auto h-auto w-36" />
    <div className="flex flex-row flex-wrap gap-3">
      <Button className="w-full bg-indigo-600 hover:bg-indigo-700 lg:flex-1">
        <img src="/shoppay.png" className="h-5 w-auto" />
      </Button>
      <Button className="w-full flex-1 bg-amber-400 hover:bg-amber-500">
        <img src="/paypal.svg" className="h-14 w-auto" />
      </Button>
      <Button className="w-full flex-1 bg-black hover:bg-zinc-800">
        <img src="/google-pay.svg" className="h-5 w-auto" />
      </Button>
    </div>
  </div>
);

export default Header;
