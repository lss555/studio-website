import Profile3 from '../../images/profile3.jpg';
import Graffiti from '../../images/graffiti.jpg'
import Profile1 from '../../images/profile1.jpg';
import Profile2 from '../../images/profile2.jpg';

import DhMtnbike from '../../images/dhmtnbike.jpg';
import Indoorskate from '../../images/indoorskate.jpg'
import JapanPow from '../../images/japanpow.jpg';
import Monster from '../../images/monster.jpg';
import Mtnbike from '../../images/mtnbike.jpg';
import Skilift from '../../images/skilift.jpg'
import VanderFilms from '../../images/vander-films.jpg';
import Yellowstone from '../../images/yellowstone.jpg';

// Contact Info/page data

export const contactInfo = {
  email: 'Sovereignstudios@gmail.com',
  phone: '(555)123-4567',
  description:
    'This is the best way to contact our team with any general inquiries or if you would like to discuss a project. We will get back to you as soon as possible and we can get a meeting setup.',
  YOUR_SERVICE_ID: 'service_id',
  YOUR_TEMPLATE_ID: 'template_id',
  YOUR_USER_ID: 'user_id',
};


// front page header
export const frontPageHeader = 'A FILM STUDIO DRIVEN BY RESEARCH AND STRATEGY';

// about section
export const aboutHeader = 'Reimanging Media and Marketing with top tier production';

export const aboutImageHeader = Graffiti;

// front page highlight projects
// match id to the 'to' tag number in order to match the route and have the correct display

export const homepageHighlights = [
  {
    id: '1',
    srcStatic: '',
    src: DhMtnbike,
    projectName: 'Downhill Mountain Biking Promo Video',
    to: '/projects/1',
    url: 'https://www.youtube.com/watch?v=CGO_xo0UDnI',
    info: 'Riding ski lifts in the summer with Specialized Bikes',
    subTitle: 'directed by Joe Dirt'
  },
  {
    id: '2',
    src: Indoorskate,
    projectName: 'Skate Film',
    to: '/projects/2',
    url: 'https://www.youtube.com/watch?v=CGO_xo0UDnI',
    info: 'The culture of indoor skating in the winter months',
    subTitle: 'directed by Joe Dirt'
  },
  {
    id: '3',
    src: JapanPow,
    projectName: 'Winter in Japan',
    to: '/projects/3',
    url: 'https://www.youtube.com/watch?v=CGO_xo0UDnI',
    info: 'A film documenting the Japanese winter and the culture of Hokkaido',
    subTitle: 'directed by Joe Dirt'
  },
  {
    id: '4',
    src: Monster,
    projectName: 'Monster Promo Video',
    to: '/projects/4',
    url: 'https://www.youtube.com/watch?v=CGO_xo0UDnI',
    info: 'Riding dirt bikes and going full send with some of the best monster athletes in the world',
    subTitle: 'directed by Joe Dirt'
  },
  {
    id: '5',
    src: Mtnbike,
    projectName: 'Riding Moab',
    to: '/projects/5',
    url: 'https://www.youtube.com/watch?v=CGO_xo0UDnI',
    info: 'Enduro and downhill riding in Moab, UT',
    subTitle: 'directed by Joe Dirt'
  },
  {
    id: '6',
    src: Skilift,
    projectName: 'Early Bird Gets the Worm',
    to: '/projects/5',
    url: 'https://www.youtube.com/watch?v=CGO_xo0UDnI',
    info: 'A short film about the culture of ski towns and chassing fresh snow',
    subTitle: 'directed by Joe Dirt'
  }
];

// Team Members

