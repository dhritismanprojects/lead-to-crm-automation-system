import { CanonicalLead } from './canonical-lead';

export function normalizeName(name?: string): string | undefined {
  if (!name) {
    return undefined;
  }

  return name.trim().replace(/\s+/g, ' ');
}

export function normalizeEmail(email?: string): string | undefined {
  if (!email) {
    return undefined;
  }

  return email.trim().toLowerCase();
}

export function normalizePhone(phone?: string): string | undefined {
  if (!phone) {
    return undefined;
  }

  return phone.trim().replace(/[\s()-]/g, '');
}

export function normalizeCompany(company?: string): string | undefined {
  if (!company) {
    return undefined;
  }

  return company.trim().replace(/\s+/g, ' ');
}

export function normalizeMessage(message?: string): string | undefined {
  if (!message) {
    return undefined;
  }

  return message.trim().replace(/\s+/g, ' ');
}

export function normalizeSource(source?: string): string | undefined {
  if (!source) {
    return undefined;
  }

  return source.trim().toLowerCase();
}

export function normalizeTimestamp(
  timestamp?: string,
): string | undefined {
  if (!timestamp) {
    return undefined;
  }

  const date = new Date(timestamp);

  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  return date.toISOString();
}

export function normalizeLead(input: {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  jobTitle?: string;
  message?: string;
  phone?: string;
  companySize?: number;
  source?: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    term?: string;
    content?: string;
  };
  submittedAt?: string;
}): CanonicalLead {
  return {
    firstName: normalizeName(input.firstName),
    lastName: normalizeName(input.lastName),
    email: normalizeEmail(input.email) as string,
    company: normalizeCompany(input.company),
    jobTitle: input.jobTitle?.trim(),
    message: normalizeMessage(input.message),
    phone: normalizePhone(input.phone),
    companySize: input.companySize,
    source: normalizeSource(input.source),
    utm: input.utm,
    submittedAt: normalizeTimestamp(input.submittedAt),
  };
}