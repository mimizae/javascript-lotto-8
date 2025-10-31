import { MissionUtils } from "@woowacourse/mission-utils";

const InputView = {
  async readPurchaseAmount() {
    return MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
  },

  async readWinningNumbers() {
    return MissionUtils.Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
  },

  async readBonusNumber() {
    return MissionUtils.Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
  },
};

export default InputView;