export const team = [
  {
    id: '1t',
    src: Profile1,
    name: 'George Duncan',
    summary: 'Built a passion filming when I was younger and wanted to take that passion to the next level. So I went to a 4 year film school and have been stoked to join Sovereign team.',
    imgStart: true
  },
  {
    id: '2t',
    src: Profile2,
    name: 'Megan Olson',
    summary: "Film gradute and love film and photography. Have been taking pictures with my mom's camera since I was a kid and love the industry. I focus on raw cinematography to capture the moment and express it.",
    imgStart: false
  },
  {
    id: '3t',
    src: Profile3,
    name: 'Linda Williams',
    summary: 'Award winning photojournalist and filmmaker. I like to focus on directing and crafting great films that produce character and break barriers.',
    imgStart: true
  }
];

// all current projects, shown in work route

export const allProjects = [
  {
    id: '1',
    src: DhMtnbike,
    projectName: 'Downhill Mountain Biking Promo Video',
    to: '/projects/1',
    url: 'https://www.youtube.com/watch?v=CGO_xo0UDnI',
    info: 'Riding ski lifts in the summer with Specialized Bikes. We go up to Winter Park and see what all the hype is about.',
    subTitle: 'directed by Joe Dirt'
  },
  {
    id: '2',
    src: Indoorskate,
    projectName: 'Skate Film',
    to: '/projects/2',
    url: 'https://www.youtube.com/watch?v=CGO_xo0UDnI',
    info: 'The culture of indoor skating in the winter months. We visit some indoor skateparks in Helsinki to see where all the skaters go in the winter.',
    subTitle: 'directed by Joe Dirt'
  },
  {
    id: '3',
    src: JapanPow,
    projectName: 'Winter in Japan',
    to: '/projects/3',
    url: 'https://www.youtube.com/watch?v=CGO_xo0UDnI',
    info: 'A film documenting the Japanese winter and the culture of Hokkaido. In this film we see how the people of Hokkaido live with an average snowfall of over 10 feet annually.',
    subTitle: 'directed by Joe Dirt'
  },
  {
    id: '4',
    src: Yellowstone,
    projectName: 'Tourism in Yellowstone',
    to: '/projects/4',
    url: 'https://www.youtube.com/watch?v=CGO_xo0UDnI',
    info: 'skiing big sky and stuff nice wow cool super nice we worked with so and so nice personal project filming with so and so sdkjfnskjdfnskjndfsd sd;kfnsdkjfn skjdfndskjnf s;dfjnsd;knfj',
    subTitle: 'directed by Joe Dirt'
  },
  {
    id: '5',
    src: Mtnbike,
    projectName: 'Riding Moab',
    to: '/projects/5',
    url: 'https://www.youtube.com/watch?v=CGO_xo0UDnI',
    info: 'Enduro and downhill riding in Moab, UT. We visit Moab the mecca of mountainbiking to see what it has to offer.',
    subTitle: 'directed by Joe Dirt'
  },
  {
    id: '6',
    src: Skilift,
    projectName: 'Early Bird Gets the Worm',
    to: '/projects/5',
    url: 'https://www.youtube.com/watch?v=CGO_xo0UDnI',
    info: 'A short film about the culture of ski towns and chasing fresh snow. We visit the town Telluride and interviews some of the locals.',
    subTitle: 'directed by Joe Dirt'
  },
  {
    id: '7',
    src: VanderFilms,
    projectName: 'E-bike Promo',
    to: '/projects/5',
    url: 'https://www.youtube.com/watch?v=CGO_xo0UDnI',
    info: 'skiing big sky and stuff nice wow cool super nice we worked with so and so nice personal project filming with so and so sdkjfnskjdfnskjndfsd sd;kfnsdkjfn skjdfndskjnf s;dfjnsd;knfj',
    subTitle: 'directed by Joe Dirt'
  },
  {
    id: '8',
    src: Monster,
    projectName: 'Monster Promo Video',
    to: '/projects/5',
    url: 'https://www.youtube.com/watch?v=CGO_xo0UDnI',
    info: 'Riding dirt bikes and going full send with some of the best monster athletes in the world. In this film we visit our neighbors up in Canada to see what they can do.',
    subTitle: 'directed by Joe Dirt'
  }
];
