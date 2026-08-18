type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const titleColor = tone === "dark" ? "text-white" : "text-ink";
  const descriptionColor = tone === "dark" ? "text-slate-200" : "text-slate";

  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${tone === "dark" ? "eyebrow-on-dark" : ""}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-balance text-3xl font-bold ${titleColor} sm:text-4xl`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-pretty text-base leading-7 ${descriptionColor} sm:text-lg`}>{description}</p>
      ) : null}
    </div>
  );
}
