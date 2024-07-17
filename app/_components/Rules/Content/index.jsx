import sections from "@/app/data/rules/rules";

export default function Content() {
  return (
    <div className="container mx-auto text-justify text-[#161414]">
      {sections && Array.isArray(sections) ? (
        sections.map((section, index) => (
          <div key={index} className="my-10">
            <h2
              key={index}
              className="text-xl lg:text-3xl font-bold text-center lg:text-left uppercase"
            >
              {section.title}
            </h2>
            {section.content && (
              <p
                key={index}
                className="lg:pl-20 mt-5 text-[#334155] text-base lg:text-xl my-5 mx-10 lg:mx-0"
              >
                {section.content}
              </p>
            )}
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
                  <h3 className="text-xl lg:text-2xl font-bold my-5 text-center lg:text-left lg:pl-20">
                    {round.title}
                  </h3>
                  <div className="text-[#334155] text-base lg:text-xl lg:pl-20 mx-10 lg:mx-0">
                    {round.content.map((content, index) => (
                      <p key={index} className="mb-2">
                        {content}
                      </p>
                    ))}
                    {round.list && (
                      <ul className="list-disc text-[#334155] text-base lg:text-xl pl-10 lg:pl-20 my-5">
                        {round.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
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
                    {round.content2 && <p className="mb-2">{round.content2}</p>}
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
        ))
      ) : (
        <h1 className="text-2xl text-center mt-10 font-semibold">
          No sections available
        </h1>
      )}
    </div>
  );
}
