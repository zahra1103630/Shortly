import { z } from "zod";

export const createLinkSchema = z.object({
  title: z.string().max(255, "Title is too long").optional(),

  slug: z.string().max(50, "Slug is too long").optional(),

  destination: z.string().url("Please enter a valid URL"),
});

export type CreateLinkInput = z.infer<typeof createLinkSchema>;
