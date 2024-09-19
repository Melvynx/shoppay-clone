import { ItemImageCard } from "../OrderSummary";
import { Button } from "./ui/button";

const ShippingMethod = () => (
  <div className="flex flex-col gap-4 lg:px-4">
    <div className="rounded-md bg-muted p-4 text-muted-foreground">
      Enter your shipping address to view available shipping methods.
    </div>
    <p className="text-center text-sm">
      You're <b>$85.00</b> away from free shipping
    </p>
    <div className="flex h-3 items-center justify-center rounded-full border px-1">
      <div className="h-1 w-full rounded-full bg-black"></div>
    </div>
    <div className="mt-6 flex items-center gap-4">
      <ItemImageCard imageUrl="/ac-adapter.png" />
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold">
          AC Adapter - 65W | Slim | Carbide
        </p>
        <p className="text-sm">$65.00</p>
      </div>
      <Button variant="outline" className="ml-auto w-fit">
        Add
      </Button>
    </div>
    <div className="flex items-center gap-4">
      <ItemImageCard imageUrl="/chargekey.png" />
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold">Chargekey</p>
        <p className="text-sm">$35.00</p>
      </div>
      <Button variant="outline" className="ml-auto w-fit">
        Add
      </Button>
    </div>
  </div>
);

export default ShippingMethod;
