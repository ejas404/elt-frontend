export interface SendMessageType{
    receiver : string
    sender : string
    message : string
    contentType : "TEXT"|"IMAGE"
}


export interface ResponseMessage {
    _id: string;
    contentType: "TEXT"|"IMAGE";
    createdAt: string;
    message: string;
    receiver: string;
    sender: string;
  }
  