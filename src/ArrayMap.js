import React from "react";

const ArrayMap = () => {
  const fakeData = [
    {
      title: "title1",
      content: [
        {
          imageUrl: "http://placehold.it/300x300",
          title: "Campaigns",
          description:
            "Short description explaining the use of this design in a single sentence.",
        },
        {
          imageUrl: "http://placehold.it/300x300",
          title: "Events",
          description:
            "Short description explaining the use of this design in a single sentence.",
        },
        {
          imageUrl: "http://placehold.it/300x300",
          title: "General",
          description:
            "Short description explaining the use of this design in a single sentence.",
        },
      ],
    },
    {
      title: "title2",
      content: [
        {
          imageUrl: "http://placehold.it/300x300",
          title: "Video Template A",
          description:
            "Short description explaining the use of this design in a single sentence.",
        },
        {
          imageUrl: "http://placehold.it/300x300",
          title: "Video Template A",
          description:
            "Short description explaining the use of this design in a single sentence.",
        },
      ],
    },
  ];
  return (
    <div>
      <h1>Lets implement MAP Function</h1>

      {fakeData.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          {item.content.map((c, i) => (
            <div key={i}>
              {/* <img src={c.imageUrl} /> */}
              <h3>{c.title}</h3>
              <h3>{c.description}</h3>
              <hr />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ArrayMap;
