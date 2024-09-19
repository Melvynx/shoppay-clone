import { ChevronDownIcon } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";

const DeliveryForm = () => (
  <div className="flex flex-col gap-4">
    <h2 className="text-2xl font-semibold">Delivery</h2>
    <div className="relative flex h-12 w-full flex-col gap-0.5 rounded-md border border-input bg-background px-3 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
      <span className="mt-1 text-xs text-zinc-600">Country/Region</span>
      <span>United States</span>
      <ChevronDownIcon className="absolute right-2 top-3 text-muted-foreground" />
    </div>
    <div className="flex flex-col gap-4 lg:flex-row">
      <Input placeholder="First name" />
      <Input placeholder="Last name" />
    </div>
    <Input placeholder="Company (optional)" />
    <Input placeholder="Address (35 characters limit)" />
    <Input placeholder="Apartment, suite, etc. (optional)" />
    <div className="flex flex-col gap-4 lg:flex-row">
      <Input placeholder="City" />
      <Input placeholder="State" />
      <Input placeholder="Zip code" />
    </div>
    <Input placeholder="Phone" />
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" defaultChecked />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Text me with news and offers
      </label>
    </div>
  </div>
);

export default DeliveryForm;
