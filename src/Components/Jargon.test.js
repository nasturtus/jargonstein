import React from "react";
import { shallow, mount } from "enzyme";
import Jargon from "./Jargon";

describe("Testing Jargon.js", () => {
  it("should check for an instance of generateNewJargon", () => {
    const wrapper = shallow(<Jargon />);
    wrapper.instance().generateNewJargon();
  });
});
