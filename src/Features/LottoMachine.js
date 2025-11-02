import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class LottoMachine {
  static generateLottos(purchaseAmount) {
    const count = purchaseAmount / 1000;
    const lottos = [];

    for (let i = 0; i < count; i++) {
      const numbers = this.#generateSingleLotto();
      const lotto = new Lotto(numbers);
      lottos.push(lotto);
    }

    return lottos;
  }

  static #generateSingleLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b);
  }
}

export default LottoMachine;
