import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import { Input } from "./components/ui/input";
import { cn } from "./lib/utils";
import { ItemImageCard, OrderSummary } from "./OrderSummary";

const LEFT_OVERFLOW = "4rem";
const ELEMENT_SIZE = "600px";

export function App() {
  return (
    <main
      className="flex h-full flex-col bg-white lg:flex-row"
      style={{
        "--left-overflow": "4rem",
        "--element-size": "600px",
      }}
    >
      <div className="flex h-full justify-end bg-white lg:w-[calc(50%_+_var(--left-overflow))]">
        <div className="flex h-full flex-col gap-4 lg:w-[--element-size]">
          <div className="p-4 pt-8">
            <img src="/logo_black_x320.webp" className="m-auto h-auto w-36" />
          </div>
          <div className="border-y border-zinc-300 bg-zinc-100 lg:hidden">
            <ShowOrderSummaryMobile />
          </div>
          <div className="flex flex-col gap-3 px-6">
            <p className="mt-4 text-center text-sm text-zinc-500">
              Express Checkout
            </p>
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
          <div className="relative mt-6 px-6">
            <div className="h-px w-full bg-zinc-300" />
            <div className="absolute inset-x-0 bottom-[-9px] flex justify-center">
              <span className="w-fit bg-white px-2 text-sm text-zinc-500">
                OR
              </span>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-8 px-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline gap-2">
                <h2 className="text-2xl font-semibold">Contact</h2>
                <a href="/login" className="ml-auto text-sm underline">
                  Log in
                </a>
              </div>
              <Input placeholder="Email" />
              <div className="mt-2 flex items-center space-x-2">
                <Checkbox id="terms" defaultChecked />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email me with news and offers
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">Delivery</h2>
              <div className="relative flex h-12 w-full flex-col gap-0.5 rounded-md border border-input bg-background px-3 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                <span className="mt-1 text-xs text-zinc-600">
                  Country/Region
                </span>
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
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">Shipping Method</h2>
              <div className="flex flex-col gap-4 lg:px-4">
                <div className="rounded-md bg-muted p-4 text-muted-foreground">
                  Enter your shipping address to view available shipping
                  methods.
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
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-8 px-6">
            <PaymentMethod />
          </div>
          <div className="mt-6 flex flex-col gap-8 px-6 lg:hidden">
            <h2 className="text-2xl font-semibold">Order summary</h2>

            <OrderSummary />
          </div>
          <div className="mt-6 flex flex-col gap-8 px-6">
            <Button className="h-16 text-lg">Pay Now</Button>
          </div>
          <div className="my-6 flex flex-row flex-wrap gap-2 border-t px-6 pt-6">
            <a className="ml-2 text-xs underline" href="#">
              Refund policy
            </a>
            <a className="ml-2 text-xs underline" href="#">
              Shipping policy
            </a>
            <a className="ml-2 text-xs underline" href="#">
              Privacy policy
            </a>
            <a className="ml-2 text-xs underline" href="#">
              Terms of service
            </a>
            <a className="ml-2 text-xs underline" href="#">
              Contact information
            </a>
          </div>
        </div>
      </div>
      <div className="hidden w-[calc(50%_-_var(--left-overflow))] flex-col gap-4 bg-muted lg:flex">
        <div className="fixed top-8 max-w-[calc(var(--element-size)_-_var(--left-overflow)_*_2)] p-8">
          <OrderSummary />
        </div>
      </div>
    </main>
  );
}

const BillingAddress = () => {
  const [value, setValue] = useState("shipping");
  return (
    <Accordion type="single" value={value} onValueChange={setValue}>
      <AccordionItem value="credit">
        <BulletPointTrigger
          enabled={value === "credit"}
          className="rounded-t-lg"
        >
          Same as shipping address
        </BulletPointTrigger>
      </AccordionItem>
      <AccordionItem value="paypal">
        <BulletPointTrigger
          enabled={value === "paypal"}
          className="rounded-b border-b"
        >
          Use a different shipping address
        </BulletPointTrigger>

        <AccordionContent className="flex flex-col gap-4 rounded-b-lg border-x border-b bg-accent p-6">
          <div className="rounded-md border border-dashed border-blue-500 p-4">
            Placeholder
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const PaymentMethod = () => {
  const [value, setValue] = useState("credit");
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">Payment</h2>
        <p className="text-sm text-muted-foreground">
          All transactions are secure and encrypted.
        </p>
      </div>
      <Accordion type="single" value={value} onValueChange={setValue}>
        <AccordionItem value="credit">
          <BulletPointTrigger
            enabled={value === "credit"}
            className="rounded-t-lg"
          >
            <p>Credit card</p>
            <div className="ml-auto flex items-center gap-1">
              <img src="/mastercard.png" className="h-auto w-10" />
              <img src="/visa.png" className="h-auto w-10" />
              <img src="/amex.png" className="h-auto w-10" />
              <div className="aspect-video w-10 rounded-md border">+5</div>
            </div>
          </BulletPointTrigger>
          <AccordionContent className="flex flex-col gap-4 border-x bg-accent p-6">
            <Input placeholder="Card number" />
            <div className="flex flex-col gap-4 lg:flex-row">
              <Input placeholder="Expiration date (MM/YY)" />
              <Input placeholder="Security code" />
            </div>
            <Input placeholder="Name on card" />
            <div className="mt-2 flex items-center space-x-2">
              <Checkbox id="terms" defaultChecked />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Use shipping address as billing address
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="paypal">
          <BulletPointTrigger enabled={value === "paypal"}>
            <p>Paypal</p>
            <img src="/paypal.svg" className="ml-auto h-auto w-10" />
          </BulletPointTrigger>
          <AccordionContent className="flex flex-col gap-4 border-x bg-accent p-6">
            <div className="rounded-md border border-dashed border-blue-500 p-4">
              Placeholder
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="shoppay">
          <BulletPointTrigger
            enabled={value === "shoppay"}
            className="rounded-b-lg border-b"
          >
            <img src="/shoppay.svg" className="h-6 w-auto" />
            <p>| Pay in full or in installments</p>
          </BulletPointTrigger>
        </AccordionItem>
      </Accordion>
      {value !== "credit" ? (
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">Billing address</h2>
          <BillingAddress />
        </div>
      ) : null}
      {value !== "credit" ? (
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">Remember me</h2>
          <div className="mt-2 flex items-center space-x-2 rounded-md border p-4">
            <Checkbox id="terms" defaultChecked />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Save my information for faster checkout
            </label>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const BulletPointTrigger = ({ enabled, children, className }) => {
  return (
    <AccordionTrigger
      className={cn("justify-start border-x border-t gap-4 px-5", className, {
        "border-black bg-accent border-b rounded-b-none": enabled,
      })}
    >
      <span
        className={cn(
          "flex size-5 items-center justify-center rounded-full border",
          {
            "bg-black": enabled,
          }
        )}
      >
        {enabled ? <span className="size-1.5 rounded-full bg-white" /> : null}
      </span>
      {children}
    </AccordionTrigger>
  );
};

const ShowOrderSummaryMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <Accordion type="single" value={open ? "order-summary" : ""}>
      <AccordionItem value="order-summary">
        <AccordionTrigger
          className="justify-start px-5"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? "Hide" : "Show"} order summary
          <ChevronDownIcon className="ml-2 size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
          <p className="ml-auto text-lg font-bold">$65.00</p>
        </AccordionTrigger>
        <AccordionContent className="border-t px-5 pt-4">
          <OrderSummary />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
