import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "./Views/InputView";
import OutputView from "./Views/OutputView";
import WinningNumbers from "./Validators/WinningNumbers";
import BonusNumber from "./Validators/BonusNumber";

class App {
  async run() {
    try {
      const purchaseAmountInput = await InputView.readPurchaseAmount();
      // 구입 금액 검증
      const validatedAmount = this.#validatePurchaseAmount(purchaseAmountInput);

      const lottoCount = validatedAmount / 1000;
      OutputView.printLottoCount(lottoCount);

      // OutputView.js에서 로또 출력 함수 호출

      const winningNumbersInput = await InputView.readWinningNumbers();

      // 당첨 번호 검증
      const validatedWinningNumbers =
        WinningNumbers.validate(winningNumbersInput);

      const bonusNumberInput = await InputView.readBonusNumber();

      // 보너스 번호 검증
      const validatedbonusNumber = BonusNumber.validate(
        bonusNumberInput,
        validatedWinningNumbers
      );
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
  #validatePurchaseAmount(amount) {}
}

export default App;
