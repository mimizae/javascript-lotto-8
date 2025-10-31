import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "./InputView";
import OutputView from "./OutputView";

class App {
  async run() {
    try {
      const purchaseAmount = await InputView.readPurchaseAmount();
      // 구입금액 검증
      const validatedAmount = this.#validatePurchaseAmount(purchaseAmount);

      const lottoCount = validatedAmount / 1000;
      OutputView.printLottoCount(lottoCount);

      // OutputView.js에서 로또 출력 함수 호출

      const winningNumbers = await InputView.readWinningNumbers();

      // 당첨 번호 검증

      const bonusNumber = await InputView.readBonusNumber();

      // 보너스 번호 검증
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
  #validatePurchaseAmount(amount) {}
}

export default App;
