class TimeHelper {
  private oldTime;
  public constructor() {
    this.oldTime = null;
  }
  time(newTime) {
    if (this.oldTime == null) {
      this.oldTime = newTime;
      return 0;
    } else {
      const value = newTime - this.oldTime;
      this.oldTime = newTime;
      return value;
    }
  }
  isValidTime(newTime) {
    return this.time(newTime) < 1000;
  }
}
export default TimeHelper;
