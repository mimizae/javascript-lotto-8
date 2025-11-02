class PurchaseAmount {
  static validate(input) {
    this.#validateIsNumber(input); // 숫자인지 확인
    const amount = Number(input); // 숫자로 변환
    this.#validateIsThousandUnit(amount); // 1000원 단위인지
    this.#validateMaxLimit(amount); // 10만원 초과 여부

    return amount; // 검증 통과 -> 숫자 반환
  }

  static #validateIsNumber(input) {
    if (!/^\d+$/.test(input)) {
      throw new Error(
        "[ERROR] 구입 금액에 숫자 외 다른 문자는 입력될 수 없습니다."
      );
    }
  }

  static #validateIsThousandUnit(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해 주세요.");
    }
  }

  static #validateMaxLimit(amount) {
    if (amount > 100000) {
      throw new Error(
        "[ERROR] 1인당 로또 구입 금액은 10만원을 초과할 수 없습니다."
      );
    }
  }
}

export default PurchaseAmount;
