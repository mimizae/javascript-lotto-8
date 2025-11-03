import { PRIZE_TABLE } from "../Constants/Constants";

class LottoResult {
  constructor(lottos, winningNumbers, bonusNumber) {
    this.lottos = lottos;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.result = this.#calculateResults();
  }

  #calculateResults() {
    const resultMap = new Map();

    this.lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      const matchCount = numbers.filter((n) =>
        this.winningNumbers.includes(n)
      ).length;
      const hasBonus = numbers.includes(this.bonusNumber);

      const rank = this.#determineRank(matchCount, hasBonus);
      if (!rank) return;

      resultMap.set(rank, (resultMap.get(rank) || 0) + 1);
    });

    return resultMap;
  }

  #determineRank(matchCount, hasBonus) {
    if (matchCount === 6) return "1st";
    if (matchCount === 5 && hasBonus) return "2nd";
    if (matchCount === 5) return "3rd";
    if (matchCount === 4) return "4th";
    if (matchCount === 3) return "5th";
    return null;
  }

  getTotalPrize() {
    let total = 0;
    this.result.forEach((count, rank) => {
      total += PRIZE_TABLE[rank] * count;
    });
    return total;
  }

  getEarningRate(purchaseAmount) {
    const totalPrize = this.getTotalPrize();
    return ((totalPrize / purchaseAmount) * 100).toFixed(1);
  }

  getResultMap() {
    return this.result;
  }
}

export default LottoResult;
