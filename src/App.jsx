import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import ContactForm from "./components/ContactForm";
import DeliveryForm from "./components/DeliveryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ShippingMethod from "./components/ShippingMethod";
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
import { OrderSummary } from "./OrderSummary";

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
        <div className="flex size-full flex-col gap-4 lg:w-[--element-size]">
          <Header />
          <div className="border-y border-zinc-300 bg-zinc-100 lg:hidden">
            <ShowOrderSummaryMobile />
          </div>
          <div className="flex flex-col gap-3 px-6">
            <ContactForm />
            <DeliveryForm />
            <ShippingMethod />
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
          <Footer />
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
