import React, {useState, useCallback, useEffect} from 'react';
import {View} from 'react-native';
import {GiftedChat, GiftedAvatar} from 'react-native-gifted-chat';
import website from '../assests/images/website.jpg';
const GroupChat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 2,
        text: 'Hello developer',
        createdAt: new Date(),

        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
        image: 'https://placeimg.com/140/140/any',
      },
    ]);
  }, []);

  const onSend = (messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  };
  return (
    <>
      <GiftedChat
        messages={messages}
        onSend={messages =>
          onSend(messages, 'https://placeimg.com/140/140/any')
        }
        user={{
          _id: 2,
          name: 'vijay',
          avatar: 'https://placeimg.com/140/140/any',
        }}
      />
    </>
  );
};

export default GroupChat;
