import { Typography } from "@mui/material";

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
      {eyebrow ? (
        <Typography
          component="p"
          color="secondary"
          className="mb-3 text-sm font-extrabold uppercase"
          sx={{ letterSpacing: "0.12em" }}
        >
          {eyebrow}
        </Typography>
      ) : null}
      <Typography
        variant="h2"
        className="leading-tight"
        sx={{ fontSize: "clamp(1.3rem, 3vw, 2rem)" }}
      >
        {title}
      </Typography>
      {children ? (
        <Typography color="text.secondary" className="mx-auto mt-4 max-w-2xl text-base">
          {children}
        </Typography>
      ) : null}
    </div>
  );
}

export default SectionTitle;
