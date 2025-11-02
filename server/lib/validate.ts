/* eslint-disable @typescript-eslint/no-explicit-any */

export type FieldError = { field: string; message: string };

export type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; errors: FieldError[] };

export type StringRule = {
  type: "string";
  required?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
  allowNewlines?: boolean;
  toLower?: boolean;
  trim?: boolean;
};

export type EmailRule = {
  type: "email";
  required?: boolean;
  max?: number;
};

export type UrlRule = {
  type: "url";
  required?: boolean;
  max?: number;
  protocols?: Array<"http" | "https">;
};

export type PhoneRule = {
  type: "phone";
  required?: boolean;
  max?: number;
  minDigits?: number;
  maxDigits?: number;
};

export type EnumRule = {
  type: "enum";
  required?: boolean;
  values: string[];
  toLower?: boolean;
};

export type ArrayRule =
  | {
      type: "array";
      required?: boolean;
      maxItems?: number;
      unique?: boolean;
      items: StringRule | EnumRule;
    }
  | {
      type: "array";
      required?: boolean;
      maxItems?: number;
      unique?: boolean;
      items: (StringRule | EnumRule)[];
    };

export type SchemaRule = StringRule | EmailRule | UrlRule | PhoneRule | EnumRule | ArrayRule;

export type Schema<T extends Record<string, any> = Record<string, any>> = {
  [K in keyof T]: SchemaRule;
};

export interface BookingPayload {
  name: string;
  email: string;
  company?: string;
  website?: string;
  phone?: string;
  message?: string;
  source?: string;
}

export interface QuotePayload {
  name: string;
  email: string;
  company?: string;
  website?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  details?: string;
  source?: string;
}

const CONTROL_CHARS_REGEX = /[\u0000-\u001F\u007F]/g;
const MULTI_SPACE_REGEX = /[ \t]{2,}/g;
const LINE_BREAK_REGEX = /\r\n|\r|\n/g;

export function safeString(
  value: unknown,
  opts?: { allowNewlines?: boolean; max?: number; trim?: boolean; toLower?: boolean }
): string | null {
  if (value === undefined || value === null) return null;
  let s = String(value);
  s = s.replace(CONTROL_CHARS_REGEX, "");
  const allowNewlines = !!opts?.allowNewlines;
  if (!allowNewlines) {
    s = s.replace(LINE_BREAK_REGEX, " ");
  } else {
    // normalize line endings to \n
    s = s.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  }
  // collapse spaces (but not newlines if allowed)
  if (allowNewlines) {
    s = s
      .split("\n")
      .map((line) => line.replace(MULTI_SPACE_REGEX, " ").trim())
      .join("\n");
  } else {
    s = s.replace(MULTI_SPACE_REGEX, " ");
    if (opts?.trim !== false) s = s.trim();
  }
  if (opts?.trim !== false) s = s.trim();
  if (opts?.max && s.length > opts.max) {
    s = s.slice(0, opts.max);
  }
  if (opts?.toLower) {
    s = s.toLowerCase();
  }
  return s;
}

export function isEmail(email: string): boolean {
  if (!email || email.length > 320) return false;
  // Simple and pragmatic RFC 5322 subset
  const re =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
  return re.test(email);
}

export function normalizeEmail(value: unknown, max = 320): string | null {
  const s = safeString(value, { toLower: true, max });
  if (!s) return null;
  return isEmail(s) ? s : null;
}

export function isHttpUrl(url: string, protocols: Array<"http" | "https"> = ["http", "https"]): boolean {
  try {
    const u = new URL(url);
    return protocols.includes(u.protocol.replace(":", "") as "http" | "https");
  } catch {
    return false;
  }
}

export function normalizeUrl(value: unknown, opts?: { max?: number; protocols?: Array<"http" | "https"> }): string | null {
  let s = safeString(value, { trim: true, max: opts?.max ?? 2048 });
  if (!s) return null;
  // Prepend protocol if missing and looks like a domain
  if (!/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(s) && /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(s)) {
    s = "https://" + s;
  }
  return isHttpUrl(s, opts?.protocols) ? s : null;
}

export function normalizePhone(value: unknown, opts?: { minDigits?: number; maxDigits?: number }): string | null {
  const s = safeString(value);
  if (!s) return null;
  const digits = s.replace(/[^\d+]/g, "");
  const onlyDigits = digits.replace(/\D/g, "");
  const min = opts?.minDigits ?? 7;
  const max = opts?.maxDigits ?? 15;
  if (onlyDigits.length < min || onlyDigits.length > max) return null;
  // Try to format to E.164-like (+<digits>)
  const e164 = onlyDigits.length >= 10 ? `+${onlyDigits}` : onlyDigits;
  return e164;
}

