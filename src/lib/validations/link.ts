// src/lib/validations/link.ts
import { z } from "zod";

/**
 * Slug rules, validated separately from the main schema because an empty
 * slug is valid at the object level (it means "auto-generate one"), but
 * once a slug IS provided it must satisfy these rules.
 */
export const linkSlugSchema = z
  .string()
  .trim()
  .min(3, "Slug must be at least 3 characters")
  .max(30, "Slug must be at most 30 characters")
  .regex(
    /^[a-zA-Z0-9-]+$/,
    "Slug can only contain letters, numbers, and hyphens",
  );

/**
 * Destination is transformed to always carry a protocol (matching the old
 * normalizeUrl behavior) and then validated as a real URL. Using
 * .transform().pipe() keeps normalization and validation in the same
 * place instead of splitting them across normalize-url.ts and manual
 * try/catch blocks.
 */
const destinationSchema = z
  .string()
  .trim()
  .min(1, "Destination URL is required")
  .transform((value) =>
    /^https?:\/\//i.test(value) ? value : `https://${value}`,
  )
  .pipe(z.url("Please enter a valid URL"));

export const createLinkSchema = z.object({
  title: z.string().trim().max(255, "Title is too long").optional(),
  slug: z.string().trim().optional(),
  destination: destinationSchema,
});

export type CreateLinkInput = z.input<typeof createLinkSchema>;
export type CreateLinkParsed = z.output<typeof createLinkSchema>;

/**
 * Used to validate the id sent to deleteLink. Cheap insurance against a
 * malformed or tampered client call reaching the database layer.
 */
export const deleteLinkSchema = z.object({
  id: z.number().int().positive(),
});
