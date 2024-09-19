import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";

const ContactForm = () => (
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
);

export default ContactForm;
