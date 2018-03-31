import React from "react";
import { shallow, mount } from "enzyme";
import Jargon from "./Jargon";
import fetchMock from "fetch-mock";

describe("Testing Jargon.js", () => {
  it("should check for an instance of generateNewJargon", () => {
    const wrapper = shallow(<Jargon />);
    wrapper.instance().generateNewJargon();
  });

  it("tests fetch", () => {
    const mockFetch = fetchMock.mock("yourAPIquery?", {
      status: 200,
      body: [{ name: "ABC Beer" }]
    });
  });

  it("tests whether fetchArticles updates state given two values: apiEndpoint & index", () => {
    const mockFetchArticles = jest.fn();
    expect(mockFetchArticles).toHaveBeenCalled();

  });
});
