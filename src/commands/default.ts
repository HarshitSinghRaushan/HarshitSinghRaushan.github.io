const createDefault = () : string[] => {
  const defaultMsgArr = [
    "<br>",
    "COMMAND NOT FOUND",
    "Type <span class='command'>'helpme'</span> to get started.",
    "<br>"
  ]  
  
  const defaultMsg : string[] = [];
  
  defaultMsgArr.forEach((ele) => {
    defaultMsg.push(ele);
  })

  return defaultMsg;
}

export const DEFAULT = createDefault();
