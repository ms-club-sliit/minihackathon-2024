import sections from "@/app/data/rules/rules";

export default function Content() {

  const Table = ({ head, body }) => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 ml-0 lg:ml-20">
        <thead className="bg-gray-50">
          <tr>
            {head.map((header, index) => (
              <th key={`header-${index}`} className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {body.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`cell-${rowIndex}-${cellIndex}`} className="px-6 py-4 whitespace-nowrap text-md text-gray-500">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const NestedTable = ({ head, body }) => (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        <table className="min-w-full divide-y divide-gray-200 ml-0 lg:ml-20">
          <thead className="bg-gray-50">
            <tr>
              {head.map((header, index) => (
                <th
                  key={`header-${index}`}
                  className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {body.map((row, rowIndex) => (
              <tr key={`row-${rowIndex}`}>
                <td
                  className="px-4 py-2 text-sm text-gray-500 font-semibold"
                >
                  {row.criteria}
                </td>
                <td
                  className="px-4 py-2 text-md text-gray-500"
                >
                  <ul className="list-disc pl-4">
                    {row.description.map((desc, descIndex) => (
                      <li key={`desc-${rowIndex}-${descIndex}`}>{desc}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const CategoryList = ({ categories }) => (
    <div className="space-y-6">
      {categories.map((category, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-left">
            {index + 1}. {category.name}
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-left">
            {category.content.map((item, itemIndex) => (
              <li key={`item-${index}-${itemIndex}`} className="text-gray-700 text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-screen relative">
      <img
        src="images/design-left.png"
        alt="design-left"
        className="absolute -z-10 opacity-0 lg:opacity-50 lg:w-[30%] left-0 top-1/2"
      />
      <div className="container mx-auto text-justify text-[#161414]">
        {sections && Array.isArray(sections) ? (
          sections.map((section, index) => (
            <div key={`round-${section.title}-${index}`} className="my-10">
              <h3
                key={`prize-${index}`}
                className="text-lg lg:text-2xl font-bold text-center lg:text-left uppercase mx-10 lg:mx-0"
              >
                {section.title}
              </h3>
              {section.content && (
                <p
                  key={index}
                  className="lg:pl-20 mt-5 text-[#334155] text-base lg:text-lg my-5 mx-10 lg:mx-0"
                >
                  {section.content}
                </p>
              )}
              {section.table && (
                <Table head={section.table.head} body={section.table.body} />
              )}
              {section.nestedTable && (
                <NestedTable head={section.nestedTable.head} body={section.nestedTable.body} />
              )}
              {section.list && (
                <ul className="list-disc text-[#334155] text-base lg:text-lg pl-20 lg:pl-40 my-5 mr-10 lg:mr-0">
                  {section.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}

              {section.note && (
                <p
                  key={index}
                  className="text-base lg:text-lg text-[#334155] font-semibold lg:pl-20 my-10 italic mx-10 lg:mx-0"
                >
                  {section.note}
                </p>
              )}
              {section.content2 && (
                <p
                  key={index}
                  className="lg:pl-20 mt-5 text-[#334155] text-base lg:text-lg mx-10 lg:mx-0"
                >
                  {section.content2}
                </p>
              )}

              {section.rounds &&
                (section.rounds.map((round, index) => (
                  <div key={`round-${index}`} className="my-10">
                    <h3 className="text-xl lg:text-2xl font-bold my-5 text-center lg:text-left lg:pl-20">
                      {round.title}
                    </h3>
                    <div className="text-[#334155] text-base lg:text-lg lg:pl-20 mx-10 lg:mx-0">
                      {round.content.map((contentItem, contentIndex) => (
                        <p key={`content-${section.title}-${contentIndex}`} className="mb-2">
                          {contentItem}
                        </p>
                      ))}
                      {round.categories && (
                        <CategoryList categories={round.categories} />
                      )}
                      {round.list && (
                        <ul className="list-disc text-[#334155] text-base lg:text-lg pl-10 lg:pl-20 my-5">
                          {round.list.map((listItem, listIndex) => (
                            <li key={`list-item-${section.title}-${listIndex}`}>{listItem}</li>
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
                            <p className="font-semibold my-10 italic">
                              {round.advancement.note}
                            </p>
                          )}
                        </>
                      )}
                      {round.content2 && (
                        <p className="mb-2">{round.content2}</p>
                      )}
                    </div>
                  </div>)
                ))}

              {section.prizes &&
                (section.prizes.map((prize, index) => (
                  <div
                    key={index}
                    className="text-base lg:text-lg text-[#334155] lg:pl-20 mx-10 lg:mx-0"
                  >
                    <p>
                      <span className="font-semibold">{prize.place}</span>:
                      <span>{prize.description}</span>{' '}
                      <span className="font-semibold">{prize.reward}</span>
                    </p>
                  </div>)
                ))}

            </div>
          ))
        ) : (
          <h1 className="text-2xl text-center mt-10 font-semibold">
            No sections available
          </h1>
        )}
      </div>
    </div>
  );
}
