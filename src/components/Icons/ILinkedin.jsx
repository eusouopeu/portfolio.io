import './styles.scss';

function ILinkedin(props) {

  return (
    <a id="i-linkedin" href={props.link} target="_blank">
      <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
        <path
        d="M0 2.292C0 1.027 1.052 0 2.35 0h27.3C30.948 0 32 1.027 32 2.292v27.416C32 30.974 30.948 32 29.65 32H2.35C1.052 32 0 30.974 0 29.708V2.292zm9.887 24.495v-14.45H5.084v14.45h4.803zM7.485 10.365c1.675 0 2.718-1.11 2.718-2.497-.032-1.417-1.043-2.496-2.686-2.496S4.8 6.45 4.8 7.868c0 1.387 1.042 2.497 2.654 2.497h.031zm9.818 16.422v-8.07c0-.43.031-.862.158-1.171.347-.863 1.137-1.757 2.464-1.757 1.738 0 2.433 1.325 2.433 3.268v7.73h4.803v-8.285c0-4.438-2.37-6.504-5.53-6.504-2.547 0-3.69 1.4-4.328 2.385v.05h-.032l.032-.05v-2.045H12.5c.063 1.355 0 14.45 0 14.45h4.803z"
        fill="#0065ff"/>
      </svg>
    </a>
  );
};

export default ILinkedin;