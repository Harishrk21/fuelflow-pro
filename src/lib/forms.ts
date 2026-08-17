import { COMPANY } from "./company";

export const FORMSUBMIT_EMAIL = COMPANY.formEmail;
export const FORMSUBMIT_ACTION = `https://formsubmit.co/${FORMSUBMIT_EMAIL}`;
export const FORMSUBMIT_AJAX = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;

export type FormStatus = "idle" | "sending" | "sent" | "activate" | "error";

type FormSubmitResponse = {
  success?: boolean | string;
  message?: string;
};

export async function submitLeadForm(form: HTMLFormElement): Promise<FormStatus> {
  const data = new FormData(form);
  if (String(data.get("_honey") ?? "").trim()) {
    return "sent";
  }

  const payload: Record<string, string> = {};
  data.forEach((value, key) => {
    if (typeof value === "string") payload[key] = value;
  });

  const response = await fetch(FORMSUBMIT_AJAX, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = (await response.json().catch(() => ({}))) as FormSubmitResponse;
  const success = result.success === true || result.success === "true";
  const message = (result.message ?? "").toLowerCase();

  if (success) return "sent";
  if (message.includes("activate") || message.includes("confirm")) return "activate";
  if (!response.ok) throw new Error(result.message || "FormSubmit request failed");
  return "error";
}
