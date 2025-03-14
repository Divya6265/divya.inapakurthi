export const SkillCard = ({ logo, alt, name }) => {
    return (
      <div className="text-center p-2 md:p-3 min-h-16 min-w-24 md:min-h-24 md:min-w-32  rounded-xl bg-neutral-800/20 shadow shadow-gray-600/20">
        <figure className="text-center text-base">
          <img src={logo} className="mx-auto size-8 md:size-12 mb-2" alt={alt} />
          <figcaption className="text-xs text-gray-600 classNametext-gray-200 md:text-base">
            {name}
          </figcaption>
        </figure>
      </div>
    );
  };

