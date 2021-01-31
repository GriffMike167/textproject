export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  Chat: undefined;
  ChatRoom: undefined
  Camera: undefined;
  Calls: undefined
};

export type MainTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  login: undefined
  chat: undefined;
  Contacts: undefined;
  call: undefined
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type User = {
  id: String,
  name: String;
  imageUri: String;
  status: String;
}
export type Message = {
  id: String;
  content: String;
  contentTwo: String,
  imageCht: String,
  createdAt: String;
  user: User;
}
export type ChatRoom = {
  id: String;
  user: User[];
  lastMessage: Message;
}