export function pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const out: Partial<T> = {};
  for (const k of keys) {
    if (k in obj) (out as any)[k] = obj[k];
  }
  return out as Pick<T, K>;
}

export function redactForLog<T extends Record<string, any>>(data: T, sensitive: string[] = ["email", "phone"]): T {
  const clone: any = Array.isArray(data) ? [...(data as any)] : { ...(data as any) };
  for (const key of Object.keys(clone)) {
    if (sensitive.includes(key)) {
      const v = String(clone[key] ?? "");
      const masked = v.length <= 4 ? "***" : `${"*".repeat(Math.max(0, v.length - 4))}${v.slice(-4)}`;
      clone[key] = masked;
    } else if (typeof clone[key] === "object" && clone[key] !== null) {
      clone[key] = redactForLog(clone[key], sensitive);
    }
  }
  return clone;
}

function addError(errors: FieldError[], field: string, message: string) {
  errors.push({ field, message });
}

export function validateSchema<T extends Record<string, any>>(
  input: any,
  schema: Schema<T>
): ValidationResult<T> {
  const errors: FieldError[] = [];
  const out: Record<string, any> = {};

  const provided = (field: string) => input != null && Object.prototype.hasOwnProperty.call(input, field);

  for (const key in schema) {
    const rule = schema[key] as SchemaRule;
    const hasValue = provided(key);
    const raw = hasValue ? (input as any)[key] : undefined;

    switch (rule.type) {
      case "string": {
        if (!hasValue || raw == null || raw === "") {
          if (rule.required) addError(errors, key, "This field is required.");
          break;
        }
        const s = safeString(raw, {
          allowNewlines: rule.allowNewlines,
          max: rule.max ?? undefined,
          trim: rule.trim !== false,
          toLower: rule.toLower,
        });
        if (!s) {
          addError(errors, key, "Invalid text.");
          break;
        }
        if (rule.min && s.length < rule.min) addError(errors, key, `Must be at least ${rule.min} characters.`);
        if (rule.max && s.length > rule.max) addError(errors, key, `Must be at most ${rule.max} characters.`);
        if (rule.pattern && !rule.pattern.test(s)) addError(errors, key, "Invalid format.");
        if (!errors.find((e) => e.field === key)) out[key] = s;
        break;
      }
      case "email": {
        if (!hasValue || raw == null || raw === "") {
          if (rule.required) addError(errors, key, "Email is required.");
          break;
        }
        const s = normalizeEmail(raw, rule.max ?? 320);
        if (!s) {
          addError(errors, key, "Invalid email.");
          break;
        }
        out[key] = s;
        break;
      }
      case "url": {
        if (!hasValue || raw == null || raw === "") {
          if (rule.required) addError(errors, key, "URL is required.");
          break;
        }
        const s = normalizeUrl(raw, { max: rule.max ?? 2048, protocols: rule.protocols ?? ["http", "https"] });
        if (!s) {
          addError(errors, key, "Invalid URL.");
          break;
        }
        out[key] = s;
        break;
      }
      case "phone": {
        if (!hasValue || raw == null || raw === "") {
          if (rule.required) addError(errors, key, "Phone is required.");
          break;
        }
        const s = normalizePhone(raw, { minDigits: rule.minDigits, maxDigits: rule.maxDigits });
        if (!s) {
          addError(errors, key, "Invalid phone number.");
          break;
        }
        if (rule.max && s.length > rule.max) addError(errors, key, `Must be at most ${rule.max} characters.`);
        if (!errors.find((e) => e.field === key)) out[key] = s;
        break;
      }
      case "enum": {
        if (!hasValue || raw == null || raw === "") {
          if (rule.required) addError(errors, key, "This field is required.");
          break;
        }
        let s = safeString(raw, { toLower: rule.toLower !== false }); // default toLower true
        if (!s) {
          addError(errors, key, "Invalid value.");
          break;
        }
        if (rule.toLower !== false) s = s.toLowerCase();
        const allowed = rule.values.map((v) => (rule.toLower !== false ? v.toLowerCase() : v));
        if (!allowed.includes(s)) {
          addError(errors, key, "Invalid option.");
          break;
        }
        out[key] = s;
        break;
      }
      case "array": {
        if (!hasValue || raw == null) {
          if (rule.required) addError(errors, key, "This field is required.");
          break;
        }
        if (!Array.isArray(raw)) {
          addError(errors, key, "Must be an array.");
          break;
        }
        const arr: any[] = [];
        for (let i = 0; i < raw.length; i++) {
          const v = raw[i];
          const itemRule = Array.isArray((rule as any).items) ? (rule as any).items[i] ?? (rule as any).items[0] : (rule as any).items;
          if (!itemRule) continue;

          if (itemRule.type === "string") {
            const s = safeString(v, {
              allowNewlines: (itemRule as StringRule).allowNewlines,
              max: (itemRule as StringRule).max ?? undefined,
              trim: (itemRule as StringRule).trim !== false,
              toLower: (itemRule as StringRule).toLower,
            });
            if (!s) continue;
            if ((itemRule as StringRule).min && s.length < (itemRule as StringRule).min) continue;
            if ((itemRule as StringRule).pattern && !(itemRule as StringRule).pattern!.test(s)) continue;
            arr.push(s);
          } else if (itemRule.type === "enum") {
            let s = safeString(v, { toLower: (itemRule as EnumRule).toLower !== false });
            if (!s) continue;
            if ((itemRule as EnumRule).toLower !== false) s = s.toLowerCase();
            const allowed = (itemRule as EnumRule).values.map((val) =>
              (itemRule as EnumRule).toLower !== false ? val.toLowerCase() : val
            );
            if (!allowed.includes(s)) continue;
            arr.push(s);
          }
        }
        if (rule.maxItems && arr.length > rule.maxItems) arr.length = rule.maxItems;
        if (rule.unique) {
          const seen = new Set<string>();
          const uniq: any[] = [];
          for (const x of arr) {
            const k = typeof x === "string" ? x : JSON.stringify(x);
            if (!seen.has(k)) {
              seen.add(k);
              uniq.push(x);
            }
          }
          out[key] = uniq;
        } else {
          out[key] = arr;
        }
        break;
      }
      default:
        break;
    }
  }

  if (errors.length) return { ok: false, errors };
  return { ok: true, data: out as T };
}

