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

  printResult(resultMap) {
    MissionUtils.Console.print("\n당첨 통계\n---");

    // Map을 일반 객체로 변환하거나 get()으로 안전하게 접근
    const map =
      resultMap instanceof Map ? resultMap : new Map(Object.entries(resultMap));

    MissionUtils.Console.print(`3개 일치 (5,000원) - ${map.get("5th") || 0}개`);
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - ${map.get("4th") || 0}개`
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${map.get("3rd") || 0}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${map.get("2nd") || 0}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${map.get("1st") || 0}개`
    );
  },

  printEarningRate(earningRate) {
    MissionUtils.Console.print(`총 수익률은 ${earningRate}%입니다.`);
  },
};

export default OutputView;
