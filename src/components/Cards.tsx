import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";

interface CardsProps extends PropsWithChildren {}

export const Cards = ({ children }: CardsProps) => {
  return <div className="cards">{children}</div>;
};

interface CardProps {
  linkTo?: string;
  title: string | null | undefined;
  data: { [key: string]: string | number | null | undefined };
}
export const Card = ({ title, data, linkTo }: CardProps) => {
  return (
    <div className="card">
      {title &&
        (linkTo ? (
          <Link className="title" to={linkTo}>
            {title}
          </Link>
        ) : (
          <span className="title">{title}</span>
        ))}
      {Object.entries(data).map(
        ([key, value]) =>
          value && (
            <div key={key}>
              <strong>{key}:</strong> {value}
            </div>
          ),
      )}
    </div>
  );
};
