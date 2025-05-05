import Markdown from "react-markdown";

const MessageList = ({ messages }) => {
  return (
    <div className="flex flex-col p-4 overflow-y-auto  w-10/12 mx-auto">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message my-2 p-2 rounded-lg ${
            message.sender === "User"
              ? "bg-[#2c2c2c] text-white self-end"
              : "text-gray-800 bg-[#dfdede] self-start"
          }`}
        >
          <div className="message-text prose max-w-none">
            <Markdown>{message.text}</Markdown>
          </div>
          <div className="message-sender text-sm italic">
            - {message.sender}
          </div>
          <div className="message-time text-xs text-gray-500">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
