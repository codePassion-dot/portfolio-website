interface Props {
  classes: string;
}

const DownArrows = ({ classes }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={14}
      class={classes}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 9l8 4 8-4" />
        <path opacity={0.5} d="M0 5l8 4 8-4" />
        <path opacity={0.25} d="M0 1l8 4 8-4" />
      </g>
    </svg>
  );
};

export default DownArrows;
