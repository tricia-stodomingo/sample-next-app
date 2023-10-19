// lib/cosmic.ts
import { createBucketClient } from "@cosmicjs/sdk";
import { Page } from "./types";

const cosmic = createBucketClient({
  bucketSlug: "sample-next-app-production",
  readKey: "RHQOeo9aVakDofSaEF1dr6oWegryGyYBV8i8slzbTatju7c7E6",
});

export default cosmic;

export async function getAllPosts(): Promise<Page[]> {
  try {
    // Get all posts
    const data: any = await Promise.resolve(
      cosmic.objects
        .find({
          type: "pages",
        })
        .props("slug,title,metadata")
        .depth(1)
    );
    const pages: Page[] = await data.objects;
    return Promise.resolve(pages);
  } catch (error) {
    console.log("Oof", error);
  }
  return Promise.resolve([]);
}
