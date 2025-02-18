import IMFMessage from "./IMFMessage";

type Transcript = {
    messages: IMFMessage[];
    lastMessage?: IMFMessage;
    unreadMessageCount: number;
    // to disply activity labels
    // lastSent: number;
    // lastReceived: number;
    // lastReadByMe: number;
    // lastReadByOther: number;
};

export default Transcript;
