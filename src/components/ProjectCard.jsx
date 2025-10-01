import React from "react";

const ProjectCard = ({
  icon,
  title,
  link,
  description,
  tags,
  extraLink,
  extraLinkLabel = "Visit",
}) => {
  return (
    <div className="flex gap-4 p-4 rounded-lg bg-white/50 shadow-sm hover:shadow-md transition">
      {/* Icon */}
      <div className="text-3xl flex-shrink-0">{icon}</div>

      {/* Content */}
      <div className="flex-1">
        <h4 className="font-semibold text-lg">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h4>

        <p className="text-sm text-pink-600">{description}</p>

        {/* Tags */}
        <ul className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <li key={index} className="px-2 py-1 text-xs bg-pink-200 rounded">
              {tag}
            </li>
          ))}
        </ul>

        {/* ✅ Optional Extra Link Button */}
        {extraLink && (
          <div className="mt-3">
            <a
              href={extraLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-pink-700 hover:underline"
            >
              {extraLinkLabel} →
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
