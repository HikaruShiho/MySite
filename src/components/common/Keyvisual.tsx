type Props = {
  title: string;
  sub_title: string;
};

const Keyvisual = ({ title, sub_title }: Props) => {
  return (
    <div className="bg-keyvisual-background bg-cover">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 py-6 md:py-12">
        <h2 className="text-4xl md:text-6xl text-white font-bold">{title}</h2>
        <p className="text-white pt-2 md:pt-4 text-sm md:text-lg">{sub_title}</p>
      </div>
    </div>
  );
};

export default Keyvisual;
