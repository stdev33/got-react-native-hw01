export const ProfileScreenUser = {
  name: "Natali Romanova",
  email: "email@example.com",
  photo: require("../assets/images/user-photo.png"),
  posts: [
    {
      id: 1,
      image: require("../assets/images/forest.png"),
      title: "Ліс",
      comments: 8,
      location: "Ivano-Frankivs'k Region, Ukraine",
      likesCount: 153,
      locationCoords: {
        latitude: 48.9226,
        longitude: 24.7111,
      },
    },
    {
      id: 2,
      image: require("../assets/images/black-sea-sunset.png"),
      title: "Захід на Чорному морі",
      comments: 3,
      location: "Ukraine",
      likesCount: 200,
      locationCoords: {
        latitude: 46.4856,
        longitude: 30.7449,
      },
    },
    {
      id: 3,
      image: require("../assets/images/venice.png"),
      title: "Старий будиночок у Венеції",
      comments: 50,
      location: "Italy",
      likesCount: 200,
      locationCoords: {
        latitude: 45.4408,
        longitude: 12.3155,
      },
    },
  ],
};

export const PostsScreenUser = {
  name: "Natali Romanova",
  email: "email@example.com",
  photo: require("../assets/images/user-photo.png"),
  posts: [
    {
      id: 1,
      image: require("../assets/images/forest.png"),
      title: "Ліс",
      comments: 0,
      location: "Ivano-Frankivs'k Region, Ukraine",
      locationCoords: {
        latitude: 48.9226,
        longitude: 24.7111,
      },
    },
    {
      id: 2,
      image: require("../assets/images/black-sea-sunset.png"),
      title: "Захід на Чорному морі",
      comments: 0,
      location: "Ukraine",
      locationCoords: {
        latitude: 46.4856,
        longitude: 30.7449,
      },
    },
  ],
};

export const Comments = [
  {
    id: 1,
    avatar: require("../assets/images/user1.png"),
    text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    date: "09 червня, 2020 | 08:40",
    userType: "user",
  },
  {
    id: 2,
    avatar: require("../assets/images/user2.png"),
    text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    date: "09 червня, 2020 | 09:14",
    userType: "author",
  },
  {
    id: 3,
    avatar: require("../assets/images/user1.png"),
    text: "Could you share camera settings?",
    date: "09 червня, 2020 | 09:20",
    userType: "user",
  },
  {
    id: 4,
    avatar: require("../assets/images/user1.png"),
    text: "Thank you!",
    date: "09 червня, 2020 | 09:21",
    userType: "user",
  },
];
