/**
 * Shared contact-form option lists and validation, used by both the client
 * form and the server API route so the two can never drift apart.
 */

export const pestOptions = [
  "Bed Bugs",
  "Carpenter Ants",
  "Wasps",
  "Mice or Rodents",
  "Cockroaches",
  "Fleas",
  "Birds or Pigeons",
  "Other",
] as const;

export const propertyTypeOptions = [
  "House",
  "Apartment / Condo",
  "Multi-Unit Building",
  "Hotel / Motel",
  "Senior Residence",
  "School",
  "Healthcare Facility",
  "Office / Retail",
  "Industrial / Warehouse",
  "Other",
] as const;

export const serviceTypeOptions = ["Residential", "Commercial"] as const;

export const contactMethodOptions = ["Phone Call", "Text Message", "Email"] as const;

export const timingOptions = [
  "As soon as possible",
  "Within a few days",
  "Within a couple of weeks",
  "Just researching for now",
] as const;

export const bedroomOptions = ["1", "2", "3", "4", "5", "6+", "Not applicable"] as const;

export const floorOptions = ["1", "2", "3", "4", "5+", "Not applicable"] as const;

export type ContactFormData = {
  fullName: string;
  phone: string;
  email: string;
  propertyType: string;
  pestType: string;
  serviceType: string;
  propertySize: string;
  bedrooms: string;
  floors: string;
  area: string;
  contactMethod: string;
  timing: string;
  message: string;
  consent: boolean;
  /** Honeypot — must remain empty. */
  company: string;
};

export type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

const CANADIAN_PHONE = /^(\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(data: ContactFormData): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.fullName.trim() || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }
  if (!CANADIAN_PHONE.test(data.phone.trim())) {
    errors.phone = "Please enter a valid phone number, e.g. 403-555-0123.";
  }
  if (!EMAIL.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.propertyType) {
    errors.propertyType = "Please select a property type.";
  }
  if (!data.pestType) {
    errors.pestType = "Please select the pest you are dealing with.";
  }
  if (!data.serviceType) {
    errors.serviceType = "Please choose residential or commercial.";
  }
  if (!data.consent) {
    errors.consent = "Please confirm you agree to be contacted.";
  }
  if (data.message.length > 4000) {
    errors.message = "Message is too long (4,000 characters maximum).";
  }

  return errors;
}
