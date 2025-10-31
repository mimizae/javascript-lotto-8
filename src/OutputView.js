import { MissionUtils } from "@woowacourse/mission-utils";

const OutputView = {
  printLottoCount(count) {
    MissionUtils.Console.print(`\n${count}개를 구매했습니다.\n`);
  },

  printLottoNumbers(lottos) {
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  },
};

export default OutputView;
