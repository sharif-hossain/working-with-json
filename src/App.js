import "./App.css";
import ArrayMap from "./ArrayMap";

const jsonData = [
  {
    name: "Molecule Man",
    age: 29,
    secretIdentity: "Dan Jukes",
    powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
  },
  {
    name: "Madame Uppercut",
    age: 39,
    secretIdentity: "Jane Wilson",
    powers: ["Million tonne punch", "Damage resistance", "Superhuman reflexes"],
  },
];

const fakeData = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  members: [
    {
      name: "Molecule Man",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
    },
    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes",
      ],
    },
    {
      name: "Eternal Flame",
      age: 1000000,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel",
      ],
    },
  ],
};
const fakeInfo = [
  {
    id: 1,
    title: "Ema John",
    technology: ["CSS", "React", "MongoDB"],
    img: "https://i.ibb.co/5FcWxXk/ema-john.png",
    description:
      "Ema John is a e-commerce development service website where a customer can order for a web site design, mobile app development, andriod and ios app development.Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.",
    features: [
      "A bunch list of products ",
      "Add product to cart ",
      "total prices with tax ",
      "collect shipment information ",
      "online payment gateway ",
      "log in info",
    ],
    feature1: "A bunch list of products ",
    feature2: "Add product to cart",
    feature3: "total prices with tax",
    feature4: "collect shipment information ",
    feature5: "online payment gateway ",
    feature6: "login info",
    liveSite: "https://emazon-shopping.web.app/",
    github: "https://github.com/sharif-hossain/ema-john-shopping",
    image1: "https://i.ibb.co/5FcWxXk/ema-john.png",
    image2: "https://i.ibb.co/r6LyjrK/ema.png",
  },
  {
    id: 2,
    title: "Creative Agency",
    technology: ["Bootstrap", "React", "Node.js"],
    img: "https://i.ibb.co/fk78Lws/creative.png",
    description:
      "Creative agency is a e-commerce development service website where a customer can order for a web site design, mobile app development, andriod and ios app development.Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.",
    features: [
      "Order for a creative design ",
      "Can upload image for detail information ",
      "Give a review or feedback ",
      "Add a service ",
      "Check all ordered service ",
      "Delete a service ",
    ],
    feature1: "Order for a creative design  ",
    feature2: "Can upload image for detail information",
    feature3: "Give a review or feedback ",
    feature4: "Add a service ",
    feature5: "Check all ordered service",
    feature6: "Delete a service ",
    liveSite: "https://creativeagencyrecap.web.app/",
    github: "https://github.com/sharif-hossain/creative-agency-clientSide",
    image1: "https://i.ibb.co/fk78Lws/creative.png",
    image2: "https://i.ibb.co/zGYC9Xk/4-Customar-status.png",
  },
];
const dummyData = {
  name: "Admin",
  age: 36,
  rights: ["admin", "editor", "contributor"],
};
const fakeDes = {
  firstName: "Bidhan",
  lastName: "Chatterjee",
  age: 40,
  address: {
    streetAddress: "144 J B Hazra Road",
    city: "Burdwan",
    state: "Paschimbanga",
    postalCode: "713102",
  },
  phoneNumber: [
    {
      type: "personal",
      number: "09832209761",
    },
    {
      type: "fax",
      number: "91-342-2567692",
    },
  ],
  cellNumber: {
    telephone: {
      type: "telePhone",
      number: "01332534645",
    },
    mobile: {
      type: "mobile",
      number: "0170000345",
    },
  },
};

const itemsData = [
  {
    squadName: "Super hero squad",
    homeTown: "Metro City",
    formed: 2016,
    secretBase: "Super tower",
    active: true,
    members: [
      {
        name: "Molecule Man",
        age: 29,
        secretIdentity: "Dan Jukes",
        powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
      },
      {
        name: "Madame Uppercut",
        age: 39,
        secretIdentity: "Jane Wilson",
        powers: [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes",
        ],
      },
      {
        name: "Eternal Flame",
        age: 1000000,
        secretIdentity: "Unknown",
        powers: [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel",
        ],
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <h1>Working With JSON Data</h1>
      <h2>{jsonData[0]["powers"][0]}</h2>
      <h2>{fakeData["members"][1]["powers"][2]}</h2>
      <h2>{fakeData.homeTown}</h2>

      {/* we can access an array with index notation , it is true for nested array*/}

      <h2>{fakeInfo[0].features[0]}</h2>
      <h2>{fakeInfo[0].features[3]}</h2>
      <p>{fakeInfo[1].description}</p>
      <h3>{dummyData.rights[0]}</h3>

      {/* we can access an object with dot notation , it is true for nested object*/}

      <h3>{fakeDes.address.streetAddress}</h3>
      <h3>{fakeDes.phoneNumber[1].number}</h3>
      <h2>{fakeDes.cellNumber.telephone.number}</h2>
      <h3>{jsonData[0].powers[0]}</h3>

      {/* map on jsonData */}

      {jsonData.map((item, i) => (
        <h2 key={i} style={{ color: "green" }}>
          {item.name}
          {item.powers.map((data, j) => (
            <h3 key={j} style={{ color: "red" }}>
              {data}
            </h3>
          ))}
        </h2>
      ))}

      {/* map on fake data */}

      {fakeInfo.map((item, k) => (
        <li key={k}>{item.title}</li>
      ))}

      {/* map on itemsData array */}

      {itemsData.map((item, l) => (
        <h5 key={l}>
          {item.squadName}

          {item.members.map((it, m) => (
            <h6 key={m} style={{ color: "salmon" }}>
              {it.secretIdentity}
              {it.powers.map((data, n) => (
                <ul key={n} style={{ color: "goldenRod" }}>
                  {data}
                </ul>
              ))}
            </h6>
          ))}
        </h5>
      ))}
      {/* we can access an object with dot notation , it is true for nested object*/}
      {/* we cant perform map on objects type data but can on array */}

      <ArrayMap />
    </div>
  );
}

export default App;
