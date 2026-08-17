import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { FORMSUBMIT_ACTION, submitLeadForm, type FormStatus } from "@/lib/forms";
import { absUrl } from "@/lib/seo";

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-primary-dark mb-1.5">
        {label}
        {required && " *"}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}

const statusCopy: Record<FormStatus, string> = {
  idle: "",
  sending: "Sending your request…",
  sent: "Request sent. We’ll reply to your email shortly.",
  activate:
    "Almost there — open jeyaveerfuels@gmail.com and click FormSubmit’s confirmation link once. After that, submissions arrive automatically.",
  error: "Could not send just now. Email us directly or try again.",
};

export function LeadForm({
  subject = "Call Diesel website enquiry",
  nextPath = "/contact?sent=1",
}: {
  subject?: string;
  nextPath?: string;
}) {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const next = await submitLeadForm(form);
      setStatus(next);
      if (next === "sent") form.reset();
    } catch {
      form.submit();
    }
  }

  return (
    <form
      action={FORMSUBMIT_ACTION}
      method="POST"
      onSubmit={onSubmit}
      className="rounded-3xl bg-card border border-border p-8 shadow-elegant space-y-4"
    >
      <h2 className="text-2xl font-display font-bold text-primary-dark">Get a Quote</h2>
      <p className="text-sm text-foreground/60">
        Enquiries go to {COMPANY.formEmail}. We typically respond during business hours.
      </p>

      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={absUrl(nextPath)} />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Company" name="company" />
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Fuel Type" name="fuel_type" placeholder="Diesel / Oil" />
        <Field label="Quantity (L)" name="quantity_litres" type="number" />
        <div className="sm:col-span-2">
          <Field label="Delivery Location" name="delivery_location" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-primary-dark mb-1.5">Message</label>
          <textarea
            name="message"
            rows={4}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
      </div>

      {status !== "idle" && (
        <p
          className={`text-sm leading-relaxed ${
            status === "error" ? "text-destructive" : "text-primary-dark"
          }`}
          role="status"
        >
          {statusCopy[status]}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.01] transition shine-on-hover disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "sending" ? (
          "Sending…"
        ) : status === "sent" ? (
          "Sent — we'll be in touch"
        ) : (
          <>
            Send Request <Send className="size-4" />
          </>
        )}
      </button>
    </form>
  );
}