// Built-in validators for our common handlers

export function validateBookingPayload(input: any): ValidationResult<BookingPayload> {
  const schema: Schema<BookingPayload> = {
    name: { type: "string", required: true, min: 2, max: 100 },
    email: { type: "email", required: true, max: 320 },
    company: { type: "string", required: false, max: 120 },
    website: { type: "url", required: false, max: 2048, protocols: ["http", "https"] },
    phone: { type: "phone", required: false, minDigits: 7, maxDigits: 15, max: 20 },
    message: { type: "string", required: false, max: 2000, allowNewlines: true },
    source: { type: "string", required: false, max: 120 },
  };
  return validateSchema<BookingPayload>(input, schema);
}

export function validateQuotePayload(input: any): ValidationResult<QuotePayload> {
  const schema: Schema<QuotePayload> = {
    name: { type: "string", required: true, min: 2, max: 100 },
    email: { type: "email", required: true, max: 320 },
    company: { type: "string", required: false, max: 120 },
    website: { type: "url", required: false, max: 2048, protocols: ["http", "https"] },
    phone: { type: "phone", required: false, minDigits: 7, maxDigits: 15, max: 20 },
    projectType: { type: "string", required: false, max: 120 },
    budget: { type: "string", required: false, max: 120 },
    timeline: { type: "string", required: false, max: 120 },
    details: { type: "string", required: false, max: 4000, allowNewlines: true },
    source: { type: "string", required: false, max: 120 },
  };
  return validateSchema<QuotePayload>(input, schema);
}

// Lightweight spam checks
export function basicSpamCheck(input: Record<string, any>): { isSpam: boolean; reason?: string } {
  // Honeypot conventions
  const honeypots = ["hp", "honeypot", "_h", "_hp", "_gotcha", "fax"];
  for (const h of honeypots) {
    const v = input[h];
    if (typeof v === "string" && v.trim().length > 0) {
      return { isSpam: true, reason: `honeypot:${h}` };
    }
  }

  // Link heavy messages
  const textFields = ["message", "details", "comments", "notes"];
  for (const f of textFields) {
    const v = input[f];
    if (typeof v === "string") {
      const urlCount = (v.match(/https?:\/\/|www\./gi) || []).length;
      if (urlCount >= 5) return { isSpam: true, reason: "too_many_links" };
      if (/(viagra|casino|bitcoin investment|loan approval)/i.test(v)) return { isSpam: true, reason: "banned_terms" };
    }
  }

  // Repeated characters
  const allValues = Object.values(input).filter((x) => typeof x === "string") as string[];
  const joined = allValues.join(" ");
  if (/(.)\1{9,}/.test(joined)) return { isSpam: true, reason: "repeated_chars" };

  return { isSpam: false };
}