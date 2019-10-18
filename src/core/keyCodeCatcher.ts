import keyCodeMapClass from "./keyCodeMap";
const keyCodeMap = new keyCodeMapClass();
class keyCodeCatcher {
  private list;
  public constructor() {
    this.list = [];
  }
  main(isValidFn: Function): void {
    document.onkeydown = event => {
      event = event || window.event;
      if (isValidFn(new Date().valueOf())) {
        this.list.push(event.keyCode);
      }
    };
  }
  pushList(keyCode) {
    this.list.push(keyCode);
  }
  checkList(checkList: Array<Number>, keyCode: number) {
    if (this.list.length <= checkList.length) {
      const boolean = checkList[this.list.length - 1] === keyCode;
      if (boolean) {
        if (keyCode === checkList[checkList.length - 1]) {
          alert("现在你有30条命了");
        }
      }
    } else {
      this.resetList();
      this.pushList(keyCode);
    }
  }
  resetList() {
    this.list = [];
  }
  // done(,keyCode: number) {}
}
export default keyCodeCatcher;
