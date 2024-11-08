import Expander from "@/components/Expander";

const SegurosExpansor = ({ lista }) => {
  return (
    <>
      {lista.map((item, i) => (
        <Expander key={i} item={item} />
      ))}
    </>
  );
};

export default SegurosExpansor;
