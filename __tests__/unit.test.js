// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

// TODO - Part 2

describe("phone number tests", () => {
  test("valid phone number 1", () => {
    expect(isPhoneNumber("(123) 456-7890")).toBe(true);
  });

  test("valid phone number 2", () => {
    expect(isPhoneNumber("123-456-7890")).toBe(true);
  });

  test("invalid phone number 1", () => {
    expect(isPhoneNumber("123 456 7890")).toBe(false);
  });

  test("invalid phone number 2", () => {
    expect(isPhoneNumber("123 45 7890")).toBe(false);
  });
});

describe("email tests", () => {
  test("valid email 1", () => {
    expect(isEmail("bob@gmail.com")).toBe(true);
  });

  test("valid email 2", () => {
    expect(isEmail("bob27_number_one@yahoo.com")).toBe(true);
  });

  test("invalid email 1", () => {
    expect(isEmail("123 45 7890")).toBe(false);
  });

  test("invalid email 2", () => {
    expect(isEmail("hi@g.comm")).toBe(false);
  });
});

describe("strong pw tests", () => {
  test("valid pw 1", () => {
    expect(isStrongPassword("bobiscool_21")).toBe(true);
  });

  test("valid pw 2", () => {
    expect(isStrongPassword("BoB_27_weirdPW")).toBe(true);
  });

  test("invalid pw 1", () => {
    expect(isStrongPassword("123 45 7890")).toBe(false);
  });

  test("invalid pw 2", () => {
    expect(isStrongPassword("h9_!_bobby")).toBe(false);
  });
});

describe("date tests", () => {
  test("valid date 1", () => {
    expect(isDate("1/1/2026")).toBe(true);
  });

  test("valid date 2", () => {
    expect(isDate("01/01/2026")).toBe(true);
  });

  test("invalid date 1", () => {
    expect(isDate("1/1/26")).toBe(false);
  });

  test("invalid date 2", () => {
    expect(isDate("01/01/26")).toBe(false);
  });
});

describe("hex color tests", () => {
  test("valid hex color 1", () => {
    expect(isHexColor("fff")).toBe(true);
  });

  test("valid hex color 2", () => {
    expect(isHexColor("cccccc")).toBe(true);
  });

  test("invalid hex color 1", () => {
    expect(isHexColor("ce0ce_")).toBe(false);
  });

  test("invalid hex color 2", () => {
    expect(isHexColor("9af2 0")).toBe(false);
  });
});
