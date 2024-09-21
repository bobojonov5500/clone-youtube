import {
  CastForEducation,
  Checkroom,
  DeveloperMode,
  FaceRetouchingNatural,
  FitnessCenter,
  Games,
  Home,
  LiveTv,
  MusicNote,
  OndemandVideo,
  Podcasts,
  Sports,
  TheaterComedy,
} from "@mui/icons-material";

export const category = [
  {
    name: "New",
    icon: <Home />,
  },
  {
    name: "Movie",
    icon: <OndemandVideo />,
  },
  {
    name: "Live",
    icon: <LiveTv />,
  },
  { name: "Gaming", icon: <Games /> },
  {
    name: "Education",
    icon: <CastForEducation />,
  },
  {
    name: "Sport",
    icon: <Sports />,
  },
  {
    name: "Comedy",
    icon: <TheaterComedy />,
  },
  { name: "Podcast", icon: <Podcasts /> },
  { name: "Fashion", icon: <Checkroom /> },
  { name: "Crypto", icon: <DeveloperMode /> },
  { name: "Gym", icon: <FitnessCenter /> },
  { name: "Beauty", icon: <FaceRetouchingNatural /> },
  { name: "Music", icon: <MusicNote /> },
];
