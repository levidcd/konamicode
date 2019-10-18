import keyCodeMapClass from "./keyCodeMap";
import keyCodeCatcherClass from "./keyCodeCatcher";
import TimeClass from "./timeHelper";

const keyCodeMap = new keyCodeMapClass();
const TimeHelper = new TimeClass();
const keyCodeCatcher = new keyCodeCatcherClass();

class Core {
  main() {
    document.onkeydown = event => {
      event = event || window.event;
      if (TimeHelper.isValidTime(new Date().valueOf())) {
        keyCodeCatcher.pushList(event.keyCode);
      } else {
        keyCodeCatcher.resetList();
        keyCodeCatcher.pushList(event.keyCode);
      }
      keyCodeCatcher.checkList(keyCodeMap.getCode("konami"), event.keyCode);
    };
  }
}

export default Core;
