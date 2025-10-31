class BonusNumber {
  static validate(input, winningNumbers) {
    this.#validateIsNumber(input);
    const bonusNumber = Number(input);
    this.#validateRange(bonusNumber);
    this.#validateDuplicates(bonusNumber, winningNumbers);
    return bonusNumber;
  }

  static #validateIsNumber(input) {
    if (!/^\d+$/.test(input)) {
      throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    }
  }
  static #validateRange(bonus) {
    if (bonus < 1 || bonus > 45) {
      throw new Error("[ERROR] 보너스 번호는 1과 45 사이의 정수여야 합니다.");
    }
  }

  static #validateDuplicates(bonus, winningNumbers) {
    if (winningNumbers.includes(bonus)) {
      throw new Error(
        "[ERROR] 당첨 번호와 중복되는 번호는 보너스 번호가 될 수 없습니다."
      );
    }
  }
}

export default BonusNumber;
