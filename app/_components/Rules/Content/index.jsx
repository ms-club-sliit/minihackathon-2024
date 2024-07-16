import sections from "@/app/data/rules/rules";

export default function Content() {
  return (
    <div className="container mx-auto text-justify text-[#161414]">
      {sections.map((section, index) => (
        <div key={index} className="my-10">
          <h2
            key={index}
            className="text-xl lg:text-3xl font-bold text-center lg:text-left"
          >
            {section.title}
          </h2>
          <p
            key={index}
            className="lg:pl-20 mt-5 text-[#334155] text-base lg:text-xl my-5 mx-10 lg:mx-0"
          >
            {section.content}
          </p>
          {section.list && (
            <ul className="list-disc text-[#334155] text-base lg:text-xl pl-20 lg:pl-40 my-5 mr-10 lg:mr-0">
              {section.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          {section.note && (
            <p
              key={index}
              className="text-base lg:text-xl text-[#334155] font-semibold lg:pl-20 my-10 italic mx-10 lg:mx-0"
            >
              {section.note}
            </p>
          )}
          {section.content2 && (
            <p
              key={index}
              className="lg:pl-20 mt-5 text-[#334155] text-base lg:text-xl mx-10 lg:mx-0"
            >
              {section.content2}
            </p>
          )}
          {section.rounds &&
            section.rounds.map((round, index) => (
              <div key={index} className="my-10">
                <h3 className="text-xl lg:text-3xl font-bold my-10 text-center lg:text-left">
                  {round.title}
                </h3>
                <div className="text-[#334155] text-base lg:text-xl lg:pl-20 mx-10 lg:mx-0">
                  <p>{round.content}</p>
                  {round.advancement && (
                    <>
                      <h4 className="mt-10 font-bold">
                        {round.advancement.title}
                      </h4>
                      <p>{round.advancement.content}</p>
                      {round.advancement.note && (
                        <p key={index} className="font-semibold my-10 italic">
                          {round.advancement.note}
                        </p>
                      )}
                    </>
                  )}
                  {round.list && (
                    <ul className="list-disc text-[#334155] text-base lg:text-xl pl-10 lg:pl-20 my-5">
                      {round.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          {section.prizes &&
            section.prizes.map((prize, index) => (
              <div
                key={index}
                className="text-base lg:text-xl text-[#334155] lg:pl-20 mx-10 lg:mx-0"
              >
                <p>
                  <span className="font-semibold">{prize.place}</span>:
                  <span>{prize.description}</span>
                  <span className="font-semibold">{prize.reward}</span>
                </p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
