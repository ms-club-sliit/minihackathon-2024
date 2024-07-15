import React from 'react';

const RulesSections = ({ sections }) => {
  return (
    <div>
      {sections.map((section, index) => (
        <div key={index} className={section.className}>
          <h2 className={section.title.className}>{section.title.text}</h2>
          {Array.isArray(section.content) ? (
            section.content.map((content, index) => (
              <p key={index} className={content.className}>{content.text}</p>
            ))
          ) : (
            <p className={section.content.className}>{section.content.text}</p>
          )}
          {section.list && (
            <ul className={section.list.className}>
              {section.list.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          {section.note && (
            <p className={section.note.className}>{section.note.text}</p>
          )}
          {section.rounds && section.rounds.map((round, index) => (
            <div key={index}>
              <h3 className={round.title.className}>{round.title.text}</h3>
              <p className={round.content.className}>{round.content.text}</p>
              {round.advancement && (
                <div>
                  <h4 className={round.advancement.title.className}>{round.advancement.title.text}</h4>
                  <p className={round.advancement.content.className}>{round.advancement.content.text}</p>
                </div>
              )}
              {round.list && (
                <ul className={round.list.className}>
                  {round.list.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {section.prizes && section.prizes.map((prize, index) => (
            <div key={index} className={prize.className}>
              <p>{prize.place}: {prize.reward}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RulesSections;
