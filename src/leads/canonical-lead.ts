export type CanonicalLead = {
  firstName?: string;
  lastName?: string;
  email: string;
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
};