class WinningNumbers {
  static validate(input) {
    const numbers = this.#parseWinningNumbers(input); // 쉼표 기준으로 나누기
    this.#validateLength(numbers); // 6개인지
    this.#validateNumbersAreIntegers(numbers); // 숫자 여부
    this.#validateRange(numbers); // 1~45 범위
    this.#validateDuplicates(numbers); // 중복 여부
    return numbers; // 검증 통과된 숫자 배열 반환
  }

  static #parseWinningNumbers(input) {
    return input.split(",").map((n) => Number(n.trim()));
  }

  static #validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개를 입력해 주세요.");
    }
  }

  static #validateNumbersAreIntegers(numbers) {
    if (!numbers.every((n) => /^\d+$/.test(n))) {
      throw new Error(
        "[ERROR] 숫자 외에는 입력할 수 없습니다. (공백, 문자, 특수문자 불가)"
      );
    }
  }

  static #validateRange(numbers) {
    if (!numbers.every((n) => n >= 1 && n <= 45)) {
      throw new Error("[ERROR] 당첨 번호는 1과 45 사이의 정수여야 합니다.");
    }
  }

  static #validateDuplicates(numbers) {
    const unique = new Set(numbers);
    if (unique.size !== numbers.length) {
      throw new Error("[ERROR] 당첨 번호는 서로 중복될 수 없습니다.");
    }
  }
}

export default WinningNumbers;
