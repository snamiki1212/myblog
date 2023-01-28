import type { CollectionEntry } from "astro:content";
import { renderMeta } from "../utils/meta";

type BlogEntry = CollectionEntry<"blog">;
interface Props {
  entry: BlogEntry;
}

const toPostUrl = (entry: BlogEntry): string => `/${entry.slug}`;

export const PostCard = ({ entry }: Props) => {
  const category = entry.data.category;
  const tags = entry.data.tags;
  return (
    <a
      href={toPostUrl(entry)}
      className="hover:-translate-y-1 transition-all duration-200"
    >
      <div className="indicator">
        <span className="indicator-item badge badge-primary">{category}</span>
        <div className="card card-compact hover:bg-base-100 w-96 h-48 bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{entry.data.title}</h2>
            <div className="card-actions">
              <div className="flex flex-row flex-wrap justify-end gap-2 w-full">
                {tags.map((tag) => (
                  <div className="badge badge-lg badge-outline normal-case">
                    {renderMeta({ title: tag })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
