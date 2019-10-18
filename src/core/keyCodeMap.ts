const up = 38;
const down = 40;
const left = 37;
const right = 39;
const b = 66;
const a = 65;
const enter = 13;

class keyCodeMap {
  private konami;
  public constructor() {
    this.konami = [up, up, down, down, left, right, left, right, b, a, enter];
  }
  getCode(code: String): Array<Number> {
    return this.konami;
  }
}
export default keyCodeMap;
