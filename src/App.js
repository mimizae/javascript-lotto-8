import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "./Views/InputView";
import OutputView from "./Views/OutputView";
import PurchaseAmount from "./Validators/PurchaseAmount";
import LottoMachine from "./Features/LottoMachine";
import WinningNumbers from "./Validators/WinningNumbers";
import BonusNumber from "./Validators/BonusNumber";
import LottoResult from "./Features/LottoResult";

class App {
  async run() {
    try {
      const purchaseAmountInput = await InputView.readPurchaseAmount();
      // TODO: 검증 로직을 담은 클래스들의 파일명 적절한지? 점검
      const validatedAmount = PurchaseAmount.validate(purchaseAmountInput);

      const lottoCount = validatedAmount / 1000;
      OutputView.printLottoCount(lottoCount);

      // OutputView.js에서 로또 출력 함수 호출
      const lottos = LottoMachine.generateLottos(validatedAmount);
      OutputView.printLottoNumbers(lottos);

      const winningNumbersInput = await InputView.readWinningNumbers();

      // 당첨 번호 검증
      const validatedWinningNumbers =
        WinningNumbers.validate(winningNumbersInput);

      const bonusNumberInput = await InputView.readBonusNumber();

      // 보너스 번호 검증
      const validatedBonusNumber = BonusNumber.validate(
        bonusNumberInput,
        validatedWinningNumbers
      );

      const result = new LottoResult(
        lottos,
        validatedWinningNumbers,
        validatedBonusNumber
      );

      OutputView.printResult(result.getResultMap());
      OutputView.printEarningRate(result.getEarningRate(validatedAmount));
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
