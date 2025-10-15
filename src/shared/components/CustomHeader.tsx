interface CustomHeaderProps {
  title: string;
  subtitle?: string;
}

export const CustomHeader = (props: CustomHeaderProps) => {
  return (
    <div className="content-center">
      <h1>{props.title}</h1>
      {props.subtitle && <p>{props.subtitle}</p>}
    </div>
  );
};
