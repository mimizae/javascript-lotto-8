import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    try {
      const purchaseAmount = await MissionUtils.Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );
      // 구입금액 검증
      const validatedAmount = this.#validatePurchaseAmount(purchaseAmount);

      const lottoCount = validatedAmount / 1000;
      MissionUtils.Console.print(`\n${lottoCount}개를 구매했습니다.\n`);
      // 로또 출력 함수 호출

      const winningNumbers = await MissionUtils.Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n"
      );

      // 당첨 번호 검증

      const bonusNumber = await MissionUtils.Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요.\n"
      );

      // 보너스 번호 검증
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
  #validatePurchaseAmount(amount) {}
}

export default App;
