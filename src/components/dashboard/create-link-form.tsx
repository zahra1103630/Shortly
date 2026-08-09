"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Link as LinkIcon, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { createLink } from "@/actions/link-actions";
import { createLinkSchema, linkSlugSchema } from "@/lib/validations/link";

interface CreateLinkFormProps {
  slug: string;
  setSlug: (value: string) => void;
  onClose: () => void;
}

export default function CreateLinkForm({
  slug,
  setSlug,
  onClose,
}: CreateLinkFormProps) {
  const router = useRouter();

  const [destination, setDestination] = useState("");
  const [title, setTitle] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const parsed = createLinkSchema.safeParse({
      destination,
      title,
      slug,
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }

    if (parsed.data.slug) {
      const slugCheck = linkSlugSchema.safeParse(parsed.data.slug);

      if (!slugCheck.success) {
        toast.error(slugCheck.error.issues[0]?.message ?? "Invalid slug");
        return;
      }
    }

    try {
      setLoading(true);

      const result = await createLink({
        destination: parsed.data.destination,
        slug: parsed.data.slug || undefined,
        title: parsed.data.title || undefined,
      });

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Link created successfully ✨");

      setDestination("");
      setTitle("");
      setSlug("");

      onClose();
      router.refresh();
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong, please try again");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-full space-y-5">
      {/* Destination */}

      <div className="space-y-2">
        <Label
          htmlFor="destination"
          className="
          text-sm
          text-[var(--dashboard-muted)]
          "
        >
          Destination URL
        </Label>

        <Input
          id="destination"
          placeholder="https://example.com/article"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="
          h-11
          w-full
          rounded-xl
          bg-black/20
          border-[var(--dashboard-border)]
          text-[var(--dashboard-text)]
          placeholder:text-gray-500
          focus-visible:ring-[var(--dashboard-green)]
          "
        />
      </div>

      {/* Slug */}

      <div className="space-y-2">
        <Label
          htmlFor="slug"
          className="
          text-sm
          text-[var(--dashboard-muted)]
          "
        >
          Custom slug
          <span className="ml-1 text-xs">(optional)</span>
        </Label>

        <div className="flex flex-wrap gap-2 sm:flex-nowrap">
          <div
            className="
          flex
          shrink-0
          items-center
          rounded-xl
          border
          border-[var(--dashboard-border)]
          bg-black/20
          px-2
          text-xs
          text-gray-500
          sm:px-3
          sm:text-sm
          "
          >
            shortly.app/
          </div>

          <Input
            id="slug"
            placeholder="my-link"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="
          h-11
          min-w-0
          flex-1
          rounded-xl
          bg-black/20
          border-[var(--dashboard-border)]
          "
          />
        </div>

        <p
          className="
        flex
        items-center
        gap-1
        text-xs
        text-gray-500
        "
        >
          <Sparkles size={12} />
          Leave empty to generate automatically
        </p>
      </div>

      {/* Title */}

      <div className="space-y-2">
        <Label
          htmlFor="title"
          className="
          text-sm
          text-[var(--dashboard-muted)]
          "
        >
          Title
          <span className="ml-1 text-xs">(optional)</span>
        </Label>

        <Input
          id="title"
          placeholder="My awesome project"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="
        h-11
        w-full
        rounded-xl
        bg-black/20
        border-[var(--dashboard-border)]
        "
        />
      </div>

      {/* Actions */}

      <div
        className="
      flex
      flex-col-reverse
      gap-3
      pt-3
      sm:flex-row
      sm:justify-end
      "
      >
        <Button
          type="button"
          variant="ghost"
          onClick={onClose}
          disabled={loading}
          className="
        w-full
        rounded-full
        text-gray-400
        hover:text-white
        sm:w-auto
        "
        >
          Cancel
        </Button>

        <Button
          type="submit"
          disabled={loading}
          className="
        w-full
        rounded-full
        px-6
        bg-[var(--dashboard-green)]
        text-black
        hover:bg-green-400
        sm:w-auto
        "
        >
          {loading ? (
            <Loader2 size={15} className="mr-2 animate-spin" />
          ) : (
            <LinkIcon size={15} className="mr-2" />
          )}

          {loading ? "Creating..." : "Create link"}
        </Button>
      </div>
    </form>
  );
}
