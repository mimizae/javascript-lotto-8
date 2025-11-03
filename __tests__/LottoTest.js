import Lotto from "../src/Features/Lotto";
import BonusNumber from "../src/Validators/BonusNumber";
import PurchaseAmount from "../src/Validators/PurchaseAmount";
import WinningNumbers from "../src/Validators/WinningNumbers";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 6, 7])).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 5])).toThrow("[ERROR]");
  });
});

describe("구입 금액 검증 테스트", () => {
  test("구입 금액이 1000원 단위가 아닐 경우 예외 발생", () => {
    expect(() => PurchaseAmount.validate(5500)).toThrow(
      "[ERROR] 1000원 단위로 입력해 주세요."
    );
  });

  test("구입 금액이 10만원을 초과할 경우 예외 발생", () => {
    expect(() => PurchaseAmount.validate(200000)).toThrow(
      "[ERROR] 1인당 로또 구입 금액은 10만원을 초과할 수 없습니다."
    );
  });

  test("구입 금액이 숫자가 아닐 경우 예외 발생", () => {
    expect(() => PurchaseAmount.validate("abc")).toThrow(
      "[ERROR] 구입 금액에 숫자 외 다른 문자는 입력될 수 없습니다."
    );
  });
});

describe("당첨 번호 검증 테스트", () => {
  test("당첨 번호가 6개 미만일 경우 예외 발생", () => {
    expect(() => WinningNumbers.validate("1,2,3,4,5")).toThrow(
      "[ERROR] 당첨 번호는 6개를 입력해 주세요."
    );
  });

  test("당첨 번호가 6개 초과일 경우 예외 발생", () => {
    expect(() => WinningNumbers.validate("1,2,3,4,5,6,7")).toThrow(
      "[ERROR] 당첨 번호는 6개를 입력해 주세요."
    );
  });

  test("당첨 번호에 숫자가 아닌 값이 포함되면 예외 발생", () => {
    expect(() => WinningNumbers.validate("1,2,3,4,5,a")).toThrow(
      "[ERROR] 숫자 외에는 입력할 수 없습니다. (공백, 문자, 특수문자 불가)"
    );
  });

  test("당첨 번호가 1~45 범위를 벗어나면 예외 발생", () => {
    expect(() => WinningNumbers.validate("0,2,3,4,5,6")).toThrow(
      "[ERROR] 당첨 번호는 1과 45 사이의 정수여야 합니다."
    );
  });

  test("당첨 번호가 중복되면 예외 발생", () => {
    expect(() => WinningNumbers.validate("1,2,3,4,5,5")).toThrow(
      "[ERROR] 당첨 번호는 서로 중복될 수 없습니다."
    );
  });
});

describe("보너스 번호 검증 테스트", () => {
  const validWinningNumbers = [1, 2, 3, 4, 5, 6];

  test("보너스 번호가 숫자가 아닐 경우 예외 발생", () => {
    expect(() => BonusNumber.validate("a", validWinningNumbers)).toThrow(
      "[ERROR] 숫자만 입력 가능합니다."
    );
  });

  test("보너스 번호가 1~45 범위를 벗어나면 예외 발생", () => {
    expect(() => BonusNumber.validate(50, validWinningNumbers)).toThrow(
      "[ERROR] 보너스 번호는 1과 45 사이의 정수여야 합니다."
    );
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외 발생", () => {
    expect(() => BonusNumber.validate(6, validWinningNumbers)).toThrow(
      "[ERROR] 당첨 번호와 중복되는 번호는 보너스 번호가 될 수 없습니다."
    );
  });
});
