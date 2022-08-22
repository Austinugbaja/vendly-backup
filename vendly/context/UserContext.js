import { createContext, useReducer } from "react";
import UserProfileReducer from "../reducers/UserProfileReducer";

export const UserContext = createContext({
  firstName: "Precious",
  fullName: "Precious Josiah",
  profilePic:
    "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  products: {
    1: {
      name: "Toshiba camera",
      price: 20000,
      image: "/camera.jpg",
      id: 1,
    },
    2: {
      name: "Sony camera",
      price: 3000,
      image: "/camera2.jpg",
      id: 2,
    },
    3: {
      name: "PS4 gamepad",
      price: 20000,
      image: "/gamepad.jpg",
      id: 3,
    },
    4: {
      name: "Xbox gamepad",
      price: 4000,
      image: "/gamepad2.jpg",
      id: 4,
    },
    5: {
      name: "Headphone",
      price: 4000,
      image: "/headphone.jpg",
      id: 5,
    },
    6: {
      name: "Iphone 11",
      price: 9000,
      image: "/iphone.jpg",
      id: 6,
    },
    7: {
      name: "Speaker",
      price: 9000,
      image: "/speaker2.jpg",
      id: 7,
    },
    9: {
      name: "Headphone",
      price: 9000,
      image: "/headphone2.jpg",
      id: 9,
    },
    10: {
      name: "Headphone",
      price: 9000,
      image: "/headphone2.jpg",
      id: 10,
    },
    11: {
      name: "Headphone",
      price: 9000,
      image: "/headphone2.jpg",
      id: 11,
    },
    12: {
      name: "Headphone",
      price: 9000,
      image: "/headphone2.jpg",
      id: 12,
    },
    13: {
      name: "Headphone",
      price: 9000,
      image: "/headphone2.jpg",
      id: 13,
    },
    14: {
      name: "Headphone",
      price: 9000,
      image: "/headphone2.jpg",
      id: 14,
    },
    15: {
      name: "Headphone",
      price: 9000,
      image: "/headphone2.jpg",
      id: 15,
    },
  },
});

const UserContextProvider = (props) => {
  const [userProfile, dispatch] = useReducer(UserProfileReducer, {
    firstName: "Precious",
    fullName: "Precious Josiah",
    profilePic:
      "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    products: {
      1: {
        name: "Toshiba camera",
        price: 20000,
        image: "/camera.jpg",
        id: 1,
      },
      2: {
        name: "Sony camera",
        price: 3000,
        image: "/camera2.jpg",
        id: 2,
      },
      3: {
        name: "PS4 gamepad",
        price: 20000,
        image: "/gamepad.jpg",
        id: 3,
      },
      4: {
        name: "Xbox gamepad",
        price: 4000,
        image: "/gamepad2.jpg",
        id: 4,
      },
      5: {
        name: "Headphone",
        price: 4000,
        image: "/headphone.jpg",
        id: 5,
      },
      6: {
        name: "Iphone 11",
        price: 9000,
        image: "/iphone.jpg",
        id: 6,
      },
      7: {
        name: "Speaker",
        price: 9000,
        image: "/speaker2.jpg",
        id: 7,
      },
      9: {
        name: "Headphone",
        price: 9000,
        image: "/headphone2.jpg",
        id: 9,
      },
      10: {
        name: "Headphone",
        price: 9000,
        image: "/headphone2.jpg",
        id: 10,
      },
      11: {
        name: "Headphone",
        price: 9000,
        image: "/headphone2.jpg",
        id: 11,
      },
      12: {
        name: "Headphone",
        price: 9000,
        image: "/headphone2.jpg",
        id: 12,
      },
      13: {
        name: "Headphone",
        price: 9000,
        image: "/headphone2.jpg",
        id: 13,
      },
      14: {
        name: "Headphone",
        price: 9000,
        image: "/headphone2.jpg",
        id: 14,
      },
      15: {
        name: "Headphone",
        price: 9000,
        image: "/headphone2.jpg",
        id: 15,
      },
    },
  });

  return (
    <UserContext.Provider value={{ userProfile, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
