export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  Chat: undefined;
  ChatRoom: undefined
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  LOGIN: undefined
  Chat: undefined;
  CONTACTS: undefined;
  CAMERA: undefined
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
  createdAt: String;
  user: User;
}
export type ChatRoom = {
  id: String;
  user: User[];
  lastMessage: Message;
}