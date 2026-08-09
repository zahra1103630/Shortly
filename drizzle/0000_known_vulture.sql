CREATE TABLE "clicks" (
	"id" serial PRIMARY KEY NOT NULL,
	"link_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "links" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"slug" varchar(50) NOT NULL,
	"title" varchar(255),
	"destination" text NOT NULL,
	"click_count" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "links_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "clicks" ADD CONSTRAINT "clicks_link_id_links_id_fk" FOREIGN KEY ("link_id") REFERENCES "public"."links"("id") ON DELETE cascade ON UPDATE no action